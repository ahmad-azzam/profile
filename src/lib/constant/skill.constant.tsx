import { TSkillItem } from "../types";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiNestjs,
  SiGraphql,
} from "react-icons/si";

const SKILL: TSkillItem = {
  title: "My Skill",
  description:
    "Below is a comprehensive list of my skills, showcasing the diverse range of technical abilities and competencies I possess in web development.",
  info: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <SiExpress />,
      name: "Express JS",
    },
    {
      icon: <SiNestjs />,
      name: "Nest JS",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
  ],
};

export default SKILL;
