import { Achievement } from "@/lib/types";

export const achievements: Achievement[] = [
  // --- Academic & Fellowships -------------------------------------------
    {
    id: "finance-department-scholarship",
    track: "academic",
    year: "Spring 2026",
    title: "Excellence in Finance Award",
    awardingBody: "Weatherhead School of Management",
    context:
      "Departmental award given by Weatherhead's Management program recognizing outstanding academic achievement among finance students.",
    // photo: "/achievements/finance-scholarship.jpg",
  },
  {
    id: "deans-high-honors",
    track: "academic",
    year: "Every semester since Fall 2023",
    title: "Dean's High Honors",
    awardingBody: "Case Western Reserve University",
    context:
      "Awarded to undergraduates earning a term GPA of 3.75 or higher on at least 12 credit hours, with no Fs or NPs; noted on the official transcript.",
  },
  // --- Athletics & High Performance ---------------------------------------
    {
    id: "ncaa-swimming-qualification",
    track: "athletic",
    year: "2026",
    title: "NCAA Division III Championships Qualifier, Women's 400 Free Relay",
    awardingBody: "NCAA",
    context:
      "Qualified for the NCAA Division III Championships as part of the women's 400 free relay, which also set a new school record.",
    photo: "/achievements/swimming2.JPG",
  },
    {
    id: "surf-ski-worlds-2022",
    track: "athletic",
    year: "2022",
    title: "ICF Surf Ski World Championships, Team GB",
    awardingBody: "International Canoe Federation",
    context:
      "Selected to represent Great Britain at the ICF Surf Ski World Championships, placing 14th in category.",
    photo: "/achievements/worlds_2022.jpg",
  },
];