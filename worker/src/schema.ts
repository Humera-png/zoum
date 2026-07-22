import { z } from "zod";

// Mirrors src/components/ContactForm.tsx's client-side schema — this is the
// authoritative, server-side copy. Never trust the client-side check alone.
export const REASONS = {
  "business-strategy": "Business Strategy & Operations",
  career: "Career / Job Application",
  "social-media": "Social Media Marketing",
  "ai-automation": "AI Automation",
  "it-software": "IT & Software Development",
  general: "General Inquiry",
} as const;

export type ReasonKey = keyof typeof REASONS;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z
    .string()
    .trim()
    .max(255)
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), "Enter a valid email"),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s\-()[\]]{7,20}$/, { message: "Enter a valid phone number" })
    .or(z.literal("")),
  company: z.string().trim().min(1, "Company is required").max(120),
  reason: z.enum(
    Object.keys(REASONS) as [ReasonKey, ...ReasonKey[]],
    { message: "Select a reason for contact" },
  ),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
  // Honeypot — real users never see or fill this field.
  website: z.string().optional(),
});

export type ContactData = z.infer<typeof contactSchema>;

export const MAX_RESUME_BYTES = 5 * 1024 * 1024;
export const ALLOWED_RESUME_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
export const ALLOWED_RESUME_EXT = new Set([".pdf", ".doc", ".docx"]);
