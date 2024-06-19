import { TStatItem } from "../types";
import { calculateYearsOfExperience } from "../utils";
import PROJECT_LIST from "./project-list.constant";
import SKILL from "./skill.constant";

const STAT_LIST: TStatItem[] = [
  {
    num: calculateYearsOfExperience("2021-10-03"),
    text: "Years of Experience",
  },
  {
    num: 11,
    text: "Work Projects Summary",
  },
  {
    num: PROJECT_LIST.length,
    text: "Personal Project Portfolio",
  },
  {
    num: SKILL.info.length,
    text: "Technologies Mastered",
  },
];

export default STAT_LIST;
