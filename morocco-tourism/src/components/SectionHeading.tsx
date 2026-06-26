import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
          light ? "text-gold" : "text-terracotta"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-cream/70" : "text-ink/65"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
