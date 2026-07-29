export default function Logo({ size = 28 }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M24 3 L9 22 H19 L15 37 L33 16 H21 L24 3Z" fill="#FF6B00" />
      </svg>
      <span className="font-extrabold text-[1.15rem] tracking-tight" style={{ color: "#111827" }}>
        DEBUG<span style={{ color: "#FF6B00" }}>Z</span>
      </span>
    </div>
  );
}
