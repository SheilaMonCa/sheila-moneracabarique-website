import { SkillGroup } from "@/lib/types";
 
export const skills: SkillGroup[] = [
  {
    name: "Programming Languages",
    items: ["Python", "Java", "R", "C", "C++", "SQL", "Racket", "Prolog", "Haskell"],
  },
  {
    name: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Jekyll"],
  },
  {
    name: "Tools & Environments",
    items: ["Git", "Linux", "HPC"],
  },
  {
    name: "Currently Learning",
    items: ["Lean"],
  },
];
 
export interface Language {
  name: string;
  proficiency: "Native" | "B2" | "B1" | "A2" | "A1";
  flag: string; // country code: "us", "es", "fr", etc.
}
 
export const languages: Language[] = [
  { name: "English", proficiency: "Native", flag: "gb" },
  { name: "Spanish", proficiency: "Native", flag: "es" },
  { name: "French", proficiency: "B2", flag: "fr" },
];
 