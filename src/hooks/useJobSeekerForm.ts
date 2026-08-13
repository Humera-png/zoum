import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_6ao43b2";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_c8fjxln";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "__xDwFbjdHI1zh9Gd";

export interface JobSeekerFormData {
  fullName: string;
  gender: string;
  dob: string;
  email: string;
  mobile: string;
  city: string;
  currentCtc: string;
  expectedCtc: string;
  company: string;
  experience: string;
  education: string;
  resume: File | null;
}

export const useJobSeekerForm = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const sendApplication = async (data: JobSeekerFormData): Promise<boolean> => {
    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.mobile,
          company: `Job application — ${data.city}`,
          service: "Career / Job Application",
          message: `Gender: ${data.gender}\nDate of birth: ${data.dob}\nCity: ${data.city}\nCurrent CTC: ${data.currentCtc}\nExpected CTC: ${data.expectedCtc}\nCurrent/last company: ${data.company}\nExperience: ${data.experience}\nEducation: ${data.education}${data.resume ? `\nResume selected: ${data.resume.name} (ask the candidate to email it directly if it's not attached)` : "\nNo resume attached"}`,
          to_email: "contact@zoumconsultancy.com",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setToast("Application received — our team will review it and respond within 24 hours.");
      return true;
    } catch (err) {
      console.error("EmailJS error:", err);
      setToast("Failed to send your application. Please try again or email us directly.");
      return false;
    } finally {
      setLoading(false);
      setTimeout(() => setToast(""), 6000);
    }
  };

  return { sendApplication, loading, toast };
};
