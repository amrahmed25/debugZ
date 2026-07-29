import { Search, ShoppingCart, ShieldCheck, FileCheck } from "lucide-react";
import Reveal from "../common/Reveal";

const STEPS = [
  { icon: Search, title: "Browse Categories", desc: "Explore Frontend, Backend and Full Stack collections." },
  { icon: ShoppingCart, title: "Choose Your Project", desc: "Compare stacks, ratings and pricing side by side." },
  {
    icon: ShieldCheck,
    title: "Secure Checkout or Request Custom Work",
    desc: "Buy instantly, or brief our team on your custom build.",
  },
  { icon: FileCheck, title: "Receive Files & Lifetime Support", desc: "Get full source code plus ongoing updates and help." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[2.1rem] font-extrabold tracking-tight" style={{ color: "#111827" }}>
            How it works
          </h2>
          <p className="mt-3 text-[1.05rem]" style={{ color: "#6B7280" }}>
            From browsing to shipping, in four steps.
          </p>
        </Reveal>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div
            className="hidden lg:block absolute top-7 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #FFD9B8 10%, #FFD9B8 90%, transparent)" }}
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="relative text-center">
              <div
                className="mx-auto w-14 h-14 rounded-full flex items-center justify-center relative z-10 text-white font-bold"
                style={{
                  background: "linear-gradient(135deg,#FF6B00,#FF8A3D)",
                  boxShadow: "0 10px 24px -8px rgba(255,107,0,0.55)",
                }}
              >
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-bold text-[1rem]" style={{ color: "#111827" }}>
                {s.title}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed" style={{ color: "#6B7280" }}>
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
