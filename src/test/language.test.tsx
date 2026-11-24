import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { LanguageProvider, useLanguage } from "@/components/language-provider";
import { LANGUAGE_KEY, readLanguage } from "@/lib/translations";
describe("Visitor language preference", () => {
  beforeEach(() => localStorage.clear());
  it("restores the Amharic choice between visits", async () => {
    localStorage.setItem(LANGUAGE_KEY, "am");
    const { result } = renderHook(() => useLanguage(), { wrapper: LanguageProvider });
    await waitFor(() => expect(result.current.language).toBe("am"));
  });
  it("saves a language switch for the next visit", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper: LanguageProvider });
    act(() => result.current.setLanguage("am"));
    expect(localStorage.getItem(LANGUAGE_KEY)).toBe("am");
  });
  it("defaults to English when no valid language was saved", () => {
    expect(readLanguage(null)).toBe("en");
    expect(readLanguage("fr")).toBe("en");
  });
});
