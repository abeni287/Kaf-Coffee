import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Check, Copy, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/components/language-provider";

const OrderDialogContext = createContext({
  openOrderDialog: () => {},
});

export function copyPhoneNumber(phone: string, onCopied?: () => void) {
  const trigger = () => onCopied?.();
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(phone)
      .then(trigger)
      .catch(() => {
        fallbackCopy(phone);
        trigger();
      });
    return;
  }
  fallbackCopy(phone);
  trigger();
}

function fallbackCopy(text: string) {
  if (typeof document === "undefined") return;
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
  } catch {
    // Ignore clipboard fallback errors
  }
  document.body.removeChild(textarea);
}

export function OrderDialogProvider({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <OrderDialogContext.Provider value={{ openOrderDialog: () => setOpen(true) }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="order-dialog-content">
          <DialogHeader className="text-left">
            <div className="eyebrow text-sand">{t.orderDialogEyebrow}</div>
            <DialogTitle className="order-dialog-title">{t.orderDialogTitle}</DialogTitle>
            <DialogDescription className="order-dialog-description">
              {t.orderDialogIntro}
            </DialogDescription>
          </DialogHeader>

          <div className="order-dialog-body">
            <div className="order-option-group">
              <span className="order-option-label">{t.callToOrderLabel}</span>
              <div className="order-phone-card">
                <a href="tel:+251912736382" className="order-phone-link">
                  <span className="order-phone-icon" aria-hidden="true">
                    <Phone />
                  </span>
                  <span className="order-phone-text">
                    <strong className="tabular-nums">{t.phoneValue}</strong>
                    <span>{t.callToOrderHint}</span>
                  </span>
                </a>
                <button
                  type="button"
                  className="order-copy-btn"
                  onClick={() => copyPhoneNumber(t.phoneValue, () => setCopied(true))}
                  aria-label={copied ? t.copiedPhone : t.copyPhone}
                  title={copied ? t.copiedPhone : t.copyPhone}
                >
                  {copied ? <Check /> : <Copy />}
                  <span>{copied ? t.copiedPhone : undefined}</span>
                </button>
              </div>
            </div>

            <div className="order-option-group">
              <span className="order-option-label">{t.deliveryAppsLabel}</span>
              <div className="delivery-apps-grid">
                {t.deliveryApps.map((app) => (
                  <button key={app} type="button" className="delivery-app-btn" onClick={() => {}}>
                    <span className="delivery-empty-icon" aria-hidden="true" />
                    <span className="delivery-app-name">{app}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </OrderDialogContext.Provider>
  );
}

export const useOrderDialog = () => useContext(OrderDialogContext);
