import { TProjectItem } from "../types";

const PROJECT_LIST: TProjectItem[] = [
  {
    num: "01",
    category: "Frontend",
    description:
      "The iPhone Store Website Clone project is a meticulously crafted landing page that replicates the aesthetic and user experience of Apple's official iPhone store. Built using Next.js, Tailwind CSS, and GSAP, this project delivers a high-quality, dynamic, and visually appealing interface that captures the essence of the original site.",
    github: "https://github.com/ahmad-azzam/clone-iphone-shop",
    image: "/assets/image/iPhone-clone.png",
    live: "https://clone-iphone-shop.vercel.app/",
    stack: [{ name: "NextJs" }, { name: "Tailwind" }, { name: "Gsap" }],
    title: "iPhone Store Clone",
  },
  {
    num: "02",
    category: "Backend",
    description:
      "Client Pro is a backend application designed to manage client documents efficiently. It streamlines the storage, retrieval, and sharing of all client-related documents.",
    github: "https://github.com/ahmad-azzam/client-pro-api",
    image: "/assets/image/client-pro.png",
    live: "",
    stack: [
      { name: "NestJS" },
      { name: "GraphQL" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
    ],
    title: "Client Pro API",
  },
];

export default PROJECT_LIST;
