"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";

type LabCard = {
  title: string;
  body: string;
  metric: number;
  accentClass: string;
};

const cards: LabCard[] = [
  {
    title: "Signal Radar",
    body: "Hover and pan to reveal how interaction data can shape conversion strategy in real time.",
    metric: 86,
    accentClass: "bg-brand-primary/20",
  },
  {
    title: "Flow Simulator",
    body: "Drag priorities, rebalance the sequence, and watch how micro-decisions impact user momentum.",
    metric: 72,
    accentClass: "bg-brand-accent/30",
  },
  {
    title: "Retention Pulse",
    body: "A moving visual rhythm that mirrors weekly engagement patterns and highlights churn zones.",
    metric: 94,
    accentClass: "bg-emerald-300/30",
  },
];

function TiltCard({ title, body, metric, accentClass }: LabCard) {
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 22, mass: 0.6 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 22, mass: 0.6 });

  const sheenX = useTransform(rotateY, [-10, 10], [15, 85]);
  const sheenY = useTransform(rotateX, [-10, 10], [80, 20]);
  const sheen = useMotionTemplate`radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.42), rgba(255,255,255,0.02) 58%)`;

  return (
    <motion.article
      className="relative overflow-hidden rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const xPct = x / rect.width;
        const yPct = y / rect.height;

        rotateYRaw.set((xPct - 0.5) * 14);
        rotateXRaw.set((0.5 - yPct) * 14);
      }}
      onMouseLeave={() => {
        rotateXRaw.set(0);
        rotateYRaw.set(0);
      }}
    >
      <motion.div className="absolute inset-0" style={{ backgroundImage: sheen }} />
      <div className="relative z-10 space-y-4" style={{ transform: "translateZ(18px)" }}>
        <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold text-brand-ink ${accentClass}`}>
          Interactive Module
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="text-brand-muted">{body}</p>
        <div>
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
            <span>Readiness</span>
            <span>{metric}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-brand-line">
            <motion.div
              className="h-full rounded-full bg-brand-primary"
              initial={{ width: 0 }}
              whileInView={{ width: `${metric}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function MotionInteractiveLab() {
  const chips = useMemo(
    () => ["Messaging", "UX Flow", "Prototype", "Roadmap", "A/B Tests", "Pricing"],
    []
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
      <div className="mb-10 max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary">Framer Motion Lab</p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Interactive cards with depth, drag, and live motion feedback</h2>
        <p className="text-brand-muted">
          These modules are reusable and designed to support richer storytelling sections across your future pages.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <TiltCard key={card.title} {...card} />
        ))}
      </div>

      <div className="mt-8 rounded-xl2 border border-dashed border-brand-line bg-brand-card p-5">
        <p className="mb-4 text-sm font-medium text-brand-muted">Drag these priority chips to simulate planning interactions:</p>
        <div className="flex flex-wrap gap-3">
          {chips.map((chip, index) => (
            <motion.span
              key={chip}
              drag
              dragElastic={0.25}
              dragConstraints={{ left: -18, right: 18, top: -10, bottom: 10 }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileDrag={{ scale: 1.08, rotate: index % 2 === 0 ? 3 : -3 }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              viewport={{ once: true }}
              className="cursor-grab rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-ink active:cursor-grabbing"
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}