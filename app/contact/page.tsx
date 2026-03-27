import Link from "next/link";
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
        <form className="rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft md:p-8">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-brand-ink">
              Name
              <input
                type="text"
                name="name"
                className="rounded-lg border border-brand-line bg-white px-4 py-3 outline-none ring-brand-primary transition focus:ring-2"
                placeholder="Jane Doe"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-brand-ink">
              Email
              <input
                type="email"
                name="email"
                className="rounded-lg border border-brand-line bg-white px-4 py-3 outline-none ring-brand-primary transition focus:ring-2"
                placeholder="jane@company.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-brand-ink">
              Project details
              <textarea
                name="details"
                rows={5}
                className="rounded-lg border border-brand-line bg-white px-4 py-3 outline-none ring-brand-primary transition focus:ring-2"
                placeholder="What are you trying to launch in the next 60-90 days?"
              />
            </label>
            <button
              type="button"
              className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primaryDark"
            >
              Send inquiry
            </button>
          </div>
        </form>

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