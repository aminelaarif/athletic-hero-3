import React from "react";
import { Section } from "../layout";
import { FadeInOnScroll } from "../motion";
import BlurText from "../BlurText";

function Contact() {
  return (
    <Section
      id="contact"
      className="min-h-screen flex items-center py-20 md:py-24 lg:py-28 bg-carbon border-t border-onyx"
    >
      <div className="max-w-2xl space-y-8 md:space-y-10">
        <FadeInOnScroll distance={16} duration={0.9}>
          <div className="space-y-4">
            <div className="text-xs md:text-sm uppercase tracking-[0.26em] text-white/60">
              Contact
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              <BlurText
                text="Screen the film at your club or create a new chapter."
                animateBy="words"
                delay={70}
                className="inline-flex flex-wrap"
                stepDuration={0.7}
              />
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
              For screenings, collaborations, or bespoke athlete narratives,
              share a few lines about your space and the players you&apos;re
              building around.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll
          distance={18}
          duration={1}
          delay={0.1}
          className="space-y-6 md:space-y-7"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/60">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full bg-transparent border-b border-white/25 py-2 text-sm md:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors duration-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/60">
                Club / Organization
              </label>
              <input
                type="text"
                placeholder="Club name or project"
                className="w-full bg-transparent border-b border-white/25 py-2 text-sm md:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors duration-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/60">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-white/25 py-2 text-sm md:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors duration-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/60">
                Intent
              </label>
              <textarea
                rows={4}
                placeholder="Share how you’d like to use the film or what story you’re hoping to tell."
                className="w-full bg-transparent border-b border-white/25 py-2 text-sm md:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors duration-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="group relative mt-4 inline-flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.26em] text-white/90"
            >
              <span className="border-b border-white/40 pb-1 transition-all duration-500 ease-out group-hover:border-white">
                Send Quietly
              </span>
            </button>
          </form>
        </FadeInOnScroll>
      </div>
    </Section>
  );
}

export default Contact;

