import { SiReact } from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];

  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Recipes cuisine",
    description:
      "Recipes Cuisine is a web application designed to help users discover and manage a wide variety of recipes. Users can search for recipes, view detailed cooking instructions, and save their favorite recipes, all within an intuitive and visually appealing interface.",
    technologies: [SiReact],
    techNames: ["React"],
    github: "https://github.com/davechbga/recipes-react-app",
    demo: "https://recipes-app-davechbga.netlify.app/",
    image: "/projects/Recipes.png",
    available: true,
  },
  {
    id: 1,
    name: "Portfolio v1",
    description:
      "Portfolio v1 is an upgraded version of my personal portfolio, designed to highlight my skills and projects in web development with enhanced functionality and design. This version includes dynamic sections for my experience, featured projects, and contact information, all presented in a sleek and modern interface.",
    technologies: [SiReact],
    techNames: ["React"],
    github: "https://github.com/davechbga/portfoliov3",
    demo: "https://davechbga-portfolio.netlify.app/",
    image: "/projects/PortfolioV1.png",
    available: true,
  },
];
