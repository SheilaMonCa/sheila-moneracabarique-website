"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { Experience, ExperienceCategory, ExperienceType } from "@/lib/types";
import { FilterBar } from "./FilterBar";
import { ExperienceCard } from "./ExperienceCard";

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

// Parses strings like "May 2026", "Spring 2026", "2025", or "Present" into
// a comparable number (higher = more recent). Falls back gracefully for
// formats it doesn't recognize.
function parseDateValue(value: string): number {
  const v = value.trim().toLowerCase();
  if (v === "present") return Infinity;

  const monthYear = v.match(/^([a-z]{3,})\s+(\d{4})$/);
  if (monthYear) {
    const month = MONTHS[monthYear[1].slice(0, 3)] ?? 0;
    return parseInt(monthYear[2], 10) * 12 + month;
  }

  const seasonYear = v.match(/^(spring|summer|fall|autumn|winter)\s+(\d{4})$/);
  if (seasonYear) {
    const seasonMonth: Record<string, number> = {
      winter: 0, spring: 3, summer: 6, fall: 9, autumn: 9,
    };
    return parseInt(seasonYear[2], 10) * 12 + seasonMonth[seasonYear[1]];
  }

  const yearOnly = v.match(/(\d{4})/);
  if (yearOnly) return parseInt(yearOnly[1], 10) * 12;

  return -Infinity;
}

// Standard resume order: most recent start date first. Ties fall back to
// end date (an ongoing role outranks one that already ended).
function sortByRecency(a: Experience, b: Experience): number {
  const startDiff = parseDateValue(b.startDate) - parseDateValue(a.startDate);
  if (startDiff !== 0) return startDiff;
  return parseDateValue(b.endDate) - parseDateValue(a.endDate);
}

// An entry with no categories set is treated as belonging to "Other" for
// filtering/counting purposes — this never touches the data itself, so the
// card still shows no category pills for it.
function effectiveCategories(item: Experience): ExperienceCategory[] {
  return item.categories.length > 0 ? item.categories : ["Other"];
}

export function ExperienceList({ items }: { items: Experience[] }) {
  const [activeCategories, setActiveCategories] = useState<ExperienceCategory[]>(
    ["Computer Science", "Data Science", "Finance", "Other"]
  );
  const [activeType, setActiveType] = useState<ExperienceType | "All">("All");

  const sortedItems = useMemo(
    () => [...items].sort(sortByRecency),
    [items]
  );

  // Calculate counts for category filter
  const categoryCounts = useMemo(() => {
    return {
      "Computer Science": sortedItems.filter((i) =>
        effectiveCategories(i).includes("Computer Science")
      ).length,
      "Data Science": sortedItems.filter((i) =>
        effectiveCategories(i).includes("Data Science")
      ).length,
      Finance: sortedItems.filter((i) => effectiveCategories(i).includes("Finance")).length,
      Other: sortedItems.filter((i) => effectiveCategories(i).includes("Other")).length,
    } satisfies Record<ExperienceCategory, number>;
  }, [sortedItems]);

  // Calculate counts for type filter (respecting current category filter)
  const typeCounts = useMemo(() => {
    const categoryFiltered = sortedItems.filter((i) =>
      effectiveCategories(i).some((c) => activeCategories.includes(c))
    );

    return {
      All: categoryFiltered.length,
      Employment: categoryFiltered.filter((i) => i.type === "Employment")
        .length,
      Research: categoryFiltered.filter((i) => i.type === "Research").length,
      Project: categoryFiltered.filter((i) => i.type === "Project").length,
      Other: categoryFiltered.filter((i) => i.type === "Other").length,
    } satisfies Record<ExperienceType | "All", number>;
  }, [sortedItems, activeCategories]);

  // Filter items based on both category and type
  const filtered = useMemo(() => {
    return sortedItems.filter((item) => {
      const categoryMatch = effectiveCategories(item).some((c) =>
        activeCategories.includes(c)
      );
      const typeMatch = activeType === "All" || item.type === activeType;
      return categoryMatch && typeMatch;
    });
  }, [sortedItems, activeCategories, activeType]);

  return (
    <div>
      <FilterBar
        activeCategories={activeCategories}
        onCategoriesChange={setActiveCategories}
        activeType={activeType}
        onTypeChange={setActiveType}
        categoryCounts={categoryCounts}
        typeCounts={typeCounts}
      />

      <LayoutGroup>
        <div className="mt-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <p className="py-10 font-mono text-[13px] text-ink-soft">
          No entries found with the current filters.
        </p>
      )}
    </div>
  );
}