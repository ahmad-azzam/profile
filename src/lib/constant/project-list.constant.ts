import { TProjectItem } from "../types";

const PROJECT_LIST: TProjectItem[] = [
  {
    num: "01",
    category: "Frontend",
    description:
      "The Intihub application is designed to comprehensively monitor a company's financial data. This data is presented in the form of charts and tables, enabling users to easily observe the company's income and expenditures",
    github: "",
    image: "/assets/image/fo-dashboard-detail.png",
    live: "",
    stack: [
      { name: "ReactJs" },
      { name: "Ant Design" },
      { name: "Zustand" },
      { name: "React Query" },
    ],
    title: "Intihub",
  },
  {
    num: "02",
    category: "Frontend",
    description:
      "The Intihub Back Office application is designed to manage the data that will be displayed in the front office application. It also allows for the management of users and their respective roles.",
    github: "",
    image: "/assets/image/bo-user-popover.png",
    live: "",
    stack: [
      { name: "ReactJs" },
      { name: "Ant Design" },
      { name: "Redux Toolkit" },
      { name: "RTK Query" },
    ],
    title: "Intihub Back Office",
  },
];

export default PROJECT_LIST;
