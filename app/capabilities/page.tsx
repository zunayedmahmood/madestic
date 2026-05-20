import { PageHero, Reveal, SectionLabel, TiltCard } from "@/components/UI";
import { services } from "@/data/site";

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Software, AI, automation, strategy, and growth under one roof."
        description="Madestic is built for businesses that need more than a website. We build the systems, interfaces, dashboards, workflows, and campaigns that support real operations."
        secondary="Explore work"
        secondaryHref="/work"
      />

      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What We Build</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.04}>
                  <TiltCard className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition hover:border-red-500/30 hover:bg-red-500/[0.07]">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-600/15 blur-3xl transition group-hover:bg-red-500/25" />
                    <div className="relative z-10">
                      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-red-300 shadow-[0_0_34px_rgba(220,38,38,0.16)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight text-white">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">{service.text}</p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {service.deliverables.map((item) => (
                          <span key={item} className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-red-100">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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
