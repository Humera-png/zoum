import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, memo, useRef } from "react";
import { z } from "zod";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useJobSeekerForm } from "../hooks/useJobSeekerForm";

const schema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  gender: z.string().trim().min(1, "Select a gender"),
  dob: z.string().trim().min(1, "Date of birth is required"),
  email: z
    .string()
    .trim()
    .max(255)
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), "Enter a valid email"),
  mobile: z
    .string()
    .trim()
    .regex(/^[+\d\s\-()\[\]]{7,20}$/, { message: "Enter a valid mobile number" }),
  city: z.string().trim().min(1, "City is required").max(80),
  currentCtc: z.string().trim().max(40),
  expectedCtc: z.string().trim().max(40),
  company: z.string().trim().max(120),
  experience: z.string().trim().max(40),
  education: z.string().trim().min(1, "Education is required").max(120),
});

type FormValues = z.infer<typeof schema>;

const emptyFormValues: FormValues = {
  fullName: "",
  gender: "",
  dob: "",
  email: "",
  mobile: "",
  city: "",
  currentCtc: "",
  expectedCtc: "",
  company: "",
  experience: "",
  education: "",
};

export function JobSeekerForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { sendApplication, loading, toast } = useJobSeekerForm();

  const [formData, setFormData] = useState<FormValues>(emptyFormValues);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  // Honeypot — visually hidden, only bots fill this
  const [honeypot, setHoneypot] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    const success = await sendApplication({ ...result.data, resume });

    if (success) {
      setFormData(emptyFormValues);
      setResume(null);
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
              name="fullName"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
            />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`mt-2 w-full bg-white/40 border border-border rounded-2xl px-4 py-3 text-sm input-glow transition ${errors.gender ? "input-error" : ""}`}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="mt-1 text-xs text-destructive">{errors.gender}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Date of birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              error={errors.dob}
            />
            <Field
              label="City"
              name="city"
              placeholder="Your city"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Field
              label="Mobile number"
              name="mobile"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.mobile}
              onChange={handleChange}
              error={errors.mobile}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Current CTC (optional)"
              name="currentCtc"
              placeholder="e.g. 5,00,000"
              value={formData.currentCtc}
              onChange={handleChange}
            />
            <Field
              label="Expected CTC (optional)"
              name="expectedCtc"
              placeholder="e.g. 8,00,000"
              value={formData.expectedCtc}
              onChange={handleChange}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Current/last company (optional)"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
            />
            <Field
              label="Experience (optional)"
              name="experience"
              placeholder="e.g. 3 years"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <Field
            label="Education"
            name="education"
            placeholder="e.g. B.Tech Computer Science"
            value={formData.education}
            onChange={handleChange}
            error={errors.education}
          />

          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Resume (PDF, optional)
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setResume(e.target.files?.[0] ?? null)}
              className="mt-2 w-full bg-white/40 border border-border rounded-2xl px-4 py-2.5 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-lime file:text-white file:px-3 file:py-1.5 file:text-xs file:font-medium"
            />
          </div>

          <MagneticButton
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#10b981] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit application <ArrowUpRight className="h-4 w-4 ml-2" />
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
