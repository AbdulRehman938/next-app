import Link from "next/link";
import { ContactForm } from "@/components/dynamic/contact-form";
import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Tell us what you are building"
        description="Share your current stage and goals. We will reply with a practical next-step plan."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:px-10">
        <ContactForm />

        <aside className="space-y-6 rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft md:p-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Reach us directly</h2>
            <p className="mt-3 text-brand-muted">
              Prefer email? Send us your brief and timeline. We usually respond within one business day.
            </p>
          </div>
          <div className="space-y-2 text-brand-muted">
            <p>hello@northstarstudio.dev</p>
            <p>Mon - Fri, 9:00 - 18:00</p>
          </div>
          <div className="h-px bg-brand-line" />
          <p className="text-brand-muted">
            Before reaching out, you can also learn more on our <Link href="/about" className="font-semibold text-brand-primary hover:text-brand-primaryDark">About page</Link> or explore practical guides in our <Link href="/blog" className="font-semibold text-brand-primary hover:text-brand-primaryDark">Blog</Link>.
          </p>
        </aside>
      </section>
    </>
  );
}