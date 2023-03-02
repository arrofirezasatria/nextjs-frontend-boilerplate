import { useRouter } from "next/router";
import { useEffect } from "react";

function usePersistLocaleCookie() {
  const { locale, defaultLocale } = useRouter();

  useEffect(persistLocaleCookie, [locale, defaultLocale]);
  function persistLocaleCookie() {
    if (locale !== defaultLocale) {
      const date = new Date();
      const expireMs = 100 * 24 * 60 * 60 * 1000; // 100 days
      date.setTime(date.getTime() + expireMs);
      document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
    }
  }
}

export default usePersistLocaleCookie;
