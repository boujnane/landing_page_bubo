import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  links: [
    {
      title: "Accelerate",
      href: "/",
      description: "Example description",
      image: "/images/examples/image.jpg",
    },
  ],
  pagesNav: [
    {
      title: "Menu",
      items: [
        // {
        //   title: "Landing",
        //   href: "/landing",
        //   description: "A landing page template with differents sections.",
        //   image: "/images/examples/landing.jpg",
        // },
        {
          title: "Research",
          href: "/research",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "Product",
          href: "/waitlist",
          description:
            "A waitlist form using Astro DB, React Hook Form & Sonner. Static page.",
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
          title: "Advice",
          href: "/advice",
          description: "A simple page with a masonry gallery and little text.",
          image: "/images/examples/about.jpg",
        },
        {
          title: "Tailormade",
          href: "/newsletter",
          description:
            "A newsletter form using Astro DB & Simple Stack Form. Counter display!",
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
          description: "Our vision for a sustainable and innovative future",
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
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
        },
        {
          title: "Partner",
          href: "/partner",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
        }
      ],
    },
  ]
};
