import logoUrl from "@/assets/zoum-logo.png";

export function Logo({
  size = 32,
  withWordmark = false,
  className = "",
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src={logoUrl}
        alt="ZOUM Consultancy"
        width={size}
        height={size}
        className="rounded-full object-cover shrink-0"
        style={{ width: size, height: size }}
      />
      {withWordmark && (
        <span className="font-display tracking-tight leading-none">
          <span className="text-foreground">ZOUM</span>
        </span>
      )}
    </span>
  );
}
