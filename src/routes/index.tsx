import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, Coffee, UtensilsCrossed, Star, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import { SectionHeading } from "@/components/section-heading";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { useLanguage } from "@/components/language-provider";
import { useOrderDialog } from "@/components/order-dialog";
import { media, categories } from "@/lib/media";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaf Coffee | Good Coffee. Better Moments." },
      {
        name: "description",
        content:
          "Your everyday happy place. Discover coffee, cakes, pizza, burgers, Habesha food and catering at Kaf Coffee in Ethiopia.",
      },
      { property: "og:title", content: "Kaf Coffee | Good Coffee. Better Moments." },
      {
        property: "og:description",
        content: "Coffee, comfort and good company at Kaf Coffee in Ethiopia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
function Home() {
  const { t } = useLanguage();
  const { openOrderDialog } = useOrderDialog();
  return (
    <SiteLayout>
      <section className="hero">
        <img
          src={media.coffee}
          alt={t.categories[0]}
          className="hero-image"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        <div className="site-container hero-content">
          <div className="eyebrow text-primary">{t.welcome}</div>
          <h1>{t.heroTitle}</h1>
          <p className="hero-tagline">{t.heroTagline}</p>
          <p className="hero-description">{t.heroDescription}</p>
          <div className="flex gap-3 mt-7 hero-cta-row">
            <Button variant="brand" onClick={openOrderDialog}>
              {t.order}
              <ArrowUpRight />
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/menu">
                {t.menu}
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="site-container hero-foot">
          <span>
            <Coffee />
            {t.foodLove}
          </span>
          <a href="#offer">
            <span>
              {t.scroll}
              <ArrowDown />
            </span>
          </a>
        </div>
      </section>
      <section className="section offer-section" id="offer">
        <div className="site-container">
          <SectionHeading
            eyebrow={t.offerEyebrow}
            title={t.offerTitle}
            description={t.offerIntro}
            action={
              <Button variant="sectionLink" className="section-link" asChild>
                <Link to="/menu">
                  {t.viewMenu}
                  <ArrowUpRight />
                </Link>
              </Button>
            }
          />
          <div className="offer-grid">
            {categories.map((category, i) => {
              const iconKey =
                category === "burgers" ? "burger" : category === "coffee" ? "hot-drinks" : category;
              return (
                <Link key={category} to="/menu" hash={category} className="offer-card">
                  <div className="offer-image">
                    {i === 0 ? (
                      <img
                        src={media.coffeeOffer}
                        alt={t.categories[i]}
                        className="offer-crop-coffee"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 1 ? (
                      <img
                        src={media.drinks}
                        alt={t.categories[i]}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 3 ? (
                      <img
                        src={media.wrap}
                        alt={t.categories[i]}
                        className="offer-crop-wrap"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <PhotoPlaceholder iconKey={iconKey} />
                    )}
                  </div>
                  <div>
                    <h3>
                      {t.categories[i]}
                      <ArrowUpRight />
                    </h3>
                    <p>{t.categoryDescriptions[i]}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section dark-section">
        <div className="site-container">
          <SectionHeading
            eyebrow={t.cakesEyebrow}
            title={t.cakesTitle}
            description={t.cakesIntro}
            action={
              <Button variant="sectionLink" className="section-link text-primary" asChild>
                <Link to="/menu" hash="cake">
                  {t.cakesLink}
                  <ArrowUpRight />
                </Link>
              </Button>
            }
          />
          <div className="cake-grid">
            {media.cakes.map((src, i) => (
              <article className="cake-card" key={src}>
                <div className="cake-photo">
                  <img src={src} alt={t.cakeNames[i]} loading="lazy" decoding="async" />
                </div>
                <h3>{t.cakeNames[i]}</h3>
                <p>{t.cakeDetails[i]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="catering-teaser">
        <div className="site-container catering-teaser-inner">
          <UtensilsCrossed className="teaser-icon" />
          <div>
            <div className="eyebrow">{t.cateringEyebrow}</div>
            <h2>{t.cateringTitle}</h2>
            <p>{t.cateringIntro}</p>
          </div>
          <Button variant="dark" asChild>
            <Link to="/catering">
              {t.cateringLink}
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="socials-band" aria-label={t.socialsTitle}>
        <div className="site-container">
          <div className="socials-header">
            <div className="eyebrow text-muted-foreground">{t.socialsEyebrow}</div>
            <h2>{t.socialsTitle}</h2>
          </div>
          <div className="socials-split">
            <div className="social-panel">
              <div className="social-panel-info">
                <span className="social-icon-box" aria-hidden="true">
                  <Instagram />
                </span>
                <div className="social-panel-text">
                  <h3>{t.instagramName}</h3>
                  <span>{t.instagramHandle}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="social-action-btn" asChild>
                <a
                  href="https://www.instagram.com/kaf_coffee119?cnvx=MW9lcGJtYXk0NDQ1cA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.instagramAction}
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
            <div className="social-panel">
              <div className="social-panel-info">
                <span className="social-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52V6.94a4.85 4.85 0 0 1-1-.25Z" />
                  </svg>
                </span>
                <div className="social-panel-text">
                  <h3>{t.tiktokName}</h3>
                  <span>{t.tiktokHandle}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="social-action-btn" asChild>
                <a
                  href="https://www.tiktok.com/@kaf.coffee8?_r=1&_t=ZS-9BgLBKfpwco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.tiktokAction}
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section reviews-section">
        <div className="site-container">
          <SectionHeading
            eyebrow={t.reviewEyebrow}
            title={t.reviewTitle}
            description={t.reviewIntro}
          />
          <div className="reviews-viewport">
            <div className="reviews-track">
              {t.reviews.map((review, i) => (
                <article className="review-card" key={`a-${i}`}>
                  <div className="review-top">
                    <div className="stars" aria-label={`${review.rating} / 5 ${t.stars}`}>
                      {Array.from({ length: 5 }, (_, j) => (
                        <Star
                          key={j}
                          aria-hidden="true"
                          className={j < review.rating ? "star-filled" : "star-empty"}
                        />
                      ))}
                    </div>
                    <span className="review-time">{review.time}</span>
                  </div>
                  <blockquote>{review.quote}</blockquote>
                  <div className="review-author">
                    <span className="review-avatar" aria-hidden="true">
                      {review.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <p className="review-name">{review.name}</p>
                      <span className="review-meta">{review.meta}</span>
                    </div>
                  </div>
                </article>
              ))}
              {t.reviews.map((review, i) => (
                <article className="review-card reviews-clone" key={`b-${i}`} aria-hidden="true">
                  <div className="review-top">
                    <div className="stars">
                      {Array.from({ length: 5 }, (_, j) => (
                        <Star
                          key={j}
                          aria-hidden="true"
                          className={j < review.rating ? "star-filled" : "star-empty"}
                        />
                      ))}
                    </div>
                    <span className="review-time">{review.time}</span>
                  </div>
                  <blockquote>{review.quote}</blockquote>
                  <div className="review-author">
                    <span className="review-avatar" aria-hidden="true">
                      {review.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <p className="review-name">{review.name}</p>
                      <span className="review-meta">{review.meta}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
