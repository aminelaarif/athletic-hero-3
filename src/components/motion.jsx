import React, { useEffect, useRef, useState } from "react";

const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

export function FadeInOnScroll({
  children,
  delay = 0,
  distance = 20,
  duration = 0.9,
  as: Component = "div",
  className = ""
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(${distance}px)`,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: easing,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </Component>
  );
}

export function StaggeredWords({
  text,
  delayPerWord = 0.08,
  baseDelay = 0.15,
  className = ""
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(18px)",
            transition: `opacity 0.8s ${easing}, transform 0.8s ${easing}`,
            transitionDelay: `${baseDelay + index * delayPerWord}s`
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}

export function useParallax(intensity = 0.2) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = null;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        setOffset(y * intensity * -1);
        frame = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [intensity]);

  return offset;
}

export function StatCounter({ value, label }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [started, value]);

  return (
    <div ref={ref} className="space-y-1">
      <div className="text-3xl md:text-4xl font-semibold tracking-tight">
        {current}
      </div>
      <div className="text-xs md:text-sm text-white/60 uppercase tracking-[0.18em]">
        {label}
      </div>
    </div>
  );
}

