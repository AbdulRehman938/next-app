import Link from "next/link";
import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";

const posts = [
  {
    title: "How to write a landing page users trust in 10 seconds",
    excerpt:
      "A practical framework for sharpening your hero section and supporting proof without adding clutter.",
    href: "#",
  },
  {
    title: "A lean design system for startup teams",
    excerpt:
      "What to standardize first so your product can move quickly while preserving consistency.",
    href: "#",
  },
  {
    title: "From idea to shipped flow in one week",
    excerpt:
      "The sprint structure we use to validate a user problem and ship a high-quality first release.",
    href: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Field notes on product, design, and frontend delivery"
        description="Bite-sized insights for teams that want to ship confidently and improve continuously."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft">
              <h2 className="text-xl font-semibold leading-snug">{post.title}</h2>
              <p className="mt-3 text-brand-muted">{post.excerpt}</p>
              <Link href={post.href} className="mt-5 inline-block text-sm font-semibold text-brand-primary hover:text-brand-primaryDark">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <CtaPanel
          title="Need a custom content plan?"
          description="We can help your team define messaging themes that align with product goals."
          primaryHref="/contact"
          primaryLabel="Talk to us"
          secondaryHref="/about"
          secondaryLabel="Learn about our team"
        />
      </section>
    </>
  );
}