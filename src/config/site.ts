export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tech Tunes",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Feed",
      href: "/",
    },
    {
      label: "Subscriptions",
      href: "/subscriptions",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ],
  navMenuItems: [
    {
      label: "Feed",
      href: "/",
    },
    {
      label: "Subscriptions",
      href: "/subscriptions",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
    {
      label: "Log In",
      href: "/login",
    },
    {
      label: "Sign Up",
      href: "/signup",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
