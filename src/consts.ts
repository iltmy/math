// Place any global data in this file.
// You can import this data from anywhere in your site by using the import keyword.

// Site title and description
export const SITE_LANG = "zh";  // 语言设置为中文
export const SITE_TAB = "QTSM 数学笔记";  // 更新为数学笔记的名称
export const SITE_TITLE = "QTSM 数学笔记 🧮";  // 网站标题更新
export const SITE_DESCRIPTION = "关于数学考研和黎曼几何（QTSM）的数学笔记";  // 描述更新
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "EveSunMaple";
export const USER_SITE = "https://frosti.saroprock.com"
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
}
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
}

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "首页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于我", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "所有博客",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "所有内容",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "黎曼几何",
        text: "黎曼几何",
        href: "/blog/categories/黎曼几何",
        svg: "cube",
        target: "_self",
      }, // Technology category
      
      {
        id: "Ricci flow",
        text: "Ricci Flow",
        href: "/blog/categories/Ricci flow",
        svg: "cube",
        target: "_self",
      }, // Technology category
      
      {
        id: "数学分析",
        text: "数学分析",
        href: "/blog/categories/考研数学分析",
        svg: "heart",
        target: "_self",
      }, // Life category
      {
        id: "高等代数",
        text: "高等代数",
        href: "/blog/categories/考研高等代数",
        svg: "heart",
        target: "_self",
      }, 
      {
        id: "其他",
        text: "其他",
        href: "/blog/categories/其他",
        svg: "heart",
        target: "_self",
      }, 



      
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "代码",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友链",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page

    //{
    //  id: "contact",
    //  text: "Contact",
    //  href: "mailto:contact.evesunmaple@outlook.com", // Contact email
    //  target: "_blank", // Open in a new tab
    //  svg: "contact",
    //},
];

// Social media and contact icons
export const socialIcons = [
  // {
   //  href: "https://afdian.net/a/saroprock",
   //  ariaLabel: "Support my work",
   //  title: "Support my work",
   //  svg: "support",
   //},
  //
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

 // {
  //   href: "/rss.xml",
  //   ariaLabel: "RSS Feed",
  //   title: "RSS Feed",
  //   svg: "rss",
  // },
];