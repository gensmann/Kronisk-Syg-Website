type Props = { count?: number; className?: string };

// Decorative bubbles drifting upward. Hidden under prefers-reduced-motion.
export function Bubbles({ count = 14, className = "" }: Props) {
  const seeds = Array.from({ length: count }, (_, i) => {
    const left = (i * 73) % 100;
    const size = 6 + ((i * 11) % 22);
    const delay = (i * 1.7) % 12;
    const duration = 14 + ((i * 5) % 12);
    return { left, size, delay, duration, i };
  });
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {seeds.map((s) => (
        <span
          key={s.i}
          className="bubble"
          style={{
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: 0.45,
          }}
        />
      ))}
    </div>
  );
}
