import { useState } from "react";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined;

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
    if (!CONTACT_API_URL) {
      setToast("Applications aren't configured yet — email your resume to contact@zoumconsultancy.com.");
      setTimeout(() => setToast(""), 6000);
      return false;
    }

    setLoading(true);

    try {
      const form = new FormData();
      form.set("fullName", data.fullName);
      form.set("gender", data.gender);
      form.set("dob", data.dob);
      form.set("email", data.email);
      form.set("mobile", data.mobile);
      form.set("city", data.city);
      form.set("currentCtc", data.currentCtc);
      form.set("expectedCtc", data.expectedCtc);
      form.set("company", data.company);
      form.set("experience", data.experience);
      form.set("education", data.education);
      form.set("website", "");
      if (data.resume) form.set("resume", data.resume);

      const res = await fetch(CONTACT_API_URL.replace(/\/$/, "") + "/apply", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? `Request failed (${res.status})`);
      }

      setToast("Application received — our team will review it and respond within 24 hours.");
      return true;
    } catch (err) {
      console.error("Job application error:", err);
      setToast("Failed to send your application. Please try again or email us directly.");
      return false;
    } finally {
      setLoading(false);
      setTimeout(() => setToast(""), 6000);
    }
  };

  return { sendApplication, loading, toast };
};
