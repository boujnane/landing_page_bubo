import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Bubo",
  description:
    "Bubo's Landing page",
  url: "https://wwww.bubobu.bo",
  ogImage: "",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "footer.vision.title",
    items: [
      { title: "footer.vision.accelerate", href: "/accelerate" },
      { title: "footer.vision.research", href: "/research" },
    ],
  },
  {
    title: "footer.explore.title",
    items: [
      { title: "footer.explore.dataAIconsulting", href: "/data&AIconsulting" },
      { title: "footer.explore.tailor_made", href: "/tailor-made" },
      { title: "footer.explore.products", href: "/products" },
    ],
  },
  {
    title: "footer.about_us.title",
    items: [
      { title: "footer.about_us.people", href: "/about" },
      { title: "footer.about_us.values", href: "/values" },
      { title: "footer.about_us.partners", href: "/partners" },
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