// Site title and description
export const SITE_LANG = "zh";  // 语言设置为中文
export const SITE_TAB = "QTSM 数学笔记";  // 更新为数学笔记的名称
export const SITE_TITLE = "QTSM 数学笔记 🧮";  // 网站标题更新
export const SITE_DESCRIPTION = "关于数学考研和黎曼几何（QTSM）的数学笔记";  // 描述更新
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "EveSunMaple";
export const USER_SITE = "https://frosti.saroprock.com";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
};
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "首页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于我", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "数学博客",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "RiemannGeometry",  // Path to be in English
        text: "黎曼几何", // Keep Chinese text
        href: "/blog/categories/RiemannGeometry",  // English URL path
        svg: "cube",
        target: "_self",
      },
      {
        id: "RicciFlow",  // Path to be in English
        text: "Ricci Flow",  // Keep Chinese text (already in English)
        href: "/blog/categories/Ricci flow",  // English URL path
        svg: "cube",
        target: "_self",
      },
      {
        id: "MathematicalAnalysis",  // Path to be in English
        text: "数学分析", // Keep Chinese text
        href: "/blog/categories/MathematicalAnalysis",  // English URL path
        svg: "heart",
        target: "_self",
      },
      {
        id: "AdvancedAlgebra",  // Path to be in English
        text: "高等代数", // Keep Chinese text
        href: "/blog/categories/AdvancedAlgebra",  // English URL path
        svg: "heart",
        target: "_self",
      },
    ],
  },
  {
    id: "others",  // Path to be in English
    text: "其他",  // Keep Chinese text
    href: "/blog/categories/others",  // English URL path
    svg: "heart",
    target: "_self",
  },
  {
    id: "all",
    text: "所有内容",  // Keep Chinese text
    href: "/blog",  // English URL path for all blog
    svg: "post",
    target: "_self",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/iltmy",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/435221511",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
];
