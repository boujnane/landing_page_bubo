'use client';

import { useEffect } from "react";

export default function TestimonialThemeWrapper() {
  useEffect(() => {
    const getTheme = () => {
      if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    };

    const testimonialsWrapper = document.getElementById("testimonial-wrapper");
    const toggleButton = document.getElementById("theme-toggle");

    const applyTheme = () => {
      const theme = getTheme();
      if (theme === "light") {
        testimonialsWrapper?.classList.remove("testimonial-wrapper");
        testimonialsWrapper?.classList.add("testimonial-wrapper-light");
      } else {
        testimonialsWrapper?.classList.remove("testimonial-wrapper-light");
        testimonialsWrapper?.classList.add("testimonial-wrapper");
      }
    };

    applyTheme();

    toggleButton?.addEventListener("click", applyTheme);

    return () => {
      toggleButton?.removeEventListener("click", applyTheme);
    };
  }, []);

  return null;
}
