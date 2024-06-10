import { TStatItem } from "../types";
import { calculateYearsOfExperience } from "../utils";
import SKILL from "./skill.constant";

const STAT_LIST: TStatItem[] = [
  {
    num: calculateYearsOfExperience("2021-10-03"),
    text: "Years of Experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: SKILL.info.length,
    text: "Technologies mastered",
  },
  // {
  //   num: 500,
  //   text: "Code commits",
  // },
];

export default STAT_LIST;
