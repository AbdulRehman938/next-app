"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storySteps = [
  {
    title: "Map your funnel",
    text: "We map acquisition to conversion and identify moments where interaction friction causes drop-offs.",
  },
  {
    title: "Prototype key moments",
    text: "We build focused prototypes around the highest leverage moments, then tune behavior with real feedback.",
  },
  {
    title: "Scale with confidence",
    text: "The winning patterns become reusable blocks your team can deploy across product and marketing surfaces.",
  },
];

export function GsapScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );
      }

      if (parallaxRef.current) {
        gsap.to(parallaxRef.current, {
          yPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      stepRefs.current.forEach((step, index) => {
        if (!step) {
          return;
        }

        gsap.fromTo(
          step,
          { y: 60, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 88%",
              end: "top 45%",
              scrub: 0.9,
            },
            delay: index * 0.06,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-brand-ink py-20 text-white">
      <div ref={parallaxRef} className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[auto_1fr] md:px-10">
        <div className="hidden md:flex md:w-14 md:justify-center">
          <div className="relative h-full w-1 rounded-full bg-white/20">
            <div ref={progressRef} className="absolute inset-0 rounded-full bg-brand-accent" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">GSAP Scroll Story</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Smooth scrubbed transitions that guide users through your process</h2>
            <p className="text-base text-white/75 md:text-lg">
              Each block enters with synchronized movement and timing, creating a polished narrative sequence while users scroll.
            </p>
          </div>

          {storySteps.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="rounded-xl2 border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-7"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">Step {index + 1}</p>
              <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-white/75">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}