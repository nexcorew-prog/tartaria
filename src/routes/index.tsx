import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileCheck2, Globe2, MapPin } from "lucide-react";
import { processSteps, services, siteImages } from "@/lib/site-data";
import { whatsappUrl } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tartaria S.R.L. | Agencia Despachante de Aduana" },
      { name: "description", content: "Servicios de importación, exportación, menaje doméstico y asesoría aduanera en Puerto Suárez, Bolivia." },
      { property: "og:title", content: "Tartaria S.R.L. | Comercio exterior con respaldo" },
      { property: "og:description", content: "Gestión aduanera profesional para importaciones, exportaciones y menaje doméstico." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <img src={siteImages.customsHero} alt="Terminal de control aduanero y transporte de carga" className="hero-image" width={1600} height={1056} />
        <div className="hero-overlay" />
        <div className="site-container relative z-10 flex min-h-[calc(100vh-5rem)] items-end pb-20 pt-32 md:items-center md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent">Agencia despachante de aduana</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-primary-foreground md:text-6xl lg:text-7xl">
              Su carga cruza fronteras. Nosotros despejamos el camino.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-primary-foreground/80 md:text-xl">
              Gestión profesional de importaciones, exportaciones y menaje doméstico desde Puerto Suárez, Bolivia.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-accent">
                Consultar una operación <ArrowRight size={18} />
              </a>
              <Link to="/servicios" className="button-ghost-light">Conocer servicios</Link>
            </div>
          </div>
        </div>
        <div className="hero-location">
          <MapPin size={17} /> Puerto Suárez · Bolivia
        </div>
      </section>

      <section className="border-b border-border bg-background py-10">
        <div className="site-container grid gap-6 sm:grid-cols-3">
          <Stat icon={<Globe2 />} title="Comercio exterior" text="Importación y exportación" />
          <Stat icon={<FileCheck2 />} title="Gestión integral" text="Orientación y seguimiento" />
          <Stat icon={<MapPin />} title="Ubicación estratégica" text="Puerto Suárez, Bolivia" />
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow text-primary">Lo que hacemos</p>
              <h2 className="section-title mt-4">Soluciones aduaneras para cada operación</h2>
            </div>
            <Link to="/servicios" className="text-link">Ver todos los servicios <ArrowRight size={17} /></Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="service-tile">
                <span className="service-number">0{index + 1}</span>
                <h3 className="mt-12 text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="grid lg:grid-cols-2">
          <div className="min-h-[430px] overflow-hidden lg:min-h-[650px]">
            <img src={siteImages.domesticMove} alt="Servicio internacional de traslado de menaje doméstico" className="h-full w-full object-cover" width={1200} height={912} loading="lazy" />
          </div>
          <div className="flex items-center px-6 py-16 md:px-14 lg:px-20">
            <div className="max-w-xl">
              <p className="eyebrow text-primary">Servicio especializado</p>
              <h2 className="section-title mt-4">Su hogar también puede cruzar fronteras</h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                Facilitamos el proceso aduanero para el traslado de pertenencias personales cuando una familia o residente cambia su domicilio entre países, incluyendo movimientos entre Brasil y Bolivia.
              </p>
              <Link to="/servicios" className="button-primary mt-8">Conocer el servicio <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="site-container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow text-primary">Cómo trabajamos</p>
            <h2 className="section-title mt-4">Claridad en cada etapa del despacho</h2>
            <p className="mt-6 leading-8 text-muted-foreground">Cada caso comienza con una evaluación directa para identificar los requisitos de la operación.</p>
          </div>
          <ol className="border-t border-border">
            {processSteps.map((step, index) => (
              <li key={step} className="flex gap-6 border-b border-border py-6">
                <span className="process-index">{index + 1}</span>
                <p className="pt-1 font-medium leading-7">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-band">
        <div className="site-container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-accent">Hablemos de su operación</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">Reciba orientación directa para su próxima gestión aduanera.</h2>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-accent shrink-0">Escribir por WhatsApp <ArrowRight size={18} /></a>
        </div>
      </section>
    </>
  );
}

function Stat({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="flex items-center gap-4 border-l-2 border-accent pl-5"><span className="text-primary">{icon}</span><div><p className="font-semibold">{title}</p><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>;
}