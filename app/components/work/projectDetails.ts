import {
  SiAppwrite,
  SiBootstrap,
  SiCloudinary,
  SiCss3,
  SiExpress,
  SiFiles,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNextui,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  github?: string;
  demo?: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "AI Image/Video Editor",
    description:
      "A web app using AI to enhance and transform images and videos with various filters and effects.",
    technologies: [
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      SiCloudinary,
      SiShadcnui,
    ],
    techNames: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Cloudinary",
      "Shadcn/ui",
    ],
    github: "",
    demo: "https://image-editor-dc.vercel.app/",
    image: "/projects/imageEditor.png",
    available: true,
  },
  {
    id: 1,
    name: "SEPEC Management",
    description:
      "A platform to simplify medical appointment scheduling for administrators and patients.",
    technologies: [SiNextdotjs, SiTypescript, SiTailwindcss, SiAppwrite],
    techNames: ["Next.js", "TypeScript", "TailwindCSS", "Appwrite"],
    github: "",
    demo: "https://sepec.vercel.app/",
    image: "/projects/Sepec.png",
    available: true,
  },
  {
    id: 2,
    name: "Seat picker basketball games",
    description:
      "An interactive web app for selecting and booking seats for basketball games in real-time.",
    technologies: [
      SiNextdotjs,
      SiTypescript,
      SiSpring,
      SiTailwindcss,
      SiNextui,
    ],
    techNames: ["Next.js", "TypeScript", "Spring", "TailwindCSS", "nextUI"],
    github: "",
    demo: "",
    image: "/projects/leonesApp.png",
    available: true,
  },
  {
    id: 3,
    name: "Budget Tracker v2",
    description:
      "A web app to manage finances, track expenses, set budget goals, and analyze spending patterns.",
    technologies: [SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiReactquery],
    techNames: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "React-Query",
    ],
    //github: "",
    demo: "https://budget-delicias.vercel.app/",
    image: "/projects/Budget.png",
    available: false,
  },
  {
    id: 4,
    name: "Overlay logo and image effects",
    description:
      "A web app to upload images and apply various overlay effects and logos, customizable and high resolution.",
    technologies: [SiReact, SiFiles, SiCss3, SiBootstrap],
    techNames: ["React", "File Upload", "CSS", "Bootstrap"],
    github: "https://github.com/davechbga/overlay-app",
    demo: "https://overlay-logo.netlify.app/",
    image: "/projects/Overlay.png",
    available: true,
  },
  {
    id: 5,
    name: "Pico y placa predictor",
    description:
      "A web app to check driving restrictions in Ecuador based on vehicle license plate numbers.",
    technologies: [SiReact, SiBootstrap],
    techNames: ["React", "Bootstrap"],
    github: "https://github.com/davechbga/pico-placa-predictor",
    demo: "https://pico-placa-predictor.netlify.app/",
    image: "/projects/Pico.png",
    available: true,
  },
  {
    id: 6,
    name: "MERN Dashboard",
    description:
      "A comprehensive web app for data management and visualization using the MERN stack.",
    technologies: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
    techNames: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/davechbga/fullstack-dashboard",
    demo: "https://admin-frontend-davechbga.onrender.com/",
    image: "/projects/Dashboard.png",
    available: true,
  },
  {
    id: 7,
    name: "Recipes cuisine",
    description:
      "A web app to discover and manage recipes with detailed instructions and a user-friendly interface.",
    technologies: [SiReact],
    techNames: ["React"],
    github: "https://github.com/davechbga/recipes-react-app",
    demo: "https://recipes-app-davechbga.netlify.app/",
    image: "/projects/Recipes.png",
    available: true,
  },
  {
    id: 8,
    name: "Portfolio v2",
    description:
      "An upgraded personal portfolio showcasing skills and projects with enhanced functionality and design.",
    technologies: [SiReact, SiJavascript],
    techNames: ["React", "JavaScript"],
    github: "https://github.com/davechbga/davechbga-portfolio",
    demo: "https://davechbga-portfolio.netlify.app/",
    image: "/projects/PortfolioV2.png",
    available: true,
  },
];
