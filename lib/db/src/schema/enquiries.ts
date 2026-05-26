import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

// 1. General contact / course enrolment enquiries (Home page form)
export const contactEnquiries = pgTable("contact_enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  specialty: text("specialty"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 2. Hospital audit enquiries (Hospitals page form)
export const hospitalAuditEnquiries = pgTable("hospital_audit_enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  hospital: text("hospital").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 3. Seminar / CME workshop enquiries (Seminars page form)
export const seminarEnquiries = pgTable("seminar_enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  organisation: text("organisation").notNull(),
  city: text("city").notNull(),
  attendees: integer("attendees").notNull(),
  preferredDate: text("preferred_date").notNull(),
  topics: text("topics").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type ContactEnquiry = typeof contactEnquiries.$inferSelect;
export type InsertContactEnquiry = typeof contactEnquiries.$inferInsert;

export type HospitalAuditEnquiry = typeof hospitalAuditEnquiries.$inferSelect;
export type InsertHospitalAuditEnquiry = typeof hospitalAuditEnquiries.$inferInsert;

export type SeminarEnquiry = typeof seminarEnquiries.$inferSelect;
export type InsertSeminarEnquiry = typeof seminarEnquiries.$inferInsert;
