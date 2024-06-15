"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mateusz Mikulski",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+48) 000000000",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "mmikulski643@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Polish (Native)",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
    {
      icon: <SiPrisma />,
      name: "prisma",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip } from "@radix-ui/react-tooltip";

const About = () => {
  return <div>page</div>;
};

export default About;
