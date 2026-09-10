import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, MessageCircle } from "lucide-react";

// Pops up once payment is verified. The WhatsApp community is where the
// team shares each course's schedule and meeting links, so getting people
// in there is the real "next step" after payment.
export function EnrollmentSuccessModal({
  open,
  onClose,
  courseTitle,
  communityUrl,
}: {
  open: boolean;
  onClose: () => void;
  courseTitle: string;
  communityUrl: string | null;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md glass-strong rounded-3xl p-8 text-center"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 h-8 w-8 grid place-items-center rounded-full hover:bg-black/5 transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mx-auto h-14 w-14 rounded-full bg-lime/15 grid place-items-center">
              <Check className="h-7 w-7 text-lime" />
            </div>
            <h2 className="mt-4 font-display text-2xl tracking-tight">You're enrolled!</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Payment received for <span className="font-medium text-foreground">{courseTitle}</span>.
              A confirmation is on its way to your email.
            </p>

            {communityUrl ? (
              <>
                <div className="mt-6 rounded-2xl bg-lime/5 border border-lime/20 p-4 text-left">
                  <div className="font-display text-sm">One more step</div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Join the WhatsApp community. That's where we post your course schedule, live
                    session links, and every update.
                  </p>
                </div>
                <a
                  href={communityUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" /> Join the WhatsApp community
                </a>
              </>
            ) : (
              <p className="mt-6 text-xs text-muted-foreground">
                We'll email you the schedule and joining details shortly.
              </p>
            )}

            <button
              onClick={onClose}
              className="mt-3 w-full text-sm text-muted-foreground hover:text-foreground transition"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
