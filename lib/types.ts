export type ExperienceCategory = "Computer Science" | "Data Science" | "Finance" | "Other";
export type ExperienceType = "Employment" | "Research" | "Project" | "Other";

export interface Experience {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  location: string;
  categories: ExperienceCategory[];
  type: ExperienceType;
  // Optional, more specific label shown on the pill when type is "Other"
  // (e.g. "Club", "Athletics"). Falls back to `type` when omitted.
  displayType?: string;
  bullets: string[];
  tools: string[];
  repoUrl?: string;
}

export type AchievementTrack = "academic" | "athletic";

export interface Achievement {
  id: string;
  title: string;
  awardingBody: string;
  year: string;
  context: string;
  track: AchievementTrack;
  photo?: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location?: string;
  startDate?: string;
  graduationYear: number | string;
  gpa?: string;
  minors?: string;
  honors?: string[];
  coursework?: string[];
}