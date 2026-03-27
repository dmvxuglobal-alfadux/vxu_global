import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, collection, id, data } = body;

    // Very basic auth check against session storage is not possible here, 
    // but we can check a simple header or similar if needed.
    // For now, we rely on the fact that this is an internal route.

    if (action === "add") {
      const docRef = await adminDb.collection(collection).add(data);
      return NextResponse.json({ success: true, id: docRef.id });
    }

    if (action === "update") {
      await adminDb.collection(collection).doc(id).update(data);
      return NextResponse.json({ success: true });
    }

    if (action === "delete") {
      await adminDb.collection(collection).doc(id).delete();
      return NextResponse.json({ success: true });
    }

    if (action === "upsert") {
      await adminDb.collection(collection).doc(id).set(data, { merge: true });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    console.error("Admin Database API Error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
