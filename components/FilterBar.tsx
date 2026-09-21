"use client";

import { ExperienceCategory, ExperienceType } from "@/lib/types";

const CATEGORY_FILTERS: ExperienceCategory[] = [
  "Computer Science",
  "Data Science",
  "Finance",
  "Other",
];

const TYPE_FILTERS: ExperienceType[] = [
  "Employment",
  "Research",
  "Project",
  "Other",
];

const categoryClassMap: Record<ExperienceCategory, string> = {
  "Computer Science": "filter-category-cs",
  "Data Science": "filter-category-ds",
  Finance: "filter-category-finance",
  Other: "filter-category-other",
};

interface FilterBarProps {
  activeCategories: ExperienceCategory[];
  onCategoriesChange: (values: ExperienceCategory[]) => void;
  activeType: ExperienceType | "All";
  onTypeChange: (value: ExperienceType | "All") => void;
  categoryCounts: Record<ExperienceCategory, number>;
  typeCounts: Record<ExperienceType | "All", number>;
}

export function FilterBar({
  activeCategories,
  onCategoriesChange,
  activeType,
  onTypeChange,
  categoryCounts,
  typeCounts,
}: FilterBarProps) {
  const handleCategoryToggle = (category: ExperienceCategory) => {
    const updated = activeCategories.includes(category)
      ? activeCategories.filter((c) => c !== category)
      : [...activeCategories, category];
    onCategoriesChange(updated);
  };

  const handleToggleAll = () => {
    if (activeCategories.length === CATEGORY_FILTERS.length) {
      onCategoriesChange([]);
    } else {
      onCategoriesChange([...CATEGORY_FILTERS]);
    }
  };

  return (
    <div className="space-y-6 border-b border-line pb-6">
      {/* Role Type filter - single select with underline indicator */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-3">
          Role Type
        </p>
        <div
          role="tablist"
          aria-label="Filter by role type"
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          <button
            role="tab"
            aria-selected={activeType === "All"}
            onClick={() => onTypeChange("All")}
            className={`font-mono text-[13px] transition-colors border-b-2 pb-1 ${
              activeType === "All"
                ? "border-signal text-slate-700 dark:text-slate-200"
                : "border-transparent text-ink-soft hover:text-ink"
            }`}
          >
            All<span className="ml-1.5 text-[11px] opacity-60">({typeCounts.All})</span>
          </button>
          {TYPE_FILTERS.map((type) => {
            const isActive = activeType === type;
            return (
              <button
                key={type}
                role="tab"
                aria-selected={isActive}
                onClick={() => onTypeChange(type)}
                className={`font-mono text-[13px] transition-colors border-b-2 pb-1 ${
                  isActive
                    ? "border-signal text-slate-700 dark:text-slate-200"
                    : "border-transparent text-ink-soft hover:text-ink"
                }`}
              >
                {type}
                <span className="ml-1.5 text-[11px] opacity-60">
                  ({typeCounts[type]})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subject Area filter - multi-select with category-specific colors */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-3">
          Subject Area
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {/* All toggle - always rounded */}
          <button
            onClick={handleToggleAll}
            className={`rounded-full border px-3 py-1.5 font-mono text-[12px] transition-colors ${
              activeCategories.length === CATEGORY_FILTERS.length
                ? "filter-category-all"
                : "border-line text-ink-soft hover:border-ink hover:text-ink"
            }`}
          >
            All
          </button>

          {/* Individual categories - always rounded */}
          {CATEGORY_FILTERS.map((category) => {
            const isActive = activeCategories.includes(category);
            return (
              <button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                className={`rounded-full border px-3 py-1.5 font-mono text-[12px] transition-colors ${
                  isActive
                    ? categoryClassMap[category]
                    : "border-line text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}