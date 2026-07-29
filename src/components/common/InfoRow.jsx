export default function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3.5">
      <div
        className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0"
        style={{ background: "#FFF3EA" }}
      >
        <Icon size={17} color="#FF6B00" />
      </div>
      <div>
        <div className="text-[0.78rem]" style={{ color: "#9CA3AF" }}>
          {label}
        </div>
        <div className="font-semibold text-[0.9rem]" style={{ color: "#111827" }}>
          {value}
        </div>
      </div>
    </div>
  );
}
