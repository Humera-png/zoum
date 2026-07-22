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
  // Honeypot — always empty for real users.
  website?: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const sendMessage = async (data: ContactFormData): Promise<boolean> => {
    if (!CONTACT_API_URL) {
      console.error("VITE_CONTACT_API_URL is not configured.");
      setToast("Contact form isn't configured yet. Please email us directly.");
      setTimeout(() => setToast(""), 6000);
      return false;
    }

    setLoading(true);

    try {
      const body = new FormData();
      body.set("name", data.name);
      body.set("email", data.email);
      body.set("phone", data.phone);
      body.set("company", data.company);
      body.set("reason", data.reason);
      body.set("message", data.message);
      body.set("website", data.website ?? "");
      if (data.resume) body.set("resume", data.resume);

      const res = await fetch(CONTACT_API_URL, { method: "POST", body });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.error ?? `Request failed (${res.status})`);
      }

      setToast("Inquiry dispatched — we'll respond within 24 hours.");
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
