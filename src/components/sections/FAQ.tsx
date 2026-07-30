import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/constants/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-brand-bg px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          headingId="faq-heading"
          eyebrow="Dudas frecuentes"
          title="Preguntas Frecuentes"
        />

        <div className="mt-14">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
