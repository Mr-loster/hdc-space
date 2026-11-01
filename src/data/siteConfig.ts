export interface SiteConfig {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  author: string;
  avatar: string;
  email: string;
  socialHandle: string;
  socialUrl: string;
  siteUrl: string;
  defaultOgImage: string;
  navLinks: { nameZh: string; nameEn: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  titleZh: "HDC的空间 | 思考、沉淀与好物指南",
  titleEn: "HDC's Space | Thoughts, Curated Gear & Field Notes",
  descriptionZh: "记录个人思考，分享亲测好用的数字工具、桌面好物与工作流沉淀。",
  descriptionEn: "A personal corner documenting independent thoughts, battle-tested desk gear, and modern digital productivity workflows.",
  author: "HDC",
  avatar: "/avatar.jpg",
  email: "hande211@gmail.com",
  socialHandle: "@HDC_211",
  socialUrl: "https://x.com/HDC_211",
  siteUrl: "https://hdc-space.pages.dev",
  defaultOgImage: "/avatar.jpg",
  navLinks: [
    { nameZh: "首页", nameEn: "Home", href: "/" },
    { nameZh: "精选好物", nameEn: "Curated Gear", href: "/gear" },
    { nameZh: "深度测评", nameEn: "In-Depth Reviews", href: "/reviews" },
    { nameZh: "关于我", nameEn: "About Me", href: "/about" },
  ],
};
