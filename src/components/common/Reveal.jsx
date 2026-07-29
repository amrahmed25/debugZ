import { useReveal } from "../../hooks/useReveal";

export default function Reveal({ as: Tag = "div", className = "", children, delay = 0, style }) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
