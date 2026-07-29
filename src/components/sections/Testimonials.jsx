import { Star } from "lucide-react";
import Reveal from "../common/Reveal";

const REVIEWS = [
  {
    name: "Karim El-Sayed",
    role: "Full Stack Developer",
    text: "DEBUGZ cut our project kickoff time in half — the code quality is genuinely production-grade.",
  },
  {
    name: "Laila Hassan",
    role: "Frontend Engineer",
    text: "Clean, well-documented components. The custom project team understood the brief instantly.",
  },
  {
    name: "Youssef Adel",
    role: "CTO, Nimbus Labs",
    text: "Support has been outstanding. Every update ships without breaking a thing.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-[2.1rem] font-extrabold tracking-tight" style={{ color: "#111827" }}>
            Loved by developers
          </h2>
          <p className="mt-3 text-[1.05rem]" style={{ color: "#6B7280" }}>
            What our customers say about building with DEBUGZ.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-7">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <div className="p-7 rounded-[20px] border h-full" style={{ borderColor: "#E5E7EB", background: "#FAFAFA" }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="#FF6B00" color="#FF6B00" />
                  ))}
                </div>
                <p className="text-[0.925rem] leading-relaxed" style={{ color: "#374151" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-[0.85rem]"
                    style={{ background: "linear-gradient(135deg,#FF6B00,#FF8A3D)" }}
                  >
                    {r.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-[0.875rem]" style={{ color: "#111827" }}>
                      {r.name}
                    </div>
                    <div className="text-[0.78rem]" style={{ color: "#6B7280" }}>
                      {r.role}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
