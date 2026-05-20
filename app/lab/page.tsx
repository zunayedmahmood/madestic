import { CanvaDeckCard, PageHero } from "@/components/UI";
import { decks } from "@/data/site";

export default function LabPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategy Lab"
        title="A pitch room for decks, campaigns, and strategic thinking."
        description="Use this page to embed Canva decks, launch campaigns, marketing strategy, brand systems, product proposals, and transformation playbooks. It makes Madestic look like a thinking partner, not only an execution team."
        secondary="View work"
        secondaryHref="/work"
      />
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-2">
          {decks.map((deck, index) => <CanvaDeckCard key={deck.title} deck={deck} index={index} />)}
        </div>
      </section>
    </>
  );
}
