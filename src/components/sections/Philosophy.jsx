import React from "react";
import { Section } from "../layout";
import { FadeInOnScroll } from "../motion";
import BlurText from "../BlurText";

function Philosophy() {
  return (
    <Section
      id="philosophy"
      className="min-h-screen flex items-center py-20 md:py-28 lg:py-32 bg-gradient-to-b from-carbon via-onyx to-carbon border-t border-onyx"
    >
      <div className="relative overflow-hidden rounded-3xl border border-porcelain/10 bg-gradient-to-r from-carbon via-onyx to-carbon px-6 md:px-10 lg:px-14 py-14 md:py-18 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(228,230,195,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(137,152,120,0.24),_transparent_60%)]" />

        <FadeInOnScroll
          distance={14}
          duration={0.8}
          className="relative z-10 text-xs md:text-sm uppercase tracking-[0.26em] text-white/60"
        >
          Philosophy
        </FadeInOnScroll>

        <FadeInOnScroll
          distance={18}
          duration={1}
          delay={0.1}
          className="relative z-10 mt-6 md:mt-8"
        >
          <p className="max-w-3xl text-2xl md:text-3xl lg:text-[2.1rem] font-semibold leading-snug md:leading-snug tracking-tight text-white">
            <BlurText
              text="“On glass, the game doesn't reward the loudest shot. It rewards the one who can hold their breath a second longer than everyone else.”"
              animateBy="words"
              delay={60}
              className="inline-flex flex-wrap"
              stepDuration={0.7}
            />
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll
          distance={16}
          duration={0.9}
          delay={0.3}
          className="relative z-10 mt-6 md:mt-8 max-w-xl text-sm md:text-base text-white/75 leading-relaxed"
        >
          <p>
            The mindset is disarmingly simple: slow the heart, sharpen the
            read, trust the work. No chaos, no theatrics — just a calm decision
            at every bounce. The film sits inside that space, where time feels
            slightly suspended and every frame stretches the moment before
            contact.
          </p>
        </FadeInOnScroll>
      </div>
    </Section>
  );
}

export default Philosophy;

