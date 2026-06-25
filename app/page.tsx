import Link from "next/link";
import { Star, ShieldCheck } from "lucide-react";
import { HeroMachine } from "@/components/HeroMachine";
import { CanvaDeckCard, MagneticLink, ProjectCard, Reveal, SectionLabel, TiltCard } from "@/components/UI";
import { decks, highlights, process, projects, services, stack } from "@/data/site";

const stats = [
  ["01", "Product-first studio mindset"],
  ["360°", "Strategy to deployment"],
  ["AI", "Built into workflows"]
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center px-4 pb-20 pt-28 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-red-100 backdrop-blur-xl">
                <Star className="h-3.5 w-3.5 fill-red-400 text-red-400" />
                Strategy × Software × AI × Growth
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.08em] text-white sm:text-7xl md:text-8xl xl:text-[9rem]">
                We engineer brands into systems.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Madestic is a digital execution studio from Dhaka building software, automation, AI workflows, strategy systems, and premium digital experiences for businesses ready to move faster than their market.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticLink>Start a Madestic build</MagneticLink>
              <Link href="/work" className="rounded-full border border-white/10 bg-white/[0.045] px-6 py-4 text-sm font-bold text-zinc-200 backdrop-blur-xl transition hover:border-red-500/30 hover:bg-red-500/10">
                Explore selected work
              </Link>
            </Reveal>
            <Reveal delay={0.32} className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                  <div className="text-2xl font-black text-white sm:text-3xl">{value}</div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">{label}</div>
                </div>
              ))}
            </Reveal>
          </div>
          <HeroMachine />
        </div>
      </section>

      <section className="px-4 py-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>The Studio</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                Not just websites. Not just ads. We build the engine behind the business.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="max-w-2xl text-lg leading-9 text-zinc-300">
                Most agencies make things look good. Most software teams make things function. Madestic sits at the intersection: cinematic brand presence, clean product design, strong engineering, and operational systems that actually move the company forward.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <TiltCard className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition hover:border-red-500/30 hover:bg-red-500/[0.06]">
                  <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-red-600/15 blur-3xl" />
                  <div className="relative z-10">
                    <div className="mb-10 text-sm font-black uppercase tracking-[0.34em] text-red-300">{item.step}</div>
                    <h3 className="text-3xl font-black tracking-tight text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">{item.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <SectionLabel>Capabilities</SectionLabel>
              <Reveal>
                <h2 className="text-5xl font-black leading-none tracking-[-0.06em] text-white sm:text-6xl">Digital products with teeth.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 text-base leading-8 text-zinc-300">From business software to market presence, every layer is designed to look premium, work reliably, and scale with the company.</p>
              </Reveal>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {services.slice(0, 4).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={index * 0.05}>
                    <TiltCard className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition hover:border-red-500/30 hover:bg-red-500/[0.08]">
                      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-600/15 blur-3xl transition group-hover:bg-red-500/25" />
                      <div className="relative z-10">
                        <div className="mb-7 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-red-300 shadow-[0_0_34px_rgba(220,38,38,0.16)]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight text-white">{service.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-zinc-300">{service.text}</p>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <Reveal>
                <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">Real systems. Real interfaces. Real execution.</h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-lg leading-9 text-zinc-300">A preview of Madestic’s product, software, automation, and launch work. Replace the placeholder visuals with your real screenshots as the portfolio grows.</p>
            </Reveal>
          </div>
          <div className="mt-14 space-y-8">
            {projects.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
        </div>
      </section>

      <section className="px-4 py-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Strategy Lab</SectionLabel>
          <Reveal>
            <h2 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">Embedded decks that show how Madestic thinks.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-zinc-300">Use this section for Canva presentations, campaign plans, transformation proposals, launch decks, and internal strategy stories.</p>
          </Reveal>
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {decks.map((deck, index) => <CanvaDeckCard key={deck.title} deck={deck} index={index} />)}
          </div>
        </div>
      </section>

      <section className="px-4 py-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_40px_160px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionLabel>Proof of Direction</SectionLabel>
              <Reveal>
                <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl">Built for operators, founders, and teams that cannot afford slow systems.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 text-base leading-8 text-zinc-300">Madestic works where brand, product, engineering, and operations overlap. We do not just design pages. We design how the business runs, sells, tracks, reports, and improves.</p>
              </Reveal>
            </div>
            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-black/45 p-4 transition hover:border-red-500/30 hover:bg-red-500/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600/15 text-red-300 group-hover:bg-red-600 group-hover:text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between gap-6">
            <SectionLabel>Execution Stack</SectionLabel>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent md:block" />
          </div>
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <div key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-bold text-zinc-200 backdrop-blur-xl transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-red-500/25 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))] p-8 shadow-[0_50px_200px_rgba(185,28,28,0.24)] backdrop-blur-2xl sm:p-12 lg:p-16">
          <Reveal>
            <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">Let’s turn your business into a digital weapon.</h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <MagneticLink>Book a build call</MagneticLink>
            <Link href="mailto:madesticbd@gmail.com" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.045] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-red-500/35 hover:bg-red-500/10">Email Madestic</Link>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-bold uppercase tracking-[0.25em] text-zinc-300">Madestic</div>
          <div>Strategy. Software. Automation. AI. Growth.</div>
        </div>
      </footer>
    </>
  );
}
