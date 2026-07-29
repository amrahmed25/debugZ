import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "../common/Reveal";

const FAQS = [
  {
    q: "Can I request custom features?",
    a: "Yes. Every project can be extended, and our team can also build custom features on request as part of the Custom Project service.",
  },
  {
    q: "Do I receive the full source code?",
    a: "Absolutely — every purchase includes complete, unminified source code with no vendor lock-in.",
  },
  {
    q: "Will I receive documentation?",
    a: "Every project ships with setup instructions and inline documentation so you can get running quickly.",
  },
  {
    q: "Can I modify the project after purchase?",
    a: "Yes, the code is yours to modify, extend and deploy however your project needs.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support major credit and debit cards, along with popular digital wallets at checkout.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <Reveal className="text-center mb-12">
        <h2 className="text-[2.1rem] font-extrabold tracking-tight" style={{ color: "#111827" }}>
          Frequently asked questions
        </h2>
      </Reveal>
      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = openIdx === i;
          return (
            <Reveal key={f.q} delay={i * 60}>
              <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                >
                  <span className="font-semibold text-[0.95rem]" style={{ color: "#111827" }}>
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-300"
                    style={{ color: "#FF6B00", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[0.9rem] leading-relaxed" style={{ color: "#6B7280" }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
