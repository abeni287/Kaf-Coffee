import { useEffect, useRef, useState } from "react";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { SectionHeading } from "@/components/section-heading";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { useOrderDialog } from "@/components/order-dialog";
import { menuSections, resolveMenuIndexFromHash } from "@/lib/menu-data";
import { media } from "@/lib/media";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu | Kaf Coffee" },
      {
        name: "description",
        content:
          "Explore Kaf Coffee’s pizza, burgers, hot and cold drinks, shakes, juices, sandwiches, cakes, wraps, breakfast, pasta, and salads.",
      },
      { property: "og:title", content: "The Menu | Kaf Coffee" },
      { property: "og:description", content: "Find your next favorite at Kaf Coffee." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t, language } = useLanguage();
  const { openOrderDialog } = useOrderDialog();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(() =>
    location.hash ? resolveMenuIndexFromHash(location.hash) : 0,
  );
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timerId: number | undefined;
    const syncAndScroll = (rawHash: string) => {
      if (!rawHash) return;
      const nextIndex = resolveMenuIndexFromHash(rawHash);
      setActiveIndex(nextIndex);
      if (timerId !== undefined) window.clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    };

    const currentHash =
      location.hash || (typeof window !== "undefined" ? window.location.hash : "");
    if (currentHash) {
      syncAndScroll(currentHash);
    }

    const onHashChange = () => {
      if (window.location.hash) {
        syncAndScroll(window.location.hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      if (timerId !== undefined) window.clearTimeout(timerId);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [location.hash]);

  const selectSection = (idx: number, shouldScroll = false) => {
    const bounded = Math.max(0, Math.min(menuSections.length - 1, idx));
    setActiveIndex(bounded);
    const target = menuSections[bounded];
    if (target && typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${target.id}`);
    }
    if (shouldScroll && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const section = menuSections[activeIndex] ?? menuSections[0]!;
  const prevSection = activeIndex > 0 ? menuSections[activeIndex - 1] : undefined;
  const nextSection =
    activeIndex < menuSections.length - 1 ? menuSections[activeIndex + 1] : undefined;

  return (
    <SiteLayout>
      <section className="page-banner page-banner-hero">
        <img
          src={media.menuBanner}
          alt=""
          aria-hidden="true"
          className="page-banner-bg menu-banner-bg"
          referrerPolicy="no-referrer"
        />
        <div className="site-container page-banner-content">
          <div className="eyebrow text-primary">{t.menuEyebrow}</div>
          <h1>{t.menuTitle}</h1>
          <p>{t.menuIntro}</p>
        </div>
      </section>
      <nav className="category-nav" aria-label={t.filterCategory}>
        <div
          className="site-container category-nav-inner"
          role="tablist"
          aria-label={t.filterCategory}
        >
          {menuSections.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <Button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                variant={isSelected ? "dark" : "outline"}
                className="whitespace-nowrap shrink-0"
                onClick={() => selectSection(idx, true)}
              >
                {item.title[language]}
              </Button>
            );
          })}
        </div>
      </nav>
      <section ref={contentRef} id={section.id} className="section menu-section" role="tabpanel">
        <div className="site-container">
          <SectionHeading
            eyebrow={t.menuEyebrow}
            title={section.title[language]}
            description={section.description[language]}
          />
          <div className="menu-groups">
            {section.groups.map((group, groupIndex) => (
              <div className="menu-group" key={group.en ?? groupIndex}>
                {group.en && (
                  <div className="menu-group-heading">
                    <h3>{language === "am" ? (group.am ?? group.en) : group.en}</h3>
                    <span className="menu-group-count tabular-nums">{group.items.length}</span>
                  </div>
                )}
                <div className="menu-grid">
                  {group.items.map((item) => (
                    <article className="menu-card" key={`${section.id}-${item.en}`}>
                      <div className="menu-photo">
                        <PhotoPlaceholder iconKey={section.id} />
                      </div>
                      <div className="menu-item-info">
                        <h3>{language === "am" ? item.am : item.en}</h3>
                        <p className="menu-alt-name">{language === "am" ? item.en : item.am}</p>
                        <div className="menu-price">
                          <div className="menu-price-group tabular-nums">
                            <span className="menu-price-amount">{item.price}</span>
                            <span className="menu-price-currency">{t.currency}</span>
                          </div>
                          <Button
                            type="button"
                            variant="brand"
                            size="sm"
                            className="menu-item-order-btn"
                            onClick={openOrderDialog}
                          >
                            {t.orderShort}
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <nav className="menu-pagination" aria-label={t.menuSectionLabel}>
            <Button
              type="button"
              variant="outline"
              disabled={!prevSection}
              onClick={() => prevSection && selectSection(activeIndex - 1, true)}
              className="menu-page-btn"
            >
              <ArrowLeft />
              <span>
                {t.previousSection}
                {prevSection ? `: ${prevSection.title[language]}` : ""}
              </span>
            </Button>
            <div className="menu-page-status tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(menuSections.length).padStart(2, "0")} · {section.title[language]}
            </div>
            <Button
              type="button"
              variant="dark"
              disabled={!nextSection}
              onClick={() => nextSection && selectSection(activeIndex + 1, true)}
              className="menu-page-btn"
            >
              <span>
                {t.nextSection}
                {nextSection ? `: ${nextSection.title[language]}` : ""}
              </span>
              <ArrowRight />
            </Button>
          </nav>
        </div>
      </section>
    </SiteLayout>
  );
}
