import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { MagneticLink, Reveal, SectionLabel, TiltCard } from "@/components/UI";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? `${project.title} — Madestic Work` : "Madestic Work"
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="px-4 pb-20 pt-36 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link href="/work" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-200 transition hover:border-red-500/30 hover:bg-red-500/10">
            <ArrowLeft className="h-4 w-4" /> Back to Work
          </Link>
          <SectionLabel>{project.category}</SectionLabel>
          <Reveal>
            <h1 className="max-w-6xl text-6xl font-black leading-[0.86] tracking-[-0.08em] text-white sm:text-7xl md:text-8xl xl:text-[8.4rem]">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-300">{project.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.045] shadow-[0_40px_160px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <img src={project.image} alt={project.title} className="h-full max-h-[680px] w-full object-cover" />
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <TiltCard className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl">
            <SectionLabel>Problem</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white">What needed to be solved</h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">{project.problem}</p>
          </TiltCard>
          <TiltCard className="rounded-[2rem] border border-red-500/20 bg-red-500/[0.07] p-8 backdrop-blur-xl">
            <SectionLabel>Solution</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white">What Madestic shaped</h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">{project.solution}</p>
          </TiltCard>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Impact Areas</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {project.impact.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6 backdrop-blur-xl transition hover:border-red-500/30 hover:bg-red-500/10">
                  <CheckCircle2 className="mb-6 h-7 w-7 text-red-300" />
                  <p className="text-sm font-bold uppercase leading-7 tracking-[0.16em] text-zinc-100">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Gallery</SectionLabel>
          <div className="grid gap-5 md:grid-cols-3">
            {project.gallery.map((image, index) => (
              <Reveal key={`${image}-${index}`} delay={index * 0.06}>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] backdrop-blur-xl">
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} className="h-72 w-full object-cover transition duration-700 hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-red-500/25 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))] p-8 backdrop-blur-2xl sm:p-12 lg:p-16">
          <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-7xl">Want a system like this?</h2>
          <div className="mt-8"><MagneticLink>Start with Madestic</MagneticLink></div>
        </div>
      </section>
    </>
  );
}
