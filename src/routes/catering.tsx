import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Flower2,
  Cake,
  CalendarHeart,
  ArrowUpRight,
  Check,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { media } from "@/lib/media";

const serviceIcons = [Heart, Flower2, Cake, CalendarHeart];

type QuoteField = "name" | "phone" | "eventType" | "date" | "guests";
type QuoteErrors = Partial<Record<QuoteField, boolean>>;

function validateQuote(values: {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
}): QuoteErrors {
  const nextErrors: QuoteErrors = {};
  if (values.name.trim().length < 2) {
    nextErrors.name = true;
  }
  const phoneDigits = values.phone.replace(/[^\d]/g, "");
  if (phoneDigits.length < 9) {
    nextErrors.phone = true;
  }
  if (values.eventType === "") {
    nextErrors.eventType = true;
  }
  if (values.date.trim().length < 4) {
    nextErrors.date = true;
  }
  const guestsNum = Number(values.guests);
  if (!values.guests.trim() || !Number.isFinite(guestsNum) || guestsNum < 1) {
    nextErrors.guests = true;
  }
  return nextErrors;
}

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering for Every Occasion | Kaf Coffee" },
      {
        name: "description",
        content:
          "Explore Kaf Coffee catering layouts for weddings, funerals, birthdays and other gatherings.",
      },
      { property: "og:title", content: "Catering for Every Occasion | Kaf Coffee" },
      {
        property: "og:description",
        content: "Thoughtful food for the moments that bring us together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CateringPage,
});

function CateringPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const errorMessages: Record<QuoteField, string> = {
    name: t.errName,
    phone: t.errPhone,
    eventType: t.errEvent,
    date: t.errDate,
    guests: t.errGuests,
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const clearFieldError = (field: QuoteField) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateQuote({ name, phone, eventType, date, guests });
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setName("");
    setPhone("");
    setEventType("");
    setDate("");
    setGuests("");
    setMessage("");
  };

  return (
    <SiteLayout>
      <section className="page-banner page-banner-hero">
        <img
          src={media.mural}
          alt=""
          aria-hidden="true"
          className="page-banner-bg"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="site-container page-banner-content">
          <div className="eyebrow text-primary">{t.cateringPageEyebrow}</div>
          <h1 className="max-w-3xl">{t.cateringPageTitle}</h1>
          <p>{t.cateringPageIntro}</p>
        </div>
      </section>
      <section className="section catering-services-section">
        <div className="site-container">
          <div className="service-grid">
            {t.serviceNames.map((serviceName, i) => {
              const Icon = serviceIcons[i] ?? CalendarHeart;
              return (
                <article className="service-card" key={i}>
                  <Icon aria-hidden="true" />
                  <h3>{serviceName}</h3>
                  <p>{t.serviceDescriptions[i]}</p>
                  <Button variant="outline" asChild>
                    <a href="#quote">
                      {t.requestQuote}
                      <ArrowUpRight />
                    </a>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section dark-section">
        <div className="site-container">
          <SectionHeading eyebrow={t.howEyebrow} title={t.howTitle} description={t.howIntro} />
          <div className="steps-grid">
            {t.steps.map((step, i) => (
              <div key={i}>
                <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow={t.includedEyebrow}
            title={t.includedTitle}
            description={t.includedIntro}
          />
          <ul className="included-list">
            {t.included.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section bg-muted" id="quote">
        <div className="site-container quote-layout">
          <div>
            <div className="eyebrow">{t.cateringEyebrow}</div>
            <h2>{t.quoteTitle}</h2>
            <p className="section-intro">{t.quoteIntro}</p>
            <p className="section-intro">{t.formNote}</p>
          </div>
          {submitted ? (
            <div className="form-success-card" role="status">
              <CheckCircle2 aria-hidden="true" />
              <div>
                <h3>{t.formSuccessTitle}</h3>
                <p>{t.formSuccessBody}</p>
                <Button type="button" variant="outline" onClick={() => setSubmitted(false)}>
                  {t.formResetLabel}
                </Button>
              </div>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit} noValidate>
              {hasErrors && (
                <div className="form-wide form-error-summary" role="alert">
                  <AlertCircle aria-hidden="true" />
                  <span>{t.formErrorSummary}</span>
                </div>
              )}
              <label>
                {t.nameLabel}
                <input
                  autoComplete="name"
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    clearFieldError("name");
                  }}
                  aria-invalid={Boolean(errors.name)}
                  className={errors.name ? "form-input-invalid" : undefined}
                />
                {errors.name && (
                  <span className="form-field-error" role="alert">
                    {errorMessages.name}
                  </span>
                )}
              </label>
              <label>
                {t.phoneLabel}
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder={t.phonePlaceholder}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    clearFieldError("phone");
                  }}
                  aria-invalid={Boolean(errors.phone)}
                  className={errors.phone ? "form-input-invalid" : undefined}
                />
                {errors.phone && (
                  <span className="form-field-error" role="alert">
                    {errorMessages.phone}
                  </span>
                )}
              </label>
              <label>
                {t.eventLabel}
                <select
                  value={eventType}
                  onChange={(e) => {
                    setEventType(e.target.value);
                    clearFieldError("eventType");
                  }}
                  aria-invalid={Boolean(errors.eventType)}
                  className={errors.eventType ? "form-input-invalid" : undefined}
                >
                  <option value="" disabled>
                    {t.eventPlaceholder}
                  </option>
                  {t.serviceNames.map((serviceName, i) => (
                    <option key={i} value={String(i)}>
                      {serviceName}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <span className="form-field-error" role="alert">
                    {errorMessages.eventType}
                  </span>
                )}
              </label>
              <label>
                {t.dateLabel}
                <input
                  type="text"
                  placeholder={t.datePlaceholder}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    clearFieldError("date");
                  }}
                  aria-invalid={Boolean(errors.date)}
                  className={errors.date ? "form-input-invalid" : undefined}
                />
                {errors.date && (
                  <span className="form-field-error" role="alert">
                    {errorMessages.date}
                  </span>
                )}
              </label>
              <label className="form-wide">
                {t.guestsLabel}
                <input
                  type="number"
                  min={1}
                  placeholder={t.guestsPlaceholder}
                  value={guests}
                  onChange={(e) => {
                    setGuests(e.target.value);
                    clearFieldError("guests");
                  }}
                  aria-invalid={Boolean(errors.guests)}
                  className={errors.guests ? "form-input-invalid" : undefined}
                />
                {errors.guests && (
                  <span className="form-field-error" role="alert">
                    {errorMessages.guests}
                  </span>
                )}
              </label>
              <label className="form-wide">
                {t.messageLabel}
                <textarea
                  placeholder={t.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <div className="form-wide">
                <Button type="submit" variant="dark">
                  {t.submit}
                  <ArrowUpRight />
                </Button>
                <span className="placeholder-label">{t.formNote}</span>
              </div>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
