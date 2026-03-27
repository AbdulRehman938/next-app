import Image from "next/image";
import Link from "next/link";
import { GsapScrollStory } from "@/components/animated/gsap-scroll-story";
import { MotionInteractiveLab } from "@/components/animated/motion-interactive-lab";
import { CtaPanel } from "@/components/cta-panel";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    title: "Fast product discovery",
    description:
      "Turn rough ideas into validated product directions through focused workshops and user-led research.",
  },
  {
    title: "Design systems that scale",
    description:
      "Ship UI foundations your team can reuse across marketing pages, dashboards, and mobile surfaces.",
  },
  {
    title: "Launch-ready engineering",
    description:
      "Bridge design and implementation with production-quality frontend architecture and clean handoff.",
  },
];

export default function Home() {
  return (
    <div className="mesh-bg">
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-14 md:grid-cols-2 md:items-center md:px-10">
        <div className="space-y-7 rise-in">
          <span className="inline-flex rounded-full border border-brand-line bg-brand-card px-3 py-1 text-sm font-medium text-brand-muted">
            Product Studio for ambitious founders
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Build a memorable product presence before you write your next feature.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-brand-muted">
            We help early teams craft positioning, interaction design, and launch-ready frontend experiences that make users trust your product from day one.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primaryDark"
            >
              Book a discovery call
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-brand-line bg-brand-card px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-primary"
            >
              See how we work
            </Link>
          </div>
        </div>
        <div className="rise-in rounded-xl2 border border-brand-line bg-brand-card p-4 shadow-soft">
          <Image
            src="/hero-illustration.svg"
            alt="Illustration of a workspace planning board"
            width={760}
            height={540}
            priority
            className="h-auto w-full rounded-xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Core Capabilities"
          title="Reusable building blocks for product growth"
          description="We combine strategy and implementation so your team can launch faster without sacrificing quality."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <Link
            href="/about"
            className="rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft transition hover:-translate-y-0.5"
          >
            <h3 className="text-xl font-semibold">About us</h3>
            <p className="mt-3 text-brand-muted">
              Meet the team, our process, and why we focus on practical results.
            </p>
          </Link>
          <Link
            href="/blog"
            className="rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft transition hover:-translate-y-0.5"
          >
            <h3 className="text-xl font-semibold">Blog</h3>
            <p className="mt-3 text-brand-muted">
              Insights on product strategy, UX, and frontend craftsmanship.
            </p>
          </Link>
          <Link
            href="/contact"
            className="rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft transition hover:-translate-y-0.5"
          >
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-3 text-brand-muted">
              Tell us your idea and get a clear roadmap for your next release.
            </p>
          </Link>
        </div>
      </section>

      <MotionInteractiveLab />

      <GsapScrollStory />

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <CtaPanel
          title="Ready to shape your product story?"
          description="Start with a focused 30-minute strategy call and we will map your first execution sprint."
          primaryHref="/contact"
          primaryLabel="Start now"
          secondaryHref="/blog"
          secondaryLabel="Read our playbooks"
        />
      </section>
    </div>
  );
}
