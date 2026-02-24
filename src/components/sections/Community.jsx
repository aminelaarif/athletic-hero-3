import React from "react";
import { Section } from "../layout";
import { FadeInOnScroll, StatCounter } from "../motion";
import BlurText from "../BlurText";

function Community() {
  return (
    <Section
      id="community"
      className="min-h-screen flex items-center py-20 md:py-28 lg:py-32 bg-carbon border-t border-onyx"
    >
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <FadeInOnScroll distance={16} duration={0.9}>
            <div className="space-y-4">
              <div className="text-xs md:text-sm uppercase tracking-[0.26em] text-white/60">
                Community & Impact
              </div>
              <h2 className="max-w-xl text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                <BlurText
                  text="A quiet shift in how young athletes meet the game."
                  animateBy="words"
                  delay={70}
                  className="inline-flex flex-wrap"
                  stepDuration={0.65}
                />
              </h2>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll
            distance={16}
            duration={0.9}
            delay={0.1}
            className="max-w-sm text-sm md:text-base text-white/70 leading-relaxed"
          >
            Screenings are held on-court, late at night, with the sound of
            balls still echoing in the background. The goal is simple: let
            young players see themselves in the pauses, not just the points.
          </FadeInOnScroll>
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-stretch">
          <FadeInOnScroll
            distance={18}
            duration={1}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-black via-charcoal-900 to-charcoal-800"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,_rgba(255,255,255,0.08),_transparent_55%),radial-gradient(circle_at_80%_100%,_rgba(0,0,0,0.9),_transparent_60%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8 lg:p-10">
              <div className="space-y-4 md:space-y-5">
                <p className="max-w-xl text-sm md:text-base text-white/75 leading-relaxed">
                  Local clubs host small gatherings where the film is screened
                  between training blocks. No panel, no stage — just players,
                  coaches, and parents in quiet conversation about what it
                  means to compete without burning out.
                </p>
                <p className="max-w-xl text-sm md:text-base text-white/70 leading-relaxed">
                  The campaign travels with Lucía as she moves through
                  different cities, leaving behind footage, workshops, and a
                  slower language for ambition.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-6">
                {["Club screenings", "Player circles", "Coach workshops", "Glass court residencies"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/70"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll
            distance={18}
            duration={1}
            delay={0.1}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-black/40 px-6 py-7 md:px-7 md:py-8 lg:px-8 lg:py-9"
          >
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <StatCounter value={32} label="Clubs Joined" />
              <StatCounter value={480} label="Players Reached" />
              <StatCounter value={18} label="Night Screenings" />
              <StatCounter value={12} label="Cities Visited" />
            </div>

            <div className="mt-8 space-y-3 text-xs md:text-sm text-white/65 leading-relaxed">
              <p>
                Each screening opens with five minutes of silence on court. No
                drills, no balls. Just the sound of shoes and breath while the
                first frames fade in.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </Section>
  );
}

export default Community;

