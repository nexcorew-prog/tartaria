import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaqSection } from "@/components/faq-section";
import { PageIntro, whatsappUrl } from "@/components/site-shell";
import { faqs, services } from "@/lib/site-data";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios aduaneros | Tartaria S.R.L." },
      {
        name: "description",
        content: "Importación, exportación, menaje doméstico y asesoría aduanera en Puerto Suárez.",
      },
      { property: "og:title", content: "Servicios aduaneros | Tartaria S.R.L." },
      {
        property: "og:description",
        content:
          "Soluciones para operaciones de comercio exterior y traslado internacional de hogar.",
      },
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
      <PageIntro
        eyebrow="Nuestros servicios"
        title="Gestión aduanera para mover mercancías con claridad"
        description="Atendemos operaciones de importación, exportación y traslado de menaje doméstico, con acompañamiento durante cada etapa del proceso."
      />
      <section className="section-space bg-background">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.slug} className="service-card group" data-reveal>
              <Link
                to="/servicios/$slug"
                params={{ slug: service.slug }}
                className="block"
                aria-label={`Conocer el servicio de ${service.title}`}
              >
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={760}
                  />
                  <span className="service-card-number">0{index + 1}</span>
                </div>
                <div className="p-7 md:p-8">
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-4 min-h-20 leading-7 text-muted-foreground">{service.detail}</p>
                  <span className="text-link mt-6">
                    Conocer el servicio <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section-space bg-secondary" data-reveal>
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-primary">Antes de comenzar</p>
            <h2 className="section-title mt-4">
              Cada mercancía requiere una evaluación particular
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
              Le ayudamos a entender qué información hace falta para definir los siguientes pasos de
              su gestión.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Tipo y características de la mercancía",
              "País de origen o destino",
              "Documentación disponible",
              "Modalidad y condiciones de la operación",
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 className="text-accent" size={20} />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="Lo que necesita saber antes de comenzar" />
      <section className="cta-band" data-reveal>
        <div className="site-container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-accent">Orientación personalizada</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">
              Su operación empieza con una buena conversación.
            </h2>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-accent shrink-0">
            Consultar por WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
