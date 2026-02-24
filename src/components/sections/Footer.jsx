import React from "react";
import { Section } from "../layout";
import { FadeInOnScroll } from "../motion";
import BlurText from "../BlurText";

function Footer() {
  return (
    <Section
      as="footer"
      className="py-10 md:py-12 bg-charcoal-900 border-t border-white/5"
    >
      <FadeInOnScroll distance={10} duration={0.8}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs md:text-sm text-white/55">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-6 bg-white/30" />
            <span className="uppercase tracking-[0.24em]">
              <BlurText
                text="Padel / Athlete Narrative"
                animateBy="words"
                delay={80}
                className="inline-flex"
                stepDuration={0.6}
              />
            </span>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-6">
            <span>© {new Date().getFullYear()} Private Screening Cut</span>
            <span className="text-white/40">
              Crafted as a cinematic editorial experience.
            </span>
          </div>
        </div>
      </FadeInOnScroll>
    </Section>
  );
}

export default Footer;

