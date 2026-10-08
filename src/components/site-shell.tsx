import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { MotionEntrance } from "@/components/motion-effects";
import logoAsset from "@/assets/tartaria-logo-v2.jpg";

const navigation = [
  { label: "Inicio", to: "/" as const },
  { label: "Servicios", to: "/servicios" as const },
  { label: "Nosotros", to: "/nosotros" as const },
  { label: "Contacto", to: "/contacto" as const },
];

export const whatsappUrl =
  "https://wa.me/59175756088?text=Hola%20Tartaria%20S.R.L.%2C%20necesito%20asesoramiento%20para%20una%20operaci%C3%B3n%20de%20comercio%20exterior.";

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useLocation({ select: (location) => location.pathname });

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
          <div className="site-container flex h-20 items-center justify-between gap-6">
            <Link to="/" aria-label="Tartaria S.R.L. — Inicio" className="shrink-0">
              <img
                src={logoAsset}
                alt="Tartaria S.R.L."
                className="h-14 w-auto mix-blend-multiply"
                width="761"
                height="465"
              />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="nav-link"
                  activeProps={{ className: "nav-link nav-link-active" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a href="tel:+59175756088" className="header-phone">
                <Phone size={17} aria-hidden="true" />
                +591 75756088
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary">
                Solicitar asesoría
              </a>
            </div>

            <button
              type="button"
              className="icon-button lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {menuOpen ? (
              <m.nav
                key="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="overflow-hidden border-t border-border bg-background px-5 py-5 lg:hidden"
                aria-label="Navegación móvil"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="mobile-nav-link"
                      activeProps={{ className: "mobile-nav-link mobile-nav-link-active" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary mt-3"
                  >
                    Solicitar asesoría
                  </a>
                </div>
              </m.nav>
            ) : null}
          </AnimatePresence>
        </header>

        <main key={pathname}>{children}</main>

        <footer className="bg-ink text-primary-foreground">
          <div className="site-container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <img
                src={logoAsset}
                alt="Tartaria S.R.L."
                className="h-16 w-auto bg-background object-contain p-1"
                width="761"
                height="465"
                loading="lazy"
              />
              <p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/70">
                Agencia despachante de aduana en Puerto Suárez, Bolivia. Gestión responsable para
                operaciones de comercio exterior.
              </p>
            </div>
            <div>
              <p className="footer-title">Navegación</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70">
                {navigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-title">Contacto</p>
              <div className="mt-4 space-y-3 text-sm text-primary-foreground/70">
                <p>Puerto Suárez, Santa Cruz, Bolivia</p>
                <a
                  href="tel:+59175756088"
                  className="block transition-colors hover:text-primary-foreground"
                >
                  +591 75756088
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/15">
            <div className="site-container flex flex-col gap-2 py-5 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Tartaria S.R.L. Todos los derechos reservados.</p>
              <p>Agencia despachante de aduana</p>
            </div>
          </div>
        </footer>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
          aria-label="Contactar por WhatsApp"
        >
          <Phone size={22} />
        </a>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <MotionEntrance className="site-container py-20 md:py-28">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/75 md:text-lg">
          {description}
        </p>
      </MotionEntrance>
    </section>
  );
}
