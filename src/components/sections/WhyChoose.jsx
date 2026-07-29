import { FileCheck, PenTool, Layers, ShieldCheck, Infinity as InfinityIcon, Headphones } from "lucide-react";
import Reveal from "../common/Reveal";

const FEATURES = [
  { icon: FileCheck, title: "Premium Code Quality", desc: "Every project is reviewed against production standards." },
  { icon: PenTool, title: "Modern UI Design", desc: "Interfaces designed with today's SaaS conventions in mind." },
  { icon: Layers, title: "Responsive Layout", desc: "Looks and works great on any screen size, out of the box." },
  { icon: ShieldCheck, title: "Clean Architecture", desc: "Structured, documented code that's easy to extend." },
  { icon: InfinityIcon, title: "Lifetime Updates", desc: "Get improvements and fixes for as long as you own it." },
  { icon: Headphones, title: "24/7 Support", desc: "Real developers ready to help whenever you're stuck." },
];

export default function WhyChoose() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-[2.1rem] font-extrabold tracking-tight" style={{ color: "#111827" }}>
          Why choose DEBUGZ
        </h2>
        <p className="mt-3 text-[1.05rem]" style={{ color: "#6B7280" }}>
          Everything you need to ship with confidence.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 100}>
            <div
              className="p-7 rounded-[20px] border bg-white h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-18px_rgba(17,24,39,0.15)]"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5"
                style={{ background: "#FFF3EA" }}
              >
                <f.icon size={22} color="#FF6B00" />
              </div>
              <h3 className="font-bold text-[1.05rem]" style={{ color: "#111827" }}>
                {f.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed" style={{ color: "#6B7280" }}>
                {f.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
