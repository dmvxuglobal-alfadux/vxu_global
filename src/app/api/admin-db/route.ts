import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, collection, id, data } = body;

    if (!action || !collection) {
      return NextResponse.json({ success: false, error: "Missing action or collection" }, { status: 400 });
    }

    const colRef = adminDb.collection(collection);

    if (action === "add") {
      const docRef = await colRef.add({
        ...data,
        updatedAt: new Date().toISOString()
      });
      return NextResponse.json({ success: true, id: docRef.id });
    }

    if (action === "update") {
      if (!id) return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });
      await colRef.doc(id).update({
        ...data,
        updatedAt: new Date().toISOString()
      });
      return NextResponse.json({ success: true });
    }

    if (action === "upsert") {
      if (!id) return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });
      await colRef.doc(id).set({
        ...data,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      return NextResponse.json({ success: true });
    }

    if (action === "delete") {
      if (!id) return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });
      await colRef.doc(id).delete();
      return NextResponse.json({ success: true });
    }

    if (action === "list") {
      const snapshot = await colRef.orderBy("updatedAt", "desc").get();
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return NextResponse.json({ success: true, data: docs });
    }

    if (action === "get") {
      if (!id) return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });
      const doc = await colRef.doc(id).get();
      if (!doc.exists) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
      return NextResponse.json({ success: true, data: { id: doc.id, ...doc.data() } });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    console.error("ADMIN_DB_CRITICAL_ERROR:", error);
    return NextResponse.json({ 
      success: false, 
      error: error?.message || "A critical database error occurred. Please check your credentials.",
      details: process.env.NODE_ENV === "development" ? error?.stack : undefined
    }, { status: 500 });
  }
}
