import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import nodemailer from "nodemailer";

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

    // 2. Send Email Notification
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"VXU Global Lead Bot" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `New Lead: ${name} - ${interest}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #001265;">New Lead Captured! 🚀</h2>
            <p>A new student has requested a counselling session.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>WhatsApp:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Interest:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${interest}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Qualification:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${qualification}</td>
              </tr>
            </table>
            
            <p style="margin-top: 20px; color: #666; font-size: 12px;">This lead was captured from the VXU Global website form.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Admin Email Notification Sent!");
    } catch (emailError) {
      console.error("Non-blocking Email Error:", emailError);
      // We don't fail the request if just the email fails
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully!" });
  } catch (error: any) {
    console.error("ADMIN Lead API Error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
