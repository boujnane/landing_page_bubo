import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Bubo",
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
    title: "Vision",
    items: [
      { title: "Accelerate", href: "/accelerate" },
      { title: "Research", href: "/research" },
    ],
  },
  {
    title: "Explore",
    items: [
      { title: "Product", href: "/products" },
      { title: "Tailor-made", href: "/requestaquote" },
      { title: "Data & AI consulting", href: "/advice" },
    ],
  },
  {
    title: "About Us",
    items: [
      { title: "People", href: "/about" },
      { title: "Values", href: "/values" },
      { title: "Partner", href: "/partner" },
    ],
  }
  // {
  //   title: "Resources",
  //   items: [
  //     { title: "Documentation", href: "/docs" },
  //     { title: "Changelog", href: "/changelog" },
  //     { title: "Security", href: "/security" },
  //     { title: "Customization", href: "/customization" },
  //   ],
  // },
];