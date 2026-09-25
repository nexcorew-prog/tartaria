import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Eye, Handshake, ShieldCheck } from "lucide-react";
import { PageIntro, whatsappUrl } from "@/components/site-shell";
import { siteImages } from "@/lib/site-data";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros | Tartaria S.R.L." },
      { name: "description", content: "Conozca a Tartaria S.R.L., agencia despachante de aduana en Puerto Suárez, Bolivia." },
      { property: "og:title", content: "Nosotros | Tartaria S.R.L." },
      { property: "og:description", content: "Acompañamiento responsable y comunicación directa para sus operaciones aduaneras." },
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
      <PageIntro eyebrow="Tartaria S.R.L." title="Una agencia cercana a su operación" description="Desde Puerto Suárez acompañamos a empresas, comerciantes, familias y residentes que necesitan gestionar mercancías a través de fronteras." />
      <section className="section-space bg-background">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden">
            <img src={siteImages.customsHero} alt="Operación de comercio exterior en un recinto aduanero" className="aspect-[4/3] w-full object-cover" width={1600} height={1056} loading="lazy" />
          </div>
          <div>
            <p className="eyebrow text-primary">Nuestro enfoque</p>
            <h2 className="section-title mt-4">Orden, orientación y seguimiento</h2>
            <p className="mt-6 leading-8 text-muted-foreground">Entendemos que una operación aduanera reúne documentos, tiempos y coordinaciones importantes. Por eso trabajamos con una comunicación clara desde la consulta inicial hasta el cierre de cada gestión.</p>
            <p className="mt-5 leading-8 text-muted-foreground">Nuestra ubicación en Puerto Suárez nos conecta con una zona estratégica para el intercambio comercial entre Bolivia y Brasil.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary mt-8">Hablar con la agencia <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="site-container grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          <Value icon={<Eye />} title="Claridad" text="Explicamos los pasos y requisitos de cada operación de forma directa." />
          <Value icon={<ShieldCheck />} title="Responsabilidad" text="Tratamos cada gestión con atención y criterio profesional." />
          <Value icon={<Handshake />} title="Cercanía" text="Mantenemos contacto durante el proceso para que sepa cómo avanza." />
        </div>
      </section>
    </>
  );
}

function Value({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <article className="bg-background p-8 md:p-10"><span className="text-accent">{icon}</span><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>;
}