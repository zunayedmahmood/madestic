import { PageHero, Reveal, SectionLabel, TiltCard } from "@/components/UI";
import { manifesto } from "@/data/site";

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        eyebrow="Manifesto"
        title="We believe digital systems should create movement."
        description="Madestic’s philosophy is simple: premium design, strong engineering, business understanding, and fast execution should work together. A website can attract. A system can transform."
        secondary="Start project"
        secondaryHref="/start"
      />

      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What We Believe</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {manifesto.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <TiltCard className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition hover:border-red-500/30 hover:bg-red-500/[0.07]">
                    <Icon className="mb-8 h-8 w-8 text-red-300" />
                    <h3 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white">{item.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-zinc-300">{item.text}</p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
