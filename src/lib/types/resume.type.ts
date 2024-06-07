import React from "react";

export type TResumeItem<T> = {
  title: string;
  description: string;
  icon: string;
  info: T[];
};

export type TInfoAboutItem = {
  key: string;
  value: string;
};

export type TInfoExperienceItem = {
  company: string;
  position: string;
  duration: string;
};

export type TInfoEducationItem = {
  institution: string;
  degree: string;
  duration: string;
};

export type TInfoSkillItem = {
  icon: React.ReactNode;
  name: string;
};

export type TAboutItem = Omit<TResumeItem<TInfoAboutItem>, "icon">;

export type TExperienceItem = TResumeItem<TInfoExperienceItem>;

export type TEducationItem = TResumeItem<TInfoEducationItem>;

export type TSkillItem = Omit<TResumeItem<TInfoSkillItem>, "icon">;
