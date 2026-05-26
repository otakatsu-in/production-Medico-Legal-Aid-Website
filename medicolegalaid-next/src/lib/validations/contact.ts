import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().or(z.literal("")),
  specialty: z.string().min(2, "Specialty or institution is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  turnstileToken: z.string().min(1, "Verification required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const hospitalAuditSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role/Designation is required"),
  hospital: z.string().min(2, "Hospital/Clinic name is required"),
  phone: z.string().min(5, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional().or(z.literal("")),
  turnstileToken: z.string().min(1, "Verification required"),
});

export type HospitalAuditFormData = z.infer<typeof hospitalAuditSchema>;

export const seminarEnquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  designation: z.string().min(2, "Designation is required"),
  organisation: z.string().min(2, "Organisation is required"),
  city: z.string().min(2, "City is required"),
  attendees: z.coerce.number().min(1, "Must have at least 1 attendee"),
  preferredDate: z.string().min(2, "Preferred date/month is required"),
  topics: z.string().min(2, "Please specify topics of interest"),
  phone: z.string().min(5, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  turnstileToken: z.string().min(1, "Verification required"),
});

export type SeminarEnquiryFormData = z.infer<typeof seminarEnquirySchema>;
