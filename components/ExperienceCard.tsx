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
      <div className="font-mono text-[12px] text-ink-soft">
        <div className="font-semibold text-ink">{item.startDate} -</div>
        <div className="font-semibold text-ink">{item.endDate}</div>
        <div className="mt-2">{item.location}</div>
        {/* Type pill - neutral gray for all types */}
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

        <div className="mt-2 flex flex-wrap gap-2">
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

        <div className="mt-4 font-mono text-[12px] text-ink-soft">
          {item.tools.join("  ·  ")}
        </div>
      </div>

      {/* GitHub link in bottom right */}
      {item.repoUrl && (
        <a
          href={item.repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="View repository"
          className="absolute bottom-7 right-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line font-mono text-[12px] text-ink-soft transition-colors hover:text-ink hover:border-ink sm:bottom-6"
        >
          code
          <Github size={16} />
        </a>
      )}
    </motion.article>
  );
}