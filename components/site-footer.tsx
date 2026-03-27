import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-line bg-brand-card">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-sm text-brand-muted">{new Date().getFullYear()} Northstar Studio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm font-medium text-brand-muted">
          <Link href="/about" className="transition hover:text-brand-ink">
            About
          </Link>
          <Link href="/blog" className="transition hover:text-brand-ink">
            Blog
          </Link>
          <Link href="/contact" className="transition hover:text-brand-ink">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}