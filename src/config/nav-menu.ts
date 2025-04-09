import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  links: [
    {
      title: "Accelerate",
      href: "accelerate",
      description: "Example description",
      image: "/images/examples/image.jpg",
    },
    {
      title: "Research",
      href: "research",
      description: "nav.a_reproduction_of_Starlog",
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
          title: "home.data_ai_consulting",
          href: "data&AIconsulting",
          description: "nav.we_help_you_on_your_data",
          image: "/images/examples/about.jpg",
        },
        {
          title: "services.products",
          href: "products",
          description:
            "nav.we_build_useful_products",
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
          title: "common.tailor_made",
          href: "tailor-made",
          description:
            "nav.your_needs_our_work",
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
          title: "common.people",
          href: "about",
          description: "nav.people_who_work_hard",
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
          title: "common.values",
          href: "values",
          description:
            "nav.the_values_that_drive_us",
          image: "",
        },
        {
          title: "common.partners",
          href: "partners",
          description:
            "nav.companies_and_people_who",
          image: "/images/examples/animes.jpg",
        }
      ],
    },
  ]
};
