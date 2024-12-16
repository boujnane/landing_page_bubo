import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Bubo",
  description: "Bubo's Landing page",
  url: "https://www.bubobu.bo", // Remplacement de l'URL avec le domaine principal
  ogImage: "/bubo_logo.png",    // Remplacer par une image Open Graph valide
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
      { title: "Data & AI consulting", href: "/data&AIconsulting" },
      { title: "Tailor-made software", href: "/tailor-made" },
      { title: "Products", href: "/products" },
    ],
  },
  {
    title: "About Us",
    items: [
      { title: "People", href: "/about" },
      { title: "Values", href: "/values" },
      { title: "Partners", href: "/partners" },
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