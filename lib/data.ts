import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sop",
    hash: "#sop",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Activities",
    hash: "#activities",
  },
] as const;

export const textnav = [
  {
    name: "Home", hash: "#home",
  },
  {
    name: "About",
    hash: "#sop",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Chindapong School",
    location: "GPAX : ",
    description: "dlplwlpapdawo,cd,dl,cos,c,sc,ps,dcos,dlc,spd,csld,co,cs,o",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Wachirathamsatit School",
    location: "GPAX :",
    description:
      "GPAX ",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Triamudomsuksa Suwinthawong School",
    location: "GPAX : ",
    description:"dlplwlpapdawo,cd,dl,cos,c,sc,ps,dcos,dlc,spd,csld,co,cs,o",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tusw Admission",
    description:
      "Edit in data.ts same as Education",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Edit in data.ts same as Education",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "Edit in data.ts same as Education.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "React",
  "Python",
  "JavaScript",
  "Figma",
  "HTML",
  "CSS",
  "Svelte",
  "Tailwind",
  
] as const;

export const learnsData = [
  "TypeScript",
  "Next.js",
  "Machine Learning",
  "Prisma",
  "Adobe After Effect",
  "Adobe Premiere Pro",
  
] as const;
