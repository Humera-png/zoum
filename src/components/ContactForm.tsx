import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, memo, useRef } from "react";
import { z } from "zod";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useContactForm } from "../hooks/useContactForm";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z
    .string()
    .trim()
    .max(255)
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), "Enter a valid email"),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s\-()\[\]]{7,20}$/, { message: "Enter a valid phone number" })
    .or(z.literal("")),
  company: z.string().trim().min(1, "Company is required").max(120),
  service: z.string().trim().min(1, "Select a service").max(120),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

type FormValues = z.infer<typeof schema>;

const emptyFormValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { sendMessage, loading, toast } = useContactForm();

  const [formData, setFormData] = useState<FormValues>(emptyFormValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  // Honeypot: hidden from real users; bots auto-fill it, letting us silently discard spam
  const [honeypot, setHoneypot] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    [],
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Silently reject bot submissions (honeypot filled)
    if (honeypot) return;

    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};
      result.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as keyof FormValues] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const success = await sendMessage(result.data);

    if (success) {
      setFormData(emptyFormValues);
      formRef.current?.reset();
    }
  };

  return (
    <div className="w-full px-4 sm:px-0">
      <div className="glass-strong rounded-3xl p-6 md:p-9 relative overflow-hidden">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="fixed left-1/2 top-6 z-50 w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-emerald-300/50 bg-slate-950 px-5 py-4 text-white shadow-2xl shadow-emerald-900/30"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-emerald-200/70 bg-emerald-400">
                  <Check className="h-5 w-5 text-slate-950" strokeWidth={3} />
                </div>
                <div className="text-sm font-semibold leading-snug">{toast}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
          {/* Honeypot — visually hidden, only bots fill this */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Full name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Field
              label="Company"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
              error={errors.company}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Field
              label="Phone (optional)"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>

          <Field
            label="Service"
            name="service"
            placeholder="Business Strategy / Career / Social Media / AI"
            value={formData.service}
            onChange={handleChange}
            error={errors.service}
          />

          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your goals..."
              value={formData.message}
              onChange={handleChange}
              className={`mt-2 w-full bg-white/40 border border-border rounded-2xl px-4 py-2.5 text-sm placeholder:text-muted-foreground input-glow resize-none transition ${errors.message ? "input-error" : ""}`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <MagneticButton
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#10b981] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send inquiry <ArrowUpRight className="h-4 w-4 ml-2" />
              </>
            )}
          </MagneticButton>
        </form>
      </div>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Field = memo(function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: FieldProps) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-2 w-full bg-white/40 border border-border rounded-2xl px-4 py-3 text-sm placeholder:text-muted-foreground input-glow transition ${error ? "input-error" : ""}`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
});
