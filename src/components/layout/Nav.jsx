import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";

const NAV_LINKS = ["Home", "Projects", "Categories", "Custom Project", "Pricing", "About", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,250,250,0.75)" : "rgba(250,250,250,0.4)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? "#E5E7EB" : "transparent"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[0.925rem] font-medium transition-colors hover:text-[#FF6B00]"
              style={{ color: "#374151" }}
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#" className="text-[0.925rem] font-semibold" style={{ color: "#111827" }}>
            Login
          </a>
          <a
            href="#"
            className="px-5 py-2.5 rounded-[14px] text-white text-[0.9rem] font-semibold shadow-[0_8px_20px_-8px_rgba(255,107,0,0.6)] transition-all hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.75)] hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#FF6B00,#FF8A3D)" }}
          >
            Get Started
          </a>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "#FAFAFA" }}>
          {NAV_LINKS.map((l) => (
            <a key={l} href="#" className="text-[0.95rem] font-medium" style={{ color: "#374151" }}>
              {l}
            </a>
          ))}
          <a
            href="#"
            className="px-5 py-2.5 rounded-[14px] text-white text-center font-semibold"
            style={{ background: "#FF6B00" }}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
