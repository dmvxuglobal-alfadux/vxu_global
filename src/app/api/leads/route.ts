import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  console.log("Lead API Triggered (Admin Mode)...");
  try {
    const body = await req.json();
    const { name, email, phone, interest, qualification } = body;

    // 1. Store in Firebase using Admin SDK
    console.log("Attempting Admin Write to Firestore...");
    const docRef = await adminDb.collection("leads").add({
      name,
      email,
      phone,
      interest,
      qualification,
      createdAt: new Date().toISOString(),
      source: "Website Lead Form"
    });
    console.log("Admin Write Success! Doc ID:", docRef.id);

    return NextResponse.json({ success: true, message: "Lead captured successfully!" });
  } catch (error: any) {
    console.error("ADMIN Lead API Error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
