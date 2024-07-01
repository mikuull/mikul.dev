import mikuull from "@/assets/mikuull.png";
import type { Project } from "@/types/types";

export const projects: Project[] = [
  {
    image: mikuull,
    title: "mikul.dev",
    description: "My personal page portfolio",
    url: "https://mikul-dev.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind", "ESLint", "Prettier"],
  },
  {
    image: mikuull,
    title: "Url Shortener",
    description: "Shorten your long url's with Url Shortener",
    url: "https://mikul-dev.vercel.app/",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "ESLint",
      "Prisma",
      "Prettier",
    ],
  },
];
