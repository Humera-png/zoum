import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useRef } from "react";
import { z } from "zod";
import { ArrowUpRight, Check, Loader2, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useHireTalentForm } from "../hooks/useHireTalentForm";

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
    .regex(/^[+\d\s\-()[\]]{7,20}$/, { message: "Enter a valid phone number" })
    .or(z.literal("")),
  company: z.string().trim().min(1, "Company is required").max(120),
  roleNeeded: z.string().trim().min(1, "Tell us which role(s) you're hiring for").max(120),
  headcount: z.string().trim().min(1, "How many hires do you need?").max(40),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

type FormValues = z.infer<typeof schema>;

const emptyFormValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  roleNeeded: "",
  headcount: "",
  message: "",
};

export function HireTalentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const { sendRequest, loading, toast } = useHireTalentForm();

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

    const success = await sendRequest(result.data);

    if (success) {
      setFormData(emptyFormValues);
      formRef.current?.reset();
      setTimeout(onClose, 1200);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[95] mx-auto max-w-xl max-h-[88vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Hire talent"
          >
            <div className="glass-strong rounded-3xl p-6 md:p-9 relative overflow-hidden">
              <button
                aria-label="Close"
                onClick={onClose}
                className="absolute top-5 right-5 h-9 w-9 rounded-full grid place-items-center hover:bg-black/5 transition"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-xs uppercase tracking-[0.3em] text-lime mb-2">
                / hire talent
              </div>
              <h3 className="font-display text-2xl md:text-3xl tracking-tight pr-8">
                Tell us who you need to hire.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a few details and our recruitment team will reach out within 24 hours.
              </p>

              <AnimatePresence>
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="fixed left-1/2 top-6 z-[110] w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-emerald-300/50 bg-slate-950 px-5 py-4 text-white shadow-2xl shadow-emerald-900/30"
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

              <form ref={formRef} onSubmit={onSubmit} className="mt-6 space-y-4">
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
                    label="Your name"
                    name="name"
                    placeholder="Contact person"
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

                <div className="grid md:grid-cols-2 gap-4">
                  <Field
                    label="Role(s) you're hiring for"
                    name="roleNeeded"
                    placeholder="e.g. 2 Backend Developers"
                    value={formData.roleNeeded}
                    onChange={handleChange}
                    error={errors.roleNeeded}
                  />
                  <Field
                    label="Number of hires"
                    name="headcount"
                    placeholder="e.g. 3"
                    value={formData.headcount}
                    onChange={handleChange}
                    error={errors.headcount}
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    More details
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Timeline, budget, must-have skills..."
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
                      Submit request <ArrowUpRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </MagneticButton>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
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

function Field({ label, name, type = "text", placeholder, value, onChange, error }: FieldProps) {
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
}
