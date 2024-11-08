import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Bubo Company",
  description:
    "Bubo's Landing page",
  url: "https://astro-nomy.vercel.app",
  ogImage: "",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Explore",
    items: [
      { title: "Accelerate", href: "/" },
      { title: "Research", href: "/research" },
      { title: "Product", href: "/waitlist" },
      { title: "Advice", href: "/advice" },
      { title: "Tailormade", href: "/newsletter" },
    ],
  },
  {
    title: "About Us",
    items: [
      { title: "People", href: "/about" },
      { title: "Values", href: "/values" },
      { title: "Partner", href: "/partner" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Documentation", href: "/docs" },
      { title: "Changelog", href: "/changelog" },
      { title: "Security", href: "/security" },
      { title: "Customization", href: "/customization" },
    ],
  },
];