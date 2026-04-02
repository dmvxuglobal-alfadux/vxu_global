import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, qualification } = body;

    // 1. Format Phone for WhatsApp (AiSensy requires +XXXX)
    let formattedPhone = phone.trim();
    if (!formattedPhone.startsWith("+")) {
       formattedPhone = formattedPhone.length === 10 ? `+91${formattedPhone}` : `+${formattedPhone}`;
    }

    // 2. Store in Firebase using Admin SDK
    const docRef = await adminDb.collection("leads").add({
      name, email, phone: formattedPhone, interest, qualification,
      createdAt: new Date().toISOString(),
      source: "Website High-Conversion Form"
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    // 3. ADMIN NOTIFICATION EMAIL
    const adminMail = {
      from: `"VXU Global Lead Bot" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🚀 New Lead: ${name} - ${interest}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 20px;">
          <h2 style="color: #001265;">New Potential Student! 🎓</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>WhatsApp:</strong> ${formattedPhone}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <p><strong>Qualification:</strong> ${qualification}</p>
          <p style="font-size: 10px; color: #999;">Reference ID: ${docRef.id}</p>
        </div>
      `,
    };

    // 4. USER CONFIRMATION EMAIL
    const userMail = {
      from: `"VXU Global" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Confirmation: Your Counselling Session with VXU Global`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 40px; background: #f9fafb; border-radius: 30px; text-align: center;">
          <h1 style="color: #001265; font-size: 24px;">Welcome to VXU Global, ${name}!</h1>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">Thank you for reaching out. We have received your request for <strong>${interest}</strong>.</p>
          <div style="margin: 30px 0; padding: 20px; background: white; border-radius: 20px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">One of our Senior Education Consultants will contact you on <strong>${formattedPhone}</strong> within the next 24 hours.</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px;">This is an automated confirmation of your submission.</p>
        </div>
      `,
    };

    // 5. AISENSY WHATSAPP TRIGGER (Non-blocking)
    const triggerWhatsApp = async () => {
      try {
        if (!process.env.AISENSY_API_KEY) return;
        await fetch("https://backend.aisensy.com/campaign/t1/api/v2", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            apiKey: process.env.AISENSY_API_KEY,
            campaignName: process.env.AISENSY_CAMPAIGN_NAME || "vxu_lead_confirmation",
            destination: formattedPhone,
            userName: name,
            templateParams: [name, interest], // Adjust based on your template Variables {{1}}, {{2}}
            source: "Website"
          })
        });
      } catch (e) { console.error("AiSensy Error:", e); }
    };

    // Fire all communications
    await Promise.allSettled([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
      triggerWhatsApp()
    ]);

    return NextResponse.json({ success: true, message: "Lead captured and notifications sent!" });
  } catch (error: any) {
    console.error("LEAD_API_CRITICAL_ERROR:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
