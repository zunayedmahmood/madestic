import { PageHero, Reveal, SectionLabel, TiltCard } from "@/components/UI";
import { process } from "@/data/site";

const principles = [
  "Business-first thinking before design decoration.",
  "Fast execution without hiding operational complexity.",
  "Interfaces that feel premium and help teams move faster.",
  "Software architecture that respects real workflows.",
  "Marketing that is connected to product and business systems."
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title="A digital execution studio, not a traditional agency."
        description="Madestic operates where strategy, software, automation, design, and growth meet. We help businesses turn scattered operations into sharp digital systems."
        secondary="See capabilities"
        secondaryHref="/capabilities"
      />

      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Operating Model</SectionLabel>
          <div className="grid gap-4 md:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <TiltCard className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition hover:border-red-500/30 hover:bg-red-500/[0.06]">
                  <div className="mb-10 text-sm font-black uppercase tracking-[0.34em] text-red-300">{item.step}</div>
                  <h3 className="text-3xl font-black tracking-tight text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{item.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>Why Madestic</SectionLabel>
            <Reveal>
              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl">We build the layer between business ambition and daily execution.</h2>
            </Reveal>
          </div>
          <div className="space-y-3">
            {principles.map((principle, index) => (
              <Reveal key={principle} delay={index * 0.05}>
                <div className="rounded-3xl border border-white/10 bg-black/45 p-5 text-lg font-bold text-zinc-100 backdrop-blur-xl transition hover:border-red-500/30 hover:bg-red-500/10">
                  {principle}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
