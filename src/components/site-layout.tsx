import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, MapPin, Phone, Clock, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./language-provider";
import { copyPhoneNumber, useOrderDialog } from "./order-dialog";
import { media } from "@/lib/media";
export function SiteLayout({ children }: { children: ReactNode }) {
  const { t, language, setLanguage } = useLanguage();
  const { openOrderDialog } = useOrderDialog();
  const [open, setOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const path = useLocation().pathname;
  useEffect(() => {
    if (!copiedPhone) return;
    const timer = window.setTimeout(() => setCopiedPhone(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copiedPhone]);
  const links = [
    { to: "/" as const, label: t.home },
    { to: "/menu" as const, label: t.menu },
    { to: "/catering" as const, label: t.catering },
  ];
  return (
    <>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link to="/" aria-label={t.home} className="brand-link">
            <img
              className="brand-logo"
              src={media.logo}
              alt={t.brand}
              width={175}
              height={62}
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </Link>
          <nav className="nav-links" aria-label={t.navigation}>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${path === link.to ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <div className="language-switch" aria-label={t.language}>
              <Button
                variant="nav"
                className={language === "en" ? "selected" : ""}
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
              >
                {t.en}
              </Button>
              <span className="opacity-40">|</span>
              <Button
                variant="nav"
                className={language === "am" ? "selected" : ""}
                onClick={() => setLanguage("am")}
                aria-pressed={language === "am"}
              >
                {t.am}
              </Button>
            </div>
            <Button variant="brand" className="header-order" onClick={openOrderDialog}>
              {t.order}
              <ArrowUpRight />
            </Button>
            <Button
              variant="nav"
              size="icon"
              className="mobile-menu-button"
              onClick={() => setOpen(!open)}
              aria-label={open ? t.closeMenu : t.openMenu}
              aria-expanded={open}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label={t.navigation}>
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button
              variant="brand"
              onClick={() => {
                setOpen(false);
                openOrderDialog();
              }}
            >
              {t.order}
              <ArrowUpRight />
            </Button>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-grid">
            <div>
              <Link to="/" aria-label={t.home} className="brand-link">
                <img
                  src={media.logo}
                  alt={t.brand}
                  width={210}
                  height={76}
                  loading="lazy"
                  decoding="async"
                  className="brand-logo brand-logo-footer"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="footer-tagline">{t.footerTagline}</p>
            </div>
            <div>
              <h3 className="footer-heading">{t.navigation}</h3>
              <nav className="footer-links">
                {links.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="footer-heading">{t.findUs}</h3>
              <div className="footer-detail">
                <MapPin />
                <span>{t.addressValue}</span>
              </div>
              <div className="footer-detail">
                <Phone />
                <a href="tel:+251912736382" className="footer-phone-link tabular-nums">
                  {t.phoneValue}
                </a>
                <button
                  type="button"
                  className="footer-copy-btn"
                  onClick={() => copyPhoneNumber(t.phoneValue, () => setCopiedPhone(true))}
                  aria-label={copiedPhone ? t.copiedPhone : t.copyPhone}
                  title={copiedPhone ? t.copiedPhone : t.copyPhone}
                >
                  {copiedPhone ? <Check /> : <Copy />}
                </button>
              </div>
            </div>
            <div>
              <h3 className="footer-heading">{t.openingHours}</h3>
              <div className="footer-detail">
                <Clock />
                <span className="tabular-nums">{t.openingHoursValue}</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t.copyright}</span>
            <span>{t.made}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
