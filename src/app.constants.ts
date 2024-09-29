import {
  ExperienceType,
  ProjectType,
  SocialLinkType,
  TechnologyIcon,
} from "./app.interface";
import LinkedIn from "./components/icons/linkedin";

export const technologies: TechnologyIcon[] = [
  {
    src: "svg/kotlin.svg",
    alt: "KOTLIN",
  },
  {
    src: "svg/kotlin.svg",
    alt: "KOTLIN",
  },
  {
    src: "svg/kotlin.svg",
    alt: "KOTLIN",
  },
  {
    src: "svg/kotlin.svg",
    alt: "KOTLIN",
  },
  {
    src: "svg/kotlin.svg",
    alt: "KOTLIN",
  },
];

export const experiences: ExperienceType[] = [
  {
    role: "Backend Developer",
    companyName: "Google",
    description: "I used backend technologies like node, express and mongo db",
  },
  {
    role: "Backend Developer",
    companyName: "Google",
    description: "I used backend technologies like node, express and mongo db",
  },
  {
    role: "Backend Developer",
    companyName: "Google",
    description: "I used backend technologies like node, express and mongo db",
  },
  {
    role: "Backend Developer",
    companyName: "Google",
    description: "I used backend technologies like node, express and mongo db",
  },
];

export const projects: ProjectType[] = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, odio et tincidunt fermentum, metus sapien ornare nunc, nec tempus tortor lacus a nulla.",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, odio et tincidunt fermentum, metus sapien ornare nunc, nec tempus tortor lacus a nulla.",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, odio et tincidunt fermentum, metus sapien ornare nunc, nec tempus tortor lacus a nulla.",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, odio et tincidunt fermentum, metus sapien ornare nunc, nec tempus tortor lacus a nulla.",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    img: "https://via.placeholder.com/300",
  },
];

export const socialLinks: SocialLinkType[] = [
  {
    link: "linkedin.com",
    icon: LinkedIn(),
  },
  {
    link: "",
    icon: LinkedIn(),
  },
  {
    link: "",
    icon: LinkedIn(),
  },
];

// ANIMATION CONSTANTS

export const leftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

export const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const TRANSITION = { duration: 1, type: "spleen", ease: "linear" };

export const aboutContainerVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
