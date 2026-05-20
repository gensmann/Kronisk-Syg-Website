import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-brass-500/20 bg-ocean-950/60">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 md:grid-cols-3 text-parchment/80">
        <div>
          <p className="font-display text-2xl text-amber-glow">Kronisk Syg</p>
          <p className="mt-2 text-sm leading-relaxed">
            Et dansk AI-band og musikalsk fortælleunivers. Vi gør plads —
            også når livet gør modstand.
          </p>
        </div>
        <div>
          <p className="font-display text-lg text-brass-400">Naviger</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:text-amber-glow" href="/">Forside</Link></li>
            <li><Link className="hover:text-amber-glow" href="/fest-i-hvalen">Fest i Hvalen</Link></li>
            <li><Link className="hover:text-amber-glow" href="/#lyt">Lytte-links</Link></li>
            <li><Link className="hover:text-amber-glow" href="/#manifest">Manifest</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg text-brass-400">Kolofon</p>
          <p className="mt-2 text-sm leading-relaxed">
            Musik, billeder og univers skabes med generativ AI som medforfatter.
            Tekst og kuratering: Kronisk Syg.
          </p>
          <p className="mt-3 text-xs text-parchment/55">
            © {new Date().getFullYear()} Kronisk Syg
          </p>
        </div>
      </div>
    </footer>
  );
}
