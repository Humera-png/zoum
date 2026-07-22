import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_6ao43b2";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_c8fjxln";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "__xDwFbjdHI1zh9Gd";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const sendMessage = async (data: ContactFormData): Promise<boolean> => {
    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          company: data.company,
          service: data.service,
          message: data.message,
          // to_email must be set as {{to_email}} in the EmailJS template "To Email" field
          to_email: "contact@zoumconsultancy.com",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setToast("Inquiry dispatched — we'll respond within 24 hours.");
      return true;
    } catch (err) {
      console.error("EmailJS error:", err);
      setToast("Failed to send inquiry. Please try again or email us directly.");
      return false;
    } finally {
      setLoading(false);
      setTimeout(() => setToast(""), 6000);
    }
  };

  return { sendMessage, loading, toast };
};
