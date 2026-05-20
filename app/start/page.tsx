import Link from "next/link";
import { Mail, MessageCircle, PhoneCall, Send } from "lucide-react";
import { PageHero, Reveal, SectionLabel, TiltCard } from "@/components/UI";

const projectTypes = ["Website", "ERP", "E-commerce", "AI workflow", "Automation", "Marketing campaign", "Dashboard", "Full transformation"];

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Start"
        title="Bring the problem. We’ll shape the system."
        description="Use this page as Madestic’s premium project intake. Connect it later to Formspree, Google Forms, your backend, or any CRM workflow."
        primary="Send brief"
        secondary="Email directly"
        secondaryHref="mailto:madesticbd@gmail.com"
      />

      <section className="px-4 pb-28 pt-10 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.65fr_1.35fr]">
          <Reveal>
            <TiltCard className="sticky top-32 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl">
              <SectionLabel>Contact</SectionLabel>
              <div className="space-y-4">
                <Link href="mailto:madesticbd@gmail.com" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/45 p-5 transition hover:border-red-500/30 hover:bg-red-500/10">
                  <Mail className="h-5 w-5 text-red-300" />
                  <span className="text-sm font-bold text-zinc-200">madesticbd@gmail.com</span>
                </Link>
                <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/45 p-5">
                  <PhoneCall className="h-5 w-5 text-red-300" />
                  <span className="text-sm font-bold text-zinc-400">Add phone number here</span>
                </div>
                <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/45 p-5">
                  <MessageCircle className="h-5 w-5 text-red-300" />
                  <span className="text-sm font-bold text-zinc-400">Add WhatsApp link here</span>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="rounded-[2.4rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-400">Name</span>
                  <input className="rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50" placeholder="Your name" />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-400">Company</span>
                  <input className="rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50" placeholder="Company name" />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-400">Email</span>
                  <input type="email" className="rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50" placeholder="you@company.com" />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-400">Budget Range</span>
                  <select className="rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition focus:border-red-500/50">
                    <option>Under $1,000</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $7,000</option>
                    <option>$7,000+</option>
                  </select>
                </label>
              </div>

              <div className="mt-7">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-400">What do you need?</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <label key={type} className="cursor-pointer rounded-full border border-white/10 bg-black/45 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-zinc-200 transition hover:border-red-500/30 hover:bg-red-500/10">
                      <input type="checkbox" className="mr-2 accent-red-500" />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <label className="mt-7 grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-400">Project Details</span>
                <textarea rows={7} className="rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50" placeholder="Tell us what you want to build, fix, automate, launch, or transform." />
              </label>

              <button type="button" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-red-600 hover:text-white">
                Send Project Brief
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
