// src/utils/location.ts
export interface LocationData {
  isFrench: boolean;
  currentPath: string;
  localizeUrl: (url: string) => string;
  lang: "fr" | "en";
}

export function useLocation(pathname: string): LocationData {
  const isFrench = pathname.startsWith('/fr');
  const localizeUrl = (url: string) => (isFrench ? `/fr${url}` : url);

  return {
    isFrench,
    currentPath: pathname,
    localizeUrl,
    lang: isFrench ? "fr": "en"
  };
}
