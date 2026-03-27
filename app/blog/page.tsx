import { CtaPanel } from "@/components/cta-panel";
import { BlogPostGrid } from "@/components/dynamic/blog-post-grid";
import { PageHero } from "@/components/page-hero";

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Field notes on product, design, and frontend delivery"
        description="Bite-sized insights for teams that want to ship confidently and improve continuously."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <BlogPostGrid />
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