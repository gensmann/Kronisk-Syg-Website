import Link from "next/link";

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-ocean-950/55 border-b border-brass-500/20">
      <nav
        aria-label="Hovednavigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 text-parchment"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl tracking-wide text-amber-glow hover:text-brass-400"
        >
          <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-brass-400 shadow-[0_0_12px_2px_rgba(217,162,90,0.7)]" />
          Kronisk Syg
        </Link>
        <ul className="flex items-center gap-1 sm:gap-3 text-sm">
          <li>
            <Link
              href="/"
              className="rounded px-3 py-1.5 text-parchment/85 hover:bg-brass-500/10 hover:text-amber-glow"
            >
              Forside
            </Link>
          </li>
          <li>
            <Link
              href="/fest-i-hvalen"
              className="rounded px-3 py-1.5 text-parchment/85 hover:bg-brass-500/10 hover:text-amber-glow"
            >
              Fest i Hvalen
            </Link>
          </li>
          <li>
            <Link
              href="/#lyt"
              className="rounded-full border border-brass-500/60 bg-brass-500/15 px-3.5 py-1.5 font-medium text-amber-glow hover:bg-brass-500/30"
            >
              Lyt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
