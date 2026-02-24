import React from "react";
import { FadeInOnScroll } from "./motion";

export function Shell({ children }) {
  return (
    <div className="min-h-screen bg-onyx text-white">
      <div className="grain-overlay" />
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  as: Component = "section"
}) {
  return (
    <Component
      id={id}
      className={`relative w-full px-6 md:px-10 lg:px-16 scroll-mt-24 md:scroll-mt-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Component>
  );
}

export function SectionIntro({ eyebrow, title, kicker }) {
  return (
    <FadeInOnScroll className="space-y-4 md:space-y-5">
      {eyebrow && (
        <div className="text-xs md:text-sm uppercase tracking-[0.24em] text-white/60">
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
          {title}
        </h2>
      )}
      {kicker && (
        <p className="max-w-xl text-sm md:text-base text-white/70 leading-relaxed">
          {kicker}
        </p>
      )}
    </FadeInOnScroll>
  );
}

