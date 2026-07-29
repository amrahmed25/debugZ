export default function Field({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-[0.8rem] font-semibold mb-2" style={{ color: "#111827" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[12px] border px-4 py-3 text-[0.9rem] outline-none transition-colors focus:border-[#FF6B00]"
        style={{ borderColor: "#E5E7EB" }}
      />
    </div>
  );
}
