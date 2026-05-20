export function SectionDivider() {
  return (
    <div aria-hidden className="relative my-2 flex items-center justify-center">
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-brass-500/60" />
      <span className="mx-3 inline-block h-2 w-2 rotate-45 border border-brass-500/70 bg-brass-500/20" />
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-brass-500/60" />
    </div>
  );
}
