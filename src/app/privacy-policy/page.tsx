"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-[var(--font-sans)]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-2">Privacy Policy</h1>
        <p className="text-slate-500 font-bold mb-12 flex items-center gap-2">📄 VXU Global – Privacy Policy</p>

        <div className="prose prose-slate max-w-none space-y-12">
          <section>
            <p className="text-lg text-slate-600 leading-relaxed">
              VXU Global Consulting (&ldquo;VXU Global&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and safeguard your data when you interact with our website, submit inquiry forms, or engage with our programs and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-primary mb-4 border-b pb-2">Information We Collect</h2>
            <p className="mb-4 font-bold text-slate-700">We may collect the following types of information:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
               <li className="bg-slate-50 p-4 rounded-xl border border-slate-100"><strong className="text-primary block mb-1">Personal Details</strong> Full name, email address, phone number, WhatsApp number, and city</li>
               <li className="bg-slate-50 p-4 rounded-xl border border-slate-100"><strong className="text-primary block mb-1">Academic Profile</strong> Education details, preferred programs, career interests, financial background (for loan advisory)</li>
               <li className="bg-slate-50 p-4 rounded-xl border border-slate-100"><strong className="text-primary block mb-1">Usage Data</strong> IP address, browser type, device information, and browsing behavior on our site</li>
               <li className="bg-slate-50 p-4 rounded-xl border border-slate-100"><strong className="text-primary block mb-1">Direct Communication</strong> Any information voluntarily provided by you in contact forms, WhatsApp chat, or calls</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-primary mb-4 border-b pb-2">How We Use Your Information</h2>
            <p className="mb-4 font-bold text-slate-700">Your data is used only for legitimate business purposes including:</p>
            <ul className="space-y-2 text-slate-600 font-medium">
               <li>• To provide program and career-related information upon request</li>
               <li>• To contact you via phone, WhatsApp, SMS, or email regarding relevant programs and services</li>
               <li>• To improve our website, marketing, and user experience</li>
               <li>• To deliver personalized communication, guidance, and offers based on your interests</li>
               <li>• For internal analytics, lead qualification, and CRM integration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-primary mb-4 border-b pb-2">Data Sharing & Disclosure</h2>
            <p className="mb-4 text-slate-600 leading-relaxed italic">VXU Global does not sell or rent your personal information.</p>
            <p className="mb-4 font-bold text-slate-700">Your data may only be shared under these circumstances:</p>
            <ul className="space-y-4">
               <li className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">With trusted service partners (e.g., WhatsApp API providers, CRM tools, loan partners) who are bound by confidentiality and data protection terms</li>
               <li className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">When legally required to comply with applicable laws or protect our rights</li>
               <li className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">With partnered universities or EdTech platforms (e.g., study abroad or upskilling program providers) — only after you opt in or submit an application form</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-primary mb-4 border-b pb-2">Data Retention & Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <h4 className="font-bold text-primary mb-2 underline">Retention</h4>
                  <p className="text-sm text-slate-600">We retain your data only as long as necessary to fulfill the purposes outlined in this policy. You may request deletion or access at any time by contacting us at connect@vxu.global.</p>
               </div>
               <div>
                  <h4 className="font-bold text-primary mb-2 underline">Your Rights</h4>
                  <ul className="text-xs space-y-1 text-slate-500 font-medium">
                     <li>• Request access to or correction of your personal data</li>
                     <li>• Opt out of promotional communication at any time</li>
                     <li>• Withdraw consent for data processing</li>
                     <li>• Request deletion of your information</li>
                  </ul>
               </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl">
             <h3 className="text-2xl font-black mb-6">Contact Us</h3>
             <p className="mb-8 text-white/70">For questions or concerns regarding this policy, please contact:</p>
             <div className="space-y-2 font-bold">
                <p className="text-secondary">VXU Global Consulting</p>
                <p>Email: <a href="mailto:connect@vxu.global" className="hover:text-secondary">connect@vxu.global</a></p>
                <p>Phone: +91-8885554048</p>
                <p>Address: Vanasthalipuram, Hyderabad, Telangana, India</p>
                <p>Website: <a href="https://www.vxu.global" className="hover:text-secondary">https://www.vxu.global</a></p>
             </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
