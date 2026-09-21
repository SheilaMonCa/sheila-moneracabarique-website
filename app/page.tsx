import { experience } from "@/data/experience";
import { ExperienceList } from "@/components/ExperienceList";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-board px-6 py-14">
      <div className="mb-12">
        <h1 className="font-display text-4xl italic leading-tight sm:text-5xl">
          Experience
        </h1>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-soft">
          A running log of the work, research, and roles I&apos;ve taken on.
          Everything below, including internships, research, leadership, and
          coursework projects, is filterable by subject area and role type,
          so you can jump straight to what&apos;s relevant to you.
        </p>
      </div>

      <ExperienceList items={experience} />
    </div>
  );
}