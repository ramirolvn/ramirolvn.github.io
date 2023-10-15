import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:folder",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-fa-solid:user",
        excerpt: "Hey there! I'm a brazilian full stack developer focusing in iOS since 2017"
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "americanas",
        title: "Americanas",
        file: "markdown/americanas.md",
        icon: "i-heroicons-solid:globe-americas",
        excerpt: "E-commerce app.",
        link: "https://apps.apple.com/br/app/americanas-compras-online/id476307592"
      },
      {
        id: "credsystem",
        title: "Cartão Mais!",
        file: "markdown/credsystem.md",
        icon: "i-heroicons-solid:credit-card",
        excerpt: "Banking app.",
        link: "https://apps.apple.com/br/app/cart%C3%A3o-mais/id1179125950"
      },
      {
        id: "meu_uol",
        title: "Meu Uol",
        file: "markdown/meu_uol.md",
        icon: "i-heroicons:wallet",
        excerpt: "Digital wallet app",
        link: "https://apps.apple.com/br/app/meu-uol/id1453193555"
      },
      {
        id: "computex",
        title: "Gestor Escolar!",
        file: "markdown/computex.md",
        icon: "i-heroicons-solid:academic-cap",
        excerpt: "School manager app",
        link: "https://apps.apple.com/cr/app/gestor-escolar/id1173015951"
      },
      {
        id: "submarino",
        title: "Submarino",
        file: "markdown/submarino.md",
        icon: "i-heroicons-solid:device-phone-mobile",
        excerpt: "E-commerce app.",
        link: "https://apps.apple.com/br/app/cart%C3%A3o-mais/id1179125950"
      },
      {
        id: "shoptime",
        title: "Shoptime",
        file: "markdown/shoptime.md",
        icon: "i-heroicons-solid:device-phone-mobile",
        excerpt: "E-commerce app.",
        link: "https://apps.apple.com/br/app/cart%C3%A3o-mais/id1179125950"
      }
    ]
  }
];

export default bear;
