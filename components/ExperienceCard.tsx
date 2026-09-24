"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Experience } from "@/lib/types";

const categoryClassMap: Record<string, string> = {
  "Computer Science": "category-cs",
  "Data Science": "category-ds",
  Finance: "category-finance",
  Other: "category-other",
};

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="relative grid grid-cols-1 gap-3 border-b border-line py-7 sm:grid-cols-[8rem_1fr]"
    >
      {/* Meta sidebar - desktop only */}
      <div className="hidden font-mono text-[12px] text-ink-soft sm:block">
        <div className="font-semibold text-ink">{item.startDate} -</div>
        <div className="font-semibold text-ink">{item.endDate}</div>
        <div className="mt-2">{item.location}</div>
        <div className="mt-3">
          <span className="type-pill font-medium text-[11px]">
            {item.displayType ?? item.type}
          </span>
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl leading-snug">
          {item.role}
          <span className="text-ink-soft"> · {item.organization}</span>
        </h3>

        {/* Meta row - mobile only, replaces the sidebar, sits right under the title */}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] text-ink-soft sm:hidden">
          <span className="font-semibold text-ink">
            {item.startDate} - {item.endDate}
          </span>
          <span>{item.location}</span>
          <span className="type-pill font-medium text-[11px]">
            {item.displayType ?? item.type}
          </span>
          {item.categories.map((category) => (
            <span
              key={category}
              className={`font-mono text-[11px] ${categoryClassMap[category]}`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Categories - desktop only; folded into the meta row above on mobile */}
        <div className="mt-2 hidden flex-wrap gap-2 sm:flex">
          {item.categories.map((category) => (
            <span
              key={category}
              className={`font-mono text-[11px] ${categoryClassMap[category]}`}
            >
              {category}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-2 text-[15px] leading-relaxed">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-soft" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[12px] text-ink-soft">
          <span>{item.tools.join("  ·  ")}</span>

          {/* Code link - mobile: sits in normal flow after the tools, never overlaps text */}
          {item.repoUrl && (
            <a
              href={item.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View repository"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[12px] text-ink-soft transition-colors hover:border-ink hover:text-ink sm:hidden"
            >
              code
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Code link - desktop: absolute bottom right, as before */}
      {item.repoUrl && (
        <a
          href={item.repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="View repository"
          className="absolute bottom-6 right-6 hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[12px] text-ink-soft transition-colors hover:border-ink hover:text-ink sm:inline-flex"
        >
          code
          <Github size={16} />
        </a>
      )}
    </motion.article>
  );
}