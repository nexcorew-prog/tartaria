import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaqSection } from "@/components/faq-section";
import { MotionReveal } from "@/components/motion-effects";
import { PageIntro, whatsappUrl } from "@/components/site-shell";
import { faqs, services } from "@/lib/site-data";

export const Route = createFileRoute("/servicios/$slug")({
  head: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);

    return {
      meta: [
        { title: `${service?.title ?? "Servicio"} | Tartaria S.R.L.` },
        {
          name: "description",
          content:
            service?.summary ??
            "Conozca los servicios aduaneros de Tartaria S.R.L. en Puerto Suárez, Bolivia.",
        },
        { property: "og:title", content: `${service?.title ?? "Servicio"} | Tartaria S.R.L.` },
        {
          property: "og:description",
          content: service?.summary ?? "Servicios de comercio exterior y gestión aduanera.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/servicios/${params.slug}` }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <>
        <PageIntro
          eyebrow="Servicio no encontrado"
          title="Le ayudamos a encontrar el camino"
          description="Este servicio no está disponible. Revise nuestras soluciones aduaneras o cuéntenos qué necesita."
        />
        <section className="section-space bg-background">
          <MotionReveal className="site-container">
            <Link to="/servicios" className="button-primary">
              <ArrowLeft size={18} /> Ver todos los servicios
            </Link>
          </MotionReveal>
        </section>
      </>
    );
  }

  const consultationUrl = `https://wa.me/59175756088?text=${encodeURIComponent(
    `Hola Tartaria S.R.L., quisiera consultar sobre el servicio de ${service.title}.`,
  )}`;

  return (
    <>
      <PageIntro eyebrow="Nuestros servicios" title={service.title} description={service.summary} />
      <section className="section-space bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <MotionReveal className="service-detail-image">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="h-full w-full object-cover"
              width={1200}
              height={900}
            />
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <p className="eyebrow text-primary">Acompañamiento a su medida</p>
            <h2 className="section-title mt-4">Un proceso claro, de principio a fin</h2>
            <p className="mt-6 leading-8 text-muted-foreground">{service.detail}</p>
            <ul className="mt-8 space-y-4">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm leading-7">
                  <CheckCircle2 className="mt-1 shrink-0 text-accent" size={19} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <a
              href={consultationUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-9"
            >
              Consultar este servicio <ArrowRight size={18} />
            </a>
          </MotionReveal>
        </div>
      </section>
      <section className="section-space bg-secondary">
        <MotionReveal className="site-container grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div>
            <p className="eyebrow text-primary">¿Qué sigue?</p>
            <h2 className="section-title mt-4">Empezamos por conocer su operación</h2>
          </div>
          <ol className="border-t border-border">
            {[
              "Cuéntenos qué mercancía necesita gestionar y hacia dónde se dirige.",
              "Revisamos la información disponible y conversamos sobre los requisitos.",
              "Le orientamos sobre los siguientes pasos y coordinamos el seguimiento.",
            ].map((step, index) => (
              <li key={step} className="flex gap-5 border-b border-border py-5">
                <span className="process-index">{index + 1}</span>
                <p className="pt-1 text-sm font-medium leading-7">{step}</p>
              </li>
            ))}
          </ol>
        </MotionReveal>
      </section>
      <FaqSection
        items={faqs.slice(0, 3)}
        title={`Preguntas sobre ${service.title.toLowerCase()}`}
      />
      <section className="cta-band">
        <MotionReveal className="site-container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-accent">Hablemos de su operación</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">
              Reciba orientación directa de nuestro equipo.
            </h2>
          </div>
          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="button-accent shrink-0"
          >
            Consultar por WhatsApp <ArrowRight size={18} />
          </a>
        </MotionReveal>
      </section>
      <section className="bg-background py-8">
        <div className="site-container">
          <Link to="/servicios" className="text-link">
            <ArrowLeft size={17} /> Volver a todos los servicios
          </Link>
        </div>
      </section>
    </>
  );
}
