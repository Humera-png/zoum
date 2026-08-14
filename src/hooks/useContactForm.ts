import { useState } from "react";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  reason: string;
  message: string;
  resume?: File | null;
  website?: string; // honeypot
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const sendMessage = async (data: ContactFormData): Promise<boolean> => {
    if (!CONTACT_API_URL) {
      setToast("Contact form isn't configured yet. Email us directly at contact@zoumconsultancy.com.");
      setTimeout(() => setToast(""), 6000);
      return false;
    }

    setLoading(true);

    try {
      const form = new FormData();
      form.set("name", data.name);
      form.set("email", data.email);
      form.set("phone", data.phone);
      form.set("company", data.company);
      form.set("reason", data.reason);
      form.set("message", data.message);
      form.set("website", data.website ?? "");
      if (data.resume) form.set("resume", data.resume);

      const res = await fetch(CONTACT_API_URL.replace(/\/$/, "") + "/contact", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? `Request failed (${res.status})`);
      }

      setToast("Inquiry dispatched. We'll respond within 24 hours.");
      return true;
    } catch (err) {
      console.error("Contact form error:", err);
      setToast("Failed to send inquiry. Please try again or email us directly.");
      return false;
    } finally {
      setLoading(false);
      setTimeout(() => setToast(""), 6000);
    }
  };

  return { sendMessage, loading, toast };
};
