import React from "react";
import { FadeInOnScroll } from "../motion";
import BlurText from "../BlurText";
import LightRays from "../LightRays";

function Hero() {
  return (
    <header
      id="top"
      className="relative isolate flex min-h-screen items-stretch overflow-hidden bg-onyx text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#CEE5F2"
          raysSpeed={0.9}
          lightSpread={1.2}
          rayLength={2.0}
          pulsating={true}
          fadeDistance={1.2}
          saturation={1.1}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.08}
          distortion={0.12}
          className="opacity-90"
        />
      </div>

      <div className="relative z-10 flex w-full items-center px-6 md:px-10 lg:px-16 py-28 md:py-32">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center gap-10 md:gap-12">
          <FadeInOnScroll
            distance={16}
            duration={0.8}
            className="text-[11px] md:text-xs uppercase tracking-[0.32em] text-porcelain/70"
          >
            Padel / Athlete Film
          </FadeInOnScroll>

          <div className="space-y-5 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[3.6rem] font-semibold leading-tight tracking-tight">
              <BlurText
                text="Quiet Power On The Glass Court."
                animateBy="words"
                delay={90}
                className="inline-flex flex-wrap justify-center"
                stepDuration={0.7}
              />
            </h1>
            <FadeInOnScroll
              delay={0.7}
              duration={0.9}
              distance={12}
              className="mx-auto max-w-xl text-sm md:text-base text-porcelain/80 leading-relaxed"
            >
              Under stadium lights and early-morning shadows, this is where
              pace slows, breath steadies, and every shot becomes a choice.
            </FadeInOnScroll>
          </div>

          <FadeInOnScroll delay={1.1} duration={0.9} distance={10}>
            <div className="flex items-center justify-center gap-6 pt-2 md:pt-4">
              <a
                href="#story"
                className="relative text-xs md:text-sm tracking-[0.26em] uppercase text-white/90"
              >
                <span className="inline-block border-b border-white/40 pb-1 transition-all duration-500 ease-out hover:border-white">
                  Enter The Story
                </span>
              </a>
              <div className="hidden md:flex items-center gap-2 text-[11px] text-porcelain/60">
                <span className="h-[1px] w-5 bg-white/30" />
                <span>Scroll To Explore</span>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20 flex justify-center">
        <FadeInOnScroll distance={6} duration={0.8}>
          <div className="flex flex-col items-center gap-3 text-[11px] text-white/60">
            <span className="tracking-[0.26em] uppercase">Scroll</span>
            <div className="scroll-indicator h-10 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          </div>
        </FadeInOnScroll>
      </div>
    </header>
  );
}

export default Hero;

