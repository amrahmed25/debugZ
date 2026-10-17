import {
  Github,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

import Logo from "../common/Logo";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100066739804510",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/debugz",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/debugg_z/",
    icon: Instagram,
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Projects",
    links: [
      { name: "Frontend", href: "#projects" },
      { name: "Backend", href: "#projects" },
      { name: "Full Stack", href: "#projects" },
      { name: "New Arrivals", href: "#projects" },
    ],
  },
  {
    title: "Categories",
    links: [
      { name: "Web Apps", href: "#categories" },
      { name: "Dashboards", href: "#categories" },
      { name: "APIs", href: "#categories" },
      { name: "E-commerce", href: "#categories" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "About Us", href: "#why-choose" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "#contact" },
      { name: "Custom Project", href: "#custom-project" },
      { name: "Privacy Policy", href: "#footer" },
      { name: "Terms & Conditions", href: "#footer" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="pt-16 pb-8 px-6"
      style={{ background: "#111827" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-10">
        {/* Brand */}
        <div className="col-span-2">
          <div className="[&_span]:text-white">
            <a
              href="#home"
              aria-label="DebugZ - Back to home"
              className="inline-block"
            >
              <Logo />
            </a>
          </div>

          <p
            className="mt-4 text-[0.875rem] leading-relaxed max-w-xs"
            style={{ color: "#9CA3AF" }}
          >
            At DebugZ, we build modern digital experiences, deliver
            custom software solutions, and help businesses work smarter
            through technology and automation.
          </p>

          {/* Social Media */}
          <div className="flex gap-3 mt-6">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit DebugZ on ${name}`}
                title={name}
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-[#FF6B00] hover:text-[#FF6B00] hover:-translate-y-1"
                style={{
                  borderColor: "#374151",
                  color: "#9CA3AF",
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="text-white font-semibold text-[0.875rem] mb-4">
              {column.title}
            </h4>

            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-[0.85rem] transition-colors hover:text-[#FF6B00]"
                    style={{ color: "#9CA3AF" }}
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-7xl mx-auto mt-14 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          borderColor: "#374151",
          color: "#6B7280",
        }}
      >
        <p className="text-[0.8rem] text-center sm:text-left">
          © {new Date().getFullYear()} DEBUGZ. All rights reserved.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-[0.8rem] transition-colors hover:text-[#FF6B00]"
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}
