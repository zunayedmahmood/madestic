"use client";

import Link from "next/link";
import { motion, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, Flame, Play, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function SectionLabel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-red-100 shadow-[0_0_40px_rgba(220,38,38,0.12)]"
    >
      <Flame className="h-3.5 w-3.5 text-red-400" />
      {children}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [shouldBlur, setShouldBlur] = useState(false);

  useEffect(() => {
    setShouldBlur(window.matchMedia("(hover: hover)").matches);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 38, filter: shouldBlur ? "blur(12px)" : "none" }}
      whileInView={{ opacity: 1, y: 0, filter: shouldBlur ? "blur(0px)" : "none" }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticLink({ children, href = "/start", className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    setIsHoverable(window.matchMedia("(hover: hover)").matches);
  }, []);

  const move = (event: React.MouseEvent) => {
    if (!isHoverable) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({ x: event.clientX - rect.left - rect.width / 2, y: event.clientY - rect.top - rect.height / 2 });
  };

  const leave = () => {
    if (!isHoverable) return;
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      animate={{ x: position.x * 0.08, y: position.y * 0.08 }}
      transition={{ type: "spring", stiffness: 190, damping: 16, mass: 0.45 }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={`group relative inline-flex overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black shadow-[0_0_70px_rgba(239,68,68,0.35)] ${className}`}
      >
        <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-red-800 via-red-500 to-white transition-transform duration-500 group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center gap-3 transition group-hover:text-white">
          {children}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}

export function TiltCard({ children, className = "", glare = true }: { children: React.ReactNode; className?: string; glare?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, x: 50, y: 50 });
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    setIsHoverable(window.matchMedia("(hover: hover)").matches);
  }, []);

  const handleMove = (event: React.MouseEvent) => {
    if (!isHoverable) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setTilt({ rotateX: -(y - 50) * 0.12, rotateY: (x - 50) * 0.12, x, y });
  };

  const handleLeave = () => {
    if (!isHoverable) return;
    setTilt({ rotateX: 0, rotateY: 0, x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.4 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {glare && isHoverable && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at ${tilt.x}% ${tilt.y}%, rgba(255,255,255,0.18), rgba(239,68,68,0.12) 18%, transparent 44%)` }}
        />
      )}
      <div style={{ transform: "translateZ(28px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, description, primary = "Start a build", secondary = "See work", secondaryHref = "/work" }) {
  return (
    <section className="relative px-4 pb-20 pt-36 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>{eyebrow}</SectionLabel>
        <Reveal>
          <h1 className="max-w-6xl text-6xl font-black leading-[0.86] tracking-[-0.08em] text-white sm:text-7xl md:text-8xl xl:text-[9rem]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">{description}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <MagneticLink>{primary}</MagneticLink>
          <Link
            href={secondaryHref}
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-6 py-4 text-sm font-bold text-zinc-200 backdrop-blur-xl transition hover:border-red-500/30 hover:bg-red-500/10"
          >
            <Play className="h-4 w-4 fill-red-400 text-red-400" />
            {secondary}
            <span className="h-px w-8 bg-zinc-500 transition group-hover:w-12 group-hover:bg-red-300" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function CanvaDeckCard({ deck, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay: index * 0.08 }}
    >
      <TiltCard className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:border-red-500/35 hover:bg-red-500/[0.06]">
        <div className="mb-5 px-2 pt-2">
          <div className="mb-3 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-red-100">
            {deck.accent}
          </div>
          <h3 className="text-2xl font-black text-white">{deck.title}</h3>
          <p className="mt-2 text-sm leading-7 text-zinc-300">{deck.description}</p>
        </div>

        {deck.embedUrl ? (
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/50">
            <iframe loading="lazy" className="h-[390px] w-full" src={deck.embedUrl} allowFullScreen allow="fullscreen" title={deck.title} />
          </div>
        ) : (
          <div className="relative flex h-[390px] items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/55">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(239,68,68,0.34),transparent_30%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.11),transparent_28%)]" />
            <div className="absolute inset-8 rounded-[1.8rem] border border-red-500/15" />
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[78%] rounded-[1.6rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_30px_110px_rgba(185,28,28,0.25)] backdrop-blur-xl"
            >
              <div className="mb-4 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="rounded-2xl bg-black/50 p-5">
                <div className="mb-6 inline-flex rounded-full bg-red-500/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-red-100">
                  {deck.accent}
                </div>
                <div className="h-5 w-3/4 rounded-full bg-white/85" />
                <div className="mt-3 h-3 w-2/3 rounded-full bg-white/20" />
                <div className="mt-2 h-3 w-1/2 rounded-full bg-white/15" />
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-2xl bg-red-500/30" />
                  <div className="h-16 rounded-2xl bg-white/10" />
                  <div className="h-16 rounded-2xl bg-red-900/40" />
                </div>
              </div>
            </motion.div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-xl">
              Paste Canva embed URL in data/site.js
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-3 px-2 pb-2">
          <a
            href={deck.link}
            target={deck.link === "#" ? undefined : "_blank"}
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-red-100 transition hover:bg-red-600 hover:text-white"
          >
            Open Full Deck
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.85, delay: index * 0.08 }}
    >
      <TiltCard className="group grid overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.045] backdrop-blur-xl transition hover:border-red-500/35 hover:bg-red-500/[0.055] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
          <img src={project.image} alt={project.title} className="h-full min-h-[360px] w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>

        <div className="flex flex-col justify-between p-8 lg:p-10">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-red-100">
              <Sparkles className="h-3 w-3" />
              {project.category}
            </div>
            <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{project.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-red-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9">
            <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:border-red-500/30 hover:bg-red-500/10">
              View Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
