import logoUrl from "@/assets/zoum-logo.png";

// The source file is a full horizontal lockup (icon + "zoum" wordmark +
// subtitle baked into one image), not a standalone icon — so it renders at
// a fixed height with the width following naturally, instead of being
// cropped into a small circle. Anywhere this is used, don't add extra
// "ZOUM" text next to it, the image already carries the full wordmark.
export function Logo({
  height = 32,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <img
      src={logoUrl}
      alt="ZOUM Consultancy"
      height={height}
      className={`w-auto object-contain shrink-0 ${className}`}
      style={{ height }}
    />
  );
}
