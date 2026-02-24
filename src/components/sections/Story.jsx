import React from "react";
import { Section } from "../layout";
import { FadeInOnScroll, useParallax } from "../motion";
import BlurText from "../BlurText";

const STORY_IMAGE =
  "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1600"; // placeholder – swap with padel still

function Story() {
  const offset = useParallax(0.12);

  return (
    <Section
      id="story"
      className="min-h-screen flex items-center py-20 md:py-28 lg:py-32 bg-carbon border-t border-onyx"
    >
      <div className="grid gap-12 md:gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center">
        <FadeInOnScroll
          distance={18}
          duration={0.9}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-porcelain/10 bg-onyx"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle_at_0_0, rgba(247,247,242,0.18), transparent 55%), radial-gradient(circle_at_100%_100%, rgba(137,152,120,0.24), transparent 60%)",
              backgroundSize: "130% 130%",
              backgroundPosition: `0px ${offset * -1}px`
            }}
          />
          <div className="absolute left-6 right-6 bottom-6 flex items-center justify-between text-[11px] text-porcelain/80">
            <span className="uppercase tracking-[0.22em]">
              Between Points / Training
            </span>
            <span className="rounded-full bg-palm/25 px-3 py-1 text-[10px]">
              Glass Court Session
            </span>
          </div>
        </FadeInOnScroll>

        <div className="space-y-6 md:space-y-8">
          <FadeInOnScroll distance={14} duration={0.8}>
            <div className="text-xs md:text-sm uppercase tracking-[0.26em] text-white/60">
              Athlete Story
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll distance={16} duration={0.9}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight max-w-lg">
              <BlurText
                text="Built in the quiet repetitions before anyone is watching."
                animateBy="words"
                delay={70}
                className="inline-flex flex-wrap"
                stepDuration={0.65}
              />
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll distance={18} duration={0.9} delay={0.1}>
            <p className="text-sm md:text-base text-porcelain/85 leading-relaxed max-w-xl">
              Padel is not a game of highlights. It&apos;s a discipline of
              angles, of glass, of timing that punishes the impatient. For{" "}
              <span className="text-white/90">Lucía Vega</span>, every morning
              session begins the same way: slow footwork along the baseline,
              tracking invisible rallies, rehearsing choices that will never
              make the broadcast.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll distance={18} duration={0.9} delay={0.25}>
            <p className="text-sm md:text-base text-porcelain/70 leading-relaxed max-w-xl">
              This film follows the rhythms in between — the return to breath
              after a long exchange, the moment the ball disappears into the
              glass, the recalibration before the next point. It&apos;s a study
              in restraint, in composure, in choosing when to accelerate and
              when to simply stay present.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll distance={16} duration={0.9} delay={0.4}>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Baseline work", "Glass reads", "Decision fatigue", "Night sessions"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] text-white/70"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </Section>
  );
}

export default Story;

