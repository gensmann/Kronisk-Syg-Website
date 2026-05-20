"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Layer = {
  src: string;
  alt?: string;
  depth: number;
  className?: string;
  priority?: boolean;
};

type Props = {
  layers: Layer[];
  children: React.ReactNode;
  className?: string;
  minHeight?: string;
};

export function ParallaxHero({
  layers,
  children,
  className = "",
  minHeight = "min-h-[88vh]",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let target = 0;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const visible = Math.min(1, Math.max(0, 1 - rect.top / vh));
      target = visible;
      el.style.setProperty("--p", target.toFixed(3));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`relative isolate overflow-hidden ${minHeight} ${className}`}
    >
      <div className="absolute inset-0 -z-10">
        {layers.map((l, i) => (
          <div
            key={i}
            className={`parallax-layer absolute inset-0 ${l.className ?? ""}`}
            style={{ ["--depth" as string]: String(l.depth) }}
            aria-hidden={!l.alt}
          >
            <Image
              src={l.src}
              alt={l.alt ?? ""}
              fill
              sizes="100vw"
              priority={l.priority}
              className="object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/40 via-ocean-950/30 to-ocean-950" />
      </div>
      {children}
    </section>
  );
}
