import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageIntro, whatsappUrl } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios aduaneros | Tartaria S.R.L." },
      { name: "description", content: "Importación, exportación, menaje doméstico y asesoría aduanera en Puerto Suárez." },
      { property: "og:title", content: "Servicios aduaneros | Tartaria S.R.L." },
      { property: "og:description", content: "Soluciones para operaciones de comercio exterior y traslado internacional de hogar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Nuestros servicios" title="Gestión aduanera para mover mercancías con claridad" description="Atendemos operaciones de importación, exportación y traslado de menaje doméstico, con acompañamiento durante cada etapa del proceso." />
      <section className="section-space bg-background">
        <div className="site-container space-y-6">
          {services.map((service, index) => (
            <article key={service.title} className="service-row">
              <span className="service-number">0{index + 1}</span>
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">{service.title}</h2>
                <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">{service.detail}</p>
              </div>
              <a href={`${whatsappUrl}&text=%20Quisiera%20consultar%20sobre%20${encodeURIComponent(service.title)}.`} target="_blank" rel="noreferrer" className="text-link self-start lg:self-center">
                Consultar <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-16">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-primary">Antes de comenzar</p>
            <h2 className="section-title mt-4">Cada mercancía requiere una evaluación particular</h2>
          </div>
          <div className="space-y-4">
            {["Tipo y características de la mercancía", "País de origen o destino", "Documentación disponible", "Modalidad y condiciones de la operación"].map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-accent" size={20} />{item}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}