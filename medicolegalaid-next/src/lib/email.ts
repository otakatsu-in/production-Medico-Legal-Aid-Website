import nodemailer from "nodemailer";

interface SendEmailParams {
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in", // Use smtp.zoho.in for India region or smtp.zoho.com for US region
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

export async function sendNotificationEmail({ subject, html }: SendEmailParams) {
  const recipient = process.env.NOTIFICATION_RECIPIENT || "recipient@medicolegalaid.com";
  const sender = process.env.ZOHO_EMAIL || "hello@medicolegalaid.com";

  try {
    const info = await transporter.sendMail({
      from: `"MedicoLegalAid" <${sender}>`,
      to: recipient,
      subject,
      html,
    });
    
    return { success: true, data: info.messageId };
  } catch (error) {
    console.error("Failed to send email via Nodemailer:", error);
    return { success: false, error };
  }
}
