import Image from "next/image";
import { CtaPanel } from "@/components/cta-panel";
import { AboutValuesList } from "@/components/dynamic/about-values-list";
import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="A small studio that helps teams ship with confidence"
        description="Northstar Studio partners with founders and product teams who need speed, quality, and a strong point of view."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:px-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
          <p className="text-brand-muted">
            We blend product strategy, interface design, and frontend engineering into one collaborative process. The goal is simple: help your team move from ideas to meaningful shipped outcomes without losing quality.
          </p>
          <p className="text-brand-muted">
            Engagements are built around priorities, not vanity deliverables. That keeps momentum high and meetings light.
          </p>
        </div>
        <div className="rounded-xl2 border border-brand-line bg-brand-card p-4 shadow-soft">
          <Image
            src="/team-board.svg"
            alt="Team reviewing a product roadmap board"
            width={720}
            height={540}
            className="h-auto w-full rounded-xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <AboutValuesList />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <CtaPanel
          title="Want to collaborate with us?"
          description="Tell us your product stage and timeline. We will suggest the best starting point."
          primaryHref="/contact"
          primaryLabel="Contact us"
          secondaryHref="/blog"
          secondaryLabel="Read our blog"
        />
      </section>
    </>
  );
}