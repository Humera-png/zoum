import { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { loadRazorpayCheckout, openRazorpayCheckout } from "@/lib/razorpay";
import type { Course } from "@/data/courses";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined;

interface OrderResponse {
  orderId: string;
  amountInr: number;
  keyId: string;
  courseTitle: string;
}

export interface EnrollmentIntake {
  name: string;
  phone: string;
  education: string;
  purpose: string;
}

export function useEnrollment() {
  const { getToken } = useAuth();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const enroll = async (course: Course, intake: EnrollmentIntake) => {
    if (!CONTACT_API_URL) {
      setStatus("error");
      setMessage("Enrollment isn't configured yet. Email us at contact@zoumconsultancy.com.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const name = intake.name || user?.fullName || user?.username || "Student";
      const email = user?.primaryEmailAddress?.emailAddress || "";
      if (!email) throw new Error("Add an email address to your account before enrolling.");

      const base = CONTACT_API_URL.replace(/\/$/, "");
      const token = await getToken();

      const orderRes = await fetch(`${base}/courses/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          courseId: course.id,
          name,
          email,
          phone: intake.phone,
          education: intake.education,
          purpose: intake.purpose,
        }),
      });
      if (!orderRes.ok) {
        const body = await orderRes.json().catch(() => null);
        throw new Error(body?.error ?? "Could not start checkout.");
      }
      const order = (await orderRes.json()) as OrderResponse;

      await loadRazorpayCheckout();

      await new Promise<void>((resolve, reject) => {
        openRazorpayCheckout({
          key: order.keyId,
          amount: Math.round(order.amountInr * 100),
          currency: "INR",
          order_id: order.orderId,
          name: "ZOUM Consultancy",
          description: order.courseTitle,
          prefill: { name, email, contact: intake.phone },
          theme: { color: "#1fcb6b" },
          handler: (response) => {
            (async () => {
              try {
                const verifyToken = await getToken();
                const verifyRes = await fetch(`${base}/courses/verify`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${verifyToken}`,
                  },
                  body: JSON.stringify(response),
                });
                if (!verifyRes.ok) throw new Error("Payment verification failed.");
                resolve();
              } catch (err) {
                reject(err instanceof Error ? err : new Error("Payment verification failed."));
              }
            })();
          },
          modal: {
            ondismiss: () => reject(new Error("Checkout closed before completing payment.")),
          },
        });
      });

      setStatus("success");
      setMessage("You're enrolled! We've sent a confirmation to our team.");
    } catch (err) {
      console.error("Enrollment error:", err);
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { enroll, loading, status, message };
}
