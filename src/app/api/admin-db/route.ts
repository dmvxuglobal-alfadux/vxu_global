import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, collection, id, data } = body;

    console.log(`Admin DB API: ${action} on ${collection}`);

    if (action === "add") {
      const docRef = await adminDb.collection(collection).add({
        ...data,
        updatedAt: new Date().toISOString()
      });
      return NextResponse.json({ success: true, id: docRef.id });
    }

    if (action === "update") {
      await adminDb.collection(collection).doc(id).update({
        ...data,
        updatedAt: new Date().toISOString()
      });
      return NextResponse.json({ success: true });
    }

    if (action === "delete") {
      await adminDb.collection(collection).doc(id).delete();
      return NextResponse.json({ success: true });
    }

    if (action === "list") {
      const snapshot = await adminDb.collection(collection).orderBy("updatedAt", "desc").get();
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return NextResponse.json({ success: true, data: docs });
    }

    if (action === "get") {
      const doc = await adminDb.collection(collection).doc(id).get();
      if (!doc.exists) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
      return NextResponse.json({ success: true, data: { id: doc.id, ...doc.data() } });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    console.error("Admin Database API Error Details:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
