import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageIntro, whatsappUrl } from "@/components/site-shell";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Tartaria S.R.L." },
      { name: "description", content: "Contacte a Tartaria S.R.L. en Puerto Suárez para consultar su operación aduanera." },
      { property: "og:title", content: "Contacto | Tartaria S.R.L." },
      { property: "og:description", content: "Solicite orientación para importación, exportación o menaje doméstico." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contacto" title="Cuéntenos qué necesita mover" description="Comparta los datos básicos de su operación y reciba orientación directa sobre los próximos pasos." />
      <section className="section-space bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-primary">Atención directa</p>
            <h2 className="section-title mt-4">Estamos en Puerto Suárez</h2>
            <p className="mt-6 leading-8 text-muted-foreground">Para una respuesta más útil, indique el tipo de mercancía, el origen, el destino y si ya cuenta con documentación.</p>
            <div className="mt-9 space-y-5">
              <ContactItem icon={<Phone />} label="Teléfono y WhatsApp" value="+591 75756088" href="tel:+59175756088" />
              <ContactItem icon={<MapPin />} label="Ubicación" value="Puerto Suárez, Santa Cruz, Bolivia" />
            </div>
          </div>
          <div className="contact-panel">
            <MessageCircle size={32} className="text-accent" />
            <h2 className="mt-7 text-3xl font-bold text-primary-foreground">Solicite una evaluación inicial</h2>
            <p className="mt-5 max-w-xl leading-8 text-primary-foreground/70">Escríbanos por WhatsApp para conversar sobre su importación, exportación o traslado de menaje doméstico.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-accent mt-9">Iniciar conversación <ArrowRight size={18} /></a>
            <p className="mt-8 border-t border-primary-foreground/15 pt-6 text-xs leading-6 text-primary-foreground/50">La documentación y los requisitos dependen de las características específicas de cada operación.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = <><span className="contact-icon">{icon}</span><span><small className="block text-xs font-semibold uppercase text-muted-foreground">{label}</small><strong className="mt-1 block font-semibold">{value}</strong></span></>;
  return href ? <a href={href} className="contact-item">{content}</a> : <div className="contact-item">{content}</div>;
}