import { Plus } from "lucide-react";
import { MotionReveal } from "@/components/motion-effects";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({
  items,
  title = "Resolvemos sus dudas",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="section-space bg-secondary">
      <MotionReveal className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow text-primary">Preguntas frecuentes</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="mt-6 max-w-md leading-8 text-muted-foreground">
            ¿Tiene una consulta particular? Conversemos sobre los detalles de su operación.
          </p>
        </div>
        <div className="border-t border-border">
          {items.map((item) => (
            <details key={item.question} className="faq-item group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-semibold marker:hidden">
                {item.question}
                <Plus
                  size={19}
                  aria-hidden="true"
                  className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </MotionReveal>
    </section>
  );
}
