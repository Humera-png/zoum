// Loads Razorpay's Checkout script once and reuses it on every subsequent call.
let razorpayLoad: Promise<void> | null = null;

export function loadRazorpayCheckout(): Promise<void> {
  if (typeof window !== "undefined" && (window as any).Razorpay) {
    return Promise.resolve();
  }
  if (razorpayLoad) return razorpayLoad;

  razorpayLoad = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      razorpayLoad = null;
      reject(new Error("Failed to load Razorpay checkout"));
    };
    document.body.appendChild(script);
  });

  return razorpayLoad;
}

export interface RazorpayCheckoutOptions {
  key: string;
  amount: number; // paise
  currency: string;
  order_id: string;
  name: string;
  description: string;
  prefill?: { name?: string; email?: string; contact?: string };
  theme?: { color?: string };
  handler: (response: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => void;
  modal?: { ondismiss?: () => void };
}

export function openRazorpayCheckout(options: RazorpayCheckoutOptions) {
  const RazorpayCtor = (window as any).Razorpay;
  const instance = new RazorpayCtor(options);
  instance.open();
}
