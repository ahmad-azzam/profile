import { TProjectItem } from "../types";

const PROJECT_LIST: TProjectItem[] = [
  {
    num: "01",
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
