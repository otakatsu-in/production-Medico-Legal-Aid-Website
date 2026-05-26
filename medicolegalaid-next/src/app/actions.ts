"use server";

import { db, contactEnquiries, hospitalAuditEnquiries, seminarEnquiries } from "@workspace/db";
import { sendNotificationEmail } from "@/lib/email";
import { 
  contactFormSchema, 
  hospitalAuditSchema, 
  seminarEnquirySchema,
  type ContactFormData,
  type HospitalAuditFormData,
  type SeminarEnquiryFormData
} from "@/lib/validations/contact";

async function verifyTurnstileToken(token: string) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.warn("TURNSTILE_SECRET_KEY is missing. Skipping verification for development.");
    return true; // Skip if no key (e.g. local dev if they didn't add it)
  }

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
  });

  const data = await res.json();
  return data.success;
}

export async function submitContactEnquiry(data: ContactFormData) {
  try {
    // 1. Validate
    const validated = contactFormSchema.parse(data);

    // 1.5 Verify Turnstile
    const isHuman = await verifyTurnstileToken(validated.turnstileToken);
    if (!isHuman) {
      return { success: false, error: "Bot verification failed. Please try again." };
    }

    // 2. Insert to Supabase DB via Drizzle
    await db.insert(contactEnquiries).values({
      name: validated.name,
      email: validated.email,
      phone: validated.phone || null,
      specialty: validated.specialty,
      message: validated.message,
    });

    // 3. Send Resend Email Notification
    const emailSubject = `New Contact/Enrollment Enquiry from Dr. ${validated.name}`;
    const emailHtml = `
      <h2>New Enrolment Enquiry</h2>
      <p><strong>Name:</strong> Dr. ${validated.name}</p>
      <p><strong>Email:</strong> ${validated.email}</p>
      <p><strong>Phone:</strong> ${validated.phone || "Not Provided"}</p>
      <p><strong>Specialty/Institution:</strong> ${validated.specialty}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #226610;">
        ${validated.message.replace(/\n/g, "<br/>")}
      </blockquote>
      <hr/>
      <p>This enquiry was automatically saved to the database.</p>
    `;

    await sendNotificationEmail({
      subject: emailSubject,
      html: emailHtml,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error in submitContactEnquiry:", error);
    return { 
      success: false, 
      error: error.message || "An unexpected error occurred while processing your request." 
    };
  }
}

export async function submitHospitalAuditEnquiry(data: HospitalAuditFormData) {
  try {
    // 1. Validate
    const validated = hospitalAuditSchema.parse(data);

    // 1.5 Verify Turnstile
    const isHuman = await verifyTurnstileToken(validated.turnstileToken);
    if (!isHuman) {
      return { success: false, error: "Bot verification failed. Please try again." };
    }

    // 2. Insert to Supabase DB via Drizzle
    await db.insert(hospitalAuditEnquiries).values({
      name: validated.name,
      role: validated.role,
      hospital: validated.hospital,
      phone: validated.phone,
      email: validated.email,
      message: validated.message || null,
    });

    // 3. Send Resend Email Notification
    const emailSubject = `New Hospital Audit Request from ${validated.name} (${validated.hospital})`;
    const emailHtml = `
      <h2>New Hospital Audit Request</h2>
      <p><strong>Contact Person:</strong> ${validated.name}</p>
      <p><strong>Designation/Role:</strong> ${validated.role}</p>
      <p><strong>Hospital Name:</strong> ${validated.hospital}</p>
      <p><strong>Phone:</strong> ${validated.phone}</p>
      <p><strong>Email:</strong> ${validated.email}</p>
      <p><strong>Additional Message / Requirements:</strong></p>
      <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #226610;">
        ${(validated.message || "None").replace(/\n/g, "<br/>")}
      </blockquote>
      <hr/>
      <p>This request was automatically saved to the database.</p>
    `;

    await sendNotificationEmail({
      subject: emailSubject,
      html: emailHtml,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error in submitHospitalAuditEnquiry:", error);
    return { 
      success: false, 
      error: error.message || "An unexpected error occurred while processing your request." 
    };
  }
}

export async function submitSeminarEnquiry(data: SeminarEnquiryFormData) {
  try {
    // 1. Validate
    const validated = seminarEnquirySchema.parse(data);

    // 1.5 Verify Turnstile
    const isHuman = await verifyTurnstileToken(validated.turnstileToken);
    if (!isHuman) {
      return { success: false, error: "Bot verification failed. Please try again." };
    }

    // 2. Insert to Supabase DB via Drizzle
    await db.insert(seminarEnquiries).values({
      name: validated.name,
      designation: validated.designation,
      organisation: validated.organisation,
      city: validated.city,
      attendees: validated.attendees,
      preferredDate: validated.preferredDate,
      topics: validated.topics,
      phone: validated.phone,
      email: validated.email,
    });

    // 3. Send Resend Email Notification
    const emailSubject = `New CME Seminar Enquiry from ${validated.name} (${validated.organisation})`;
    const emailHtml = `
      <h2>New CME Seminar / Workshop Enquiry</h2>
      <p><strong>Organiser Name:</strong> ${validated.name}</p>
      <p><strong>Designation:</strong> ${validated.designation}</p>
      <p><strong>Organisation:</strong> ${validated.organisation}</p>
      <p><strong>City:</strong> ${validated.city}</p>
      <p><strong>Expected Attendees:</strong> ${validated.attendees}</p>
      <p><strong>Preferred Date / Month:</strong> ${validated.preferredDate}</p>
      <p><strong>Topics of Interest:</strong> ${validated.topics}</p>
      <p><strong>Phone:</strong> ${validated.phone}</p>
      <p><strong>Email:</strong> ${validated.email}</p>
      <hr/>
      <p>This enquiry was automatically saved to the database.</p>
    `;

    await sendNotificationEmail({
      subject: emailSubject,
      html: emailHtml,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error in submitSeminarEnquiry:", error);
    return { 
      success: false, 
      error: error.message || "An unexpected error occurred while processing your request." 
    };
  }
}
