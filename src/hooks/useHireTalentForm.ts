import { useState } from "react";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined;

export interface HireTalentFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  roleNeeded: string;
  headcount: string;
  message: string;
  website?: string; // honeypot
}

export const useHireTalentForm = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const sendRequest = async (data: HireTalentFormData): Promise<boolean> => {
    if (!CONTACT_API_URL) {
      setToast("This form isn't configured yet. Email us directly at contact@zoumconsultancy.com.");
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
      form.set("reason", "hire-talent");
      form.set("roleNeeded", data.roleNeeded);
      form.set("headcount", data.headcount);
      form.set("message", data.message);
      form.set("website", data.website ?? "");

      const res = await fetch(CONTACT_API_URL.replace(/\/$/, "") + "/contact", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? `Request failed (${res.status})`);
      }

      setToast("Request received. Our team will reach out within 24 hours.");
      return true;
    } catch (err) {
      console.error("Hire talent form error:", err);
      setToast("Failed to send your request. Please try again or email us directly.");
      return false;
    } finally {
      setLoading(false);
      setTimeout(() => setToast(""), 6000);
    }
  };

  return { sendRequest, loading, toast };
};
