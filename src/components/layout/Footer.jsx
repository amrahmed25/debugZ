import { Github, Twitter, Linkedin } from "lucide-react";
import Logo from "../common/Logo";

const FOOTER_COLUMNS = [
  { title: "Projects", links: ["Frontend", "Backend", "Full Stack", "New Arrivals"] },
  { title: "Categories", links: ["Web Apps", "Dashboards", "APIs", "E-commerce"] },
  { title: "Resources", links: ["Documentation", "Blog", "Changelog", "Status"] },
  { title: "Support", links: ["Contact", "FAQ", "Privacy Policy", "Terms & Conditions"] },
];

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 px-6" style={{ background: "#111827" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-10">
        <div className="md:col-span-2">
          <div className="[&_span]:text-white">
            <Logo />
          </div>
          <p className="mt-4 text-[0.875rem] leading-relaxed max-w-xs" style={{ color: "#9CA3AF" }}>
            The marketplace for premium, production-ready software projects — and custom builds on request.
          </p>
          <div className="flex gap-3 mt-6">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:border-[#FF6B00] hover:text-[#FF6B00]"
                style={{ borderColor: "#374151", color: "#9CA3AF" }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        {FOOTER_COLUMNS.map((c) => (
          <div key={c.title}>
            <h4 className="text-white font-semibold text-[0.875rem] mb-4">{c.title}</h4>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[0.85rem] transition-colors hover:text-[#FF6B00]"
                    style={{ color: "#9CA3AF" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="max-w-7xl mx-auto mt-14 pt-6 border-t text-center text-[0.8rem]"
        style={{ borderColor: "#374151", color: "#6B7280" }}
      >
        © 2026 DEBUGZ. All rights reserved.
      </div>
    </footer>
  );
}
