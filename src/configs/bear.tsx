import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
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
        icon: "i-heroicons-solid:fire",
        excerpt: "E-commerce project.",
        link: "https://apps.apple.com/br/app/americanas-compras-online/id476307592"
      },
      {
        id: "meu_uol",
        title: "Meu Uol",
        file: "markdown/meu_uol.md",
        icon: "i-ri:gamepad-line",
        excerpt: "Digital wallet project",
        link: "https://apps.apple.com/br/app/meu-uol/id1453193555"
      },
      {
        id: "computex",
        title: "Gestor Escolar!",
        file: "markdown/computex.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "School manager app",
        link: "https://apps.apple.com/cr/app/gestor-escolar/id1173015951"
      }
    ]
  }
];

export default bear;
