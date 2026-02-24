import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

function GlobalNav() {
  const [activeSection, setActiveSection] = useState("story");

  useEffect(() => {
    const sectionIds = ["story", "philosophy", "community", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 md:px-10 lg:px-16 py-6 nav-blur bg-gradient-to-b from-black/65 via-black/10 to-transparent"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="flex items-center gap-2 text-xs md:text-sm tracking-[0.28em] uppercase text-white/80">
        <span className="h-[1px] w-8 bg-white/40" />
        <a href="#top" className="hover:text-white transition-colors">
          Padel Narrative
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase text-white/70">
        {[
          { id: "story", label: "Story" },
          { id: "philosophy", label: "Philosophy" },
          { id: "community", label: "Community" },
          { id: "contact", label: "Contact" }
        ].map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative pb-1 transition-colors duration-400 ease-out hover:text-white"
            >
              <span>{link.label}</span>
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1px] bg-white"
                  initial={{ opacity: 0, scaleX: 0.7 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0.7 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </motion.div>
  );
}

export default GlobalNav;

