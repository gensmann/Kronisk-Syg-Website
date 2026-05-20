type Props = {
  variant?: "primary" | "ghost";
  id?: string;
  className?: string;
  label?: string;
  subtext?: string;
};

// Listen CTA — actual streaming links are not yet provided.
// Internal anchor only; copy makes it clear links arrive soon.
export function ListenCTA({
  variant = "primary",
  id,
  className = "",
  label = "Lyt",
  subtext,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium tracking-wide transition focus-visible:outline-none";
  const styles =
    variant === "primary"
      ? "bg-brass-shine text-ocean-950 shadow-glow hover:brightness-110 hover:-translate-y-0.5"
      : "border border-brass-500/60 text-amber-glow hover:bg-brass-500/15";
  return (
    <a id={id} href="#lyt" className={`${base} ${styles} ${className}`}>
      <span aria-hidden>♫</span>
      <span>{label}</span>
      {subtext ? <span className="text-xs opacity-75">{subtext}</span> : null}
    </a>
  );
}

export function ListenPlaceholder() {
  return (
    <div
      id="lyt"
      className="relative rounded-2xl border border-brass-500/30 bg-ocean-900/70 p-8 shadow-brass"
    >
      <p className="font-display text-3xl text-amber-glow">Lytte-links lander snart</p>
      <p className="mt-3 max-w-prose text-parchment/85">
        Vi mixer det sidste salt og messing ind i lyden. Snart åbner vi sluserne på
        Spotify, Apple Music, YouTube Music og Tidal — og inviterer dig ombord på
        første sang.
      </p>
      <ul className="mt-6 flex flex-wrap gap-2 text-sm">
        {["Spotify", "Apple Music", "YouTube Music", "Tidal", "Bandcamp"].map((s) => (
          <li
            key={s}
            className="rounded-full border border-brass-500/30 bg-ocean-800/60 px-3 py-1 text-parchment/70"
          >
            {s} <span className="opacity-60">— kommer snart</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
