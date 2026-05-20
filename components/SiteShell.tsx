"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/data/site";

function useMouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 22, mass: 0.25 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 22, mass: 0.25 });

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mouseX, mouseY]);

  return { smoothX, smoothY };
}

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 54 }, (_, index) => ({
        id: index,
        x: (index * 37) % 100,
        y: (index * 61) % 100,
        size: 2 + ((index * 7) % 5),
        delay: (index % 8) * 0.45,
        duration: 8 + (index % 9)
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-red-400/35 blur-[1px]"
          style={{ left: `${particle.x}%`, top: `${particle.y}%`, width: particle.size, height: particle.size }}
          animate={{ y: [-20, 28, -20], opacity: [0.05, 0.6, 0.05], scale: [1, 1.8, 1] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function SiteShell({ children }) {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const { smoothX, smoothY } = useMouseGlow();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const redShift = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-red-950 via-red-500 to-white"
      />

      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="pointer-events-none fixed left-0 top-0 z-[2] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/18 blur-[90px]"
      />
      <motion.div
        style={{ y: redShift }}
        className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_15%_5%,rgba(185,28,28,0.32),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_50%_90%,rgba(127,29,29,0.32),transparent_34%)]"
      />
      <div className="red-grid fixed inset-0 z-0 opacity-[0.85]" />
      <div className="noise fixed inset-0 z-0 opacity-[0.18]" />
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.92)_86%)]" />
      <ParticleField />

      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-4 py-3 shadow-[0_14px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-[0_0_42px_rgba(255,255,255,0.18)]">
              <Command className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-[0.3em]">Madestic</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-red-200/70">Digital Engine</div>
            </div>
          </Link>

          <div className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.22em] text-zinc-300 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href} className={active ? "text-red-300" : "transition hover:text-red-300"}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/start"
              className="hidden rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-100 transition hover:bg-red-600 hover:text-white sm:inline-flex"
            >
              Build
            </Link>
            <button
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
              aria-label="Open navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-black/85 p-4 backdrop-blur-2xl md:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-zinc-200 transition hover:bg-red-500/10 hover:text-red-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <div className="relative z-10">{children}</div>
    </main>
  );
}
