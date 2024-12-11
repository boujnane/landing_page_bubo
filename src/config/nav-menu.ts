import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  links: [
    {
      title: "Accelerate",
      href: "/accelerate",
      description: "Example description",
      image: "/images/examples/image.jpg",
    },
    {
      title: "Research",
      href: "/research",
      description: "A reproduction of Starlog template with Tailwind CSS.",
      image: "/images/examples/changelog.jpg",
    }
  ],
  pagesNav: [
    {
      title: "Explore",
      items: [
        // {
        //   title: "Landing",
        //   href: "/landing",
        //   description: "A landing page template with differents sections.",
        //   image: "/images/examples/landing.jpg",
        // },
        {
          title: "Data & AI consulting",
          href: "/data&AIconsulting",
          description: "We help you on your data & AI projects",
          image: "/images/examples/about.jpg",
        },
        {
          title: "Products",
          href: "/products",
          description:
            "We build useful products",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        // {
        //   title: "Pricing",
        //   href: "/pricing",
        //   description: "Pricing cards, FAQs and more content with price.",
        //   image: "/images/examples/pricing.jpg",
        // },
        {
          title: "Tailor-made Software",
          href: "/tailor-made",
          description:
            "Your needs, our work",
          image: "/images/examples/newsletter.jpg",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "About us",
      items: [
        {
          title: "People",
          href: "/about",
          description: "People who work hard every day",
          image: "/images/examples/static-blog.jpg",
        },
        // {
        //   title: "Docs",
        //   href: "/docs/getting-started",
        //   description:
        //     "A Markdown/MDX docs site built using Content Collections.",
        //   image: "/images/examples/documentation.jpg",
        // },
        {
          title: "Values",
          href: "/values",
          description:
            "The values that drive us",
          image: "",
        },
        {
          title: "Partners",
          href: "/partners",
          description:
            "Companies and people who place their trust in us",
          image: "/images/examples/animes.jpg",
        }
      ],
    },
  ]
};
