import { ReactNode } from "react";

export interface TechnologyIcon {
  src: string;
  alt: string;
}

export interface ExperienceType {
  role: string;
  companyName: string;
  description: string;
}

export interface ProjectType {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  img: string;
}

export interface SocialLinkType {
  link: string;
  icon: ReactNode;
}
