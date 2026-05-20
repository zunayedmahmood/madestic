"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Command } from "lucide-react";
import { useEffect } from "react";

export function HeroMachine() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 22 });
  const orbitX = useTransform(smoothX, [0, 1400], [-18, 18]);
  const orbitY = useTransform(smoothY, [0, 900], [-18, 18]);

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div style={{ x: orbitX, y: orbitY }} className="relative mx-auto aspect-square w-full max-w-[570px]">
      <motion.div className="absolute inset-4 rounded-full border border-red-500/20 shadow-[inset_0_0_90px_rgba(185,28,28,0.15)]" animate={{ rotate: 360 }} transition={{ duration: 44, repeat: Infinity, ease: "linear" }}>
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 shadow-[0_0_40px_rgba(239,68,68,1)]" />
      </motion.div>

      <motion.div className="absolute inset-20 rounded-full border border-white/10" animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
        <div className="absolute bottom-8 left-6 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_32px_rgba(255,255,255,0.8)]" />
      </motion.div>

      <motion.div className="absolute inset-32 rounded-full border border-red-300/20" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-red-300 shadow-[0_0_32px_rgba(252,165,165,1)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.82, rotateX: 18 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_45px_150px_rgba(220,38,38,0.35)] backdrop-blur-2xl sm:h-64 sm:w-64"
      >
        <div className="flex h-full flex-col justify-between rounded-[2rem] border border-red-500/20 bg-black/75 p-5">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_0_34px_rgba(220,38,38,0.65)]">
              <Command className="h-5 w-5" />
            </div>
            <div className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-red-100">Live</div>
          </div>
          <div>
            <div className="text-6xl font-black tracking-tighter text-white">M</div>
            <p className="mt-3 text-xs leading-5 text-zinc-300">A digital execution engine for ambitious brands, operators, and founders.</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.24),transparent_56%)] blur-3xl" />
      <div className="absolute inset-24 rounded-full bg-white/5 blur-3xl" />
    </motion.div>
  );
}
