import { PageHero, ProjectCard } from "@/components/UI";
import { projects } from "@/data/site";

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Case-study proof for systems, campaigns, and digital products."
        description="A premium gallery of Madestic’s software, automation, e-commerce, monitoring, launch, and operational work. Replace placeholders with real screenshots to make this portfolio conversion-ready."
        secondary="Visit Lab"
        secondaryHref="/lab"
      />
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-8">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </section>
    </>
  );
}
