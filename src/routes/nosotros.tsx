import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Lightbulb, ShieldCheck, Target, Telescope } from "lucide-react";
import { MotionReveal } from "@/components/motion-effects";
import { PageIntro, whatsappUrl } from "@/components/site-shell";
import { siteImages } from "@/lib/site-data";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros | Tartaria S.R.L." },
      {
        name: "description",
        content:
          "Conozca la misión, visión y valores de Tartaria S.R.L., agencia despachante de aduana en Puerto Suárez, Bolivia.",
      },
      { property: "og:title", content: "Nosotros | Tartaria S.R.L." },
      {
        property: "og:description",
        content: "Nuestra misión, visión y valores en comercio exterior y aduanas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tartaria S.R.L."
        title="Una agencia cercana a su operación"
        description="Desde Puerto Suárez acompañamos a empresas, comerciantes, familias y residentes que necesitan gestionar mercancías a través de fronteras."
      />
      <section className="section-space bg-background">
        <MotionReveal className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden">
            <img
              src={siteImages.customsHero}
              alt="Operación de comercio exterior en un recinto aduanero"
              className="aspect-[4/3] w-full object-cover"
              width={1600}
              height={1056}
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow text-primary">Nuestro enfoque</p>
            <h2 className="section-title mt-4">Orden, orientación y seguimiento</h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              Entendemos que una operación aduanera reúne documentos, tiempos y coordinaciones
              importantes. Por eso trabajamos con una comunicación clara desde la consulta inicial
              hasta el cierre de cada gestión.
            </p>
            <p className="mt-5 leading-8 text-muted-foreground">
              Nuestra ubicación en Puerto Suárez nos conecta con una zona estratégica para el
              intercambio comercial entre Bolivia y Brasil.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary mt-8">
              Hablar con la agencia <ArrowRight size={18} />
            </a>
          </div>
        </MotionReveal>
      </section>
      <section className="section-space bg-secondary">
        <MotionReveal className="site-container grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          <Value
            icon={<Target />}
            title="Nuestra misión"
            text="Brindar soluciones en comercio exterior y aduanas mediante despachos de importación y exportación eficientes y seguros, adaptados a las necesidades de cada cliente. Optimizamos tiempo y costos desde el inicio de cada operación hasta su conclusión."
          />
          <Value
            icon={<Telescope />}
            title="Nuestra visión"
            text="Ser la agencia despachante de aduana líder, reconocida por ofrecer soluciones de la más alta calidad en comercio exterior y aduanas; obtener la certificación como Operador Económico Autorizado (OEA) y efectuar despachos aduaneros en toda Bolivia."
          />
        </MotionReveal>
      </section>
      <section className="section-space bg-background">
        <MotionReveal className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow text-primary">Nuestra esencia</p>
              <h2 className="section-title mt-4">Los valores que nos guían</h2>
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            <Value
              icon={<ShieldCheck />}
              title="Integridad"
              text="Actuamos con honestidad, responsabilidad y ética; principios que orientan nuestras decisiones y forman parte de nuestra cultura organizacional."
            />
            <Value
              icon={<Award />}
              title="Excelencia"
              text="Buscamos mejorar y perfeccionar cada día la calidad de nuestro trabajo, superando lo esperado en cada operación."
            />
            <Value
              icon={<Lightbulb />}
              title="Innovación"
              text="Desafiamos lo convencional y buscamos soluciones creativas a los retos de hoy y del futuro, en un mundo en constante cambio."
            />
          </div>
        </MotionReveal>
      </section>
      <section className="cta-band">
        <MotionReveal className="site-container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-accent">Trabajemos juntos</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">
              Su próxima operación merece un equipo comprometido.
            </h2>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-accent shrink-0">
            Hablemos de su operación <ArrowRight size={18} />
          </a>
        </MotionReveal>
      </section>
    </>
  );
}

function Value({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="bg-background p-8 md:p-10">
      <span className="text-accent">{icon}</span>
      <h3 className="mt-8 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
    </article>
  );
}
