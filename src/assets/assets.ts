import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import Min1 from "./Min1.jpg";
import Min3 from "./Min3.jpg";
import Min2 from "./Min2.jpg";
import MyAvatar from "./MyAvatar.jpg";
import corn from "./corn.png";
export const assets = {
  MyAvatar,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  corn,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];
export const Image = [
  {
    src: Min1,
    alt: "Minimalist design 1",
    caption: "My Love",
  },
  {
    src: Min2,
    alt: "Minimalist design 2",
    caption: "My Life",
  },
  {
    src: Min3,
    alt: "Minimalist design 3",
    caption: "My Journey",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Address",
    description: "Ha Noi - Viet Nam",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Hanoi National University of Education",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Certification",
    description: "TOEIC 835/990 , VSTEP B2",
  },
];
export const projects = [
  {
    title: "Pop-corn Film",
    description:
      "An online movie website allowing users to browse and watch films easily, with responsive design for all devices.",
    tech: [
      "External API",
      "React",
      "Javascript",
      "Material UI",
      "mongoDB",
      "Express",
    ],
    image:
      "https://i.pinimg.com/736x/9b/e1/8b/9be18bd15b94590e42f763e90b210ce6.jpg",
    github: "https://github.com/JustTaiCorn/Corn.films",
    live: "https://popcornflims.netlify.app/",
  },
  {
    title: "Portfolio",
    description:
      "A responsive portfolio website showcasing modern web development techniques and beautiful animations.",
    tech: [
      "Nextjs",
      "Framer Motion",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
    ],
    image:
      "https://i.pinimg.com/736x/46/66/fe/4666fe7ddd96b5aac222fc6ea5697ca6.jpg",
    github: "https://github.com/ontopcommunity/visage-vue-forge",
    live: "https://visage-vue-forge.vercel.app",
  },
];
export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
