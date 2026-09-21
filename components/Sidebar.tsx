"use client";

import Image from "next/image";
import { EducationItem, SkillGroup } from "@/lib/types";
import { Language } from "@/data/skills";

interface SidebarProps {
  photo?: string;
  photoAlt?: string;
  education: EducationItem[];
  skills: SkillGroup[];
  languages: Language[];
}

export function Sidebar({ photo, photoAlt, education, skills, languages }: SidebarProps) {
  return (
    <aside className="w-full md:w-80 border-r border-line px-8 py-10 overflow-y-auto" style={{ backgroundColor: 'var(--sidebar-bg)' }}>
      {/* Photo */}
      {photo && (
        <div className="mb-10 aspect-square overflow-hidden rounded-sm border-2 border-ink">
          <Image
            src={photo}
            alt={photoAlt || "Profile photo"}
            width={300}
            height={300}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>
      )}

      {/* Education */}
      <section className="mb-12">
        <h2 className="font-mono text-[12px] uppercase tracking-wide text-ink-soft mb-4 font-semibold">
          Education
        </h2>
        <div className="space-y-5">
          {education.map((item, i) => (
            <div key={i}>
              <p className="text-[14px] leading-snug font-display font-semibold">
                {item.degree}
              </p>
              <p className="mt-1.5 text-[13px] text-ink-soft">{item.school}</p>
              <p className="text-[12px] text-ink-soft">
                {item.startDate ? `${item.startDate} – ${item.graduationYear}` : item.graduationYear}
              </p>
              {(item.gpa || item.minors) && (
                <p className="mt-1 text-[12px] text-ink-soft">
                  {item.gpa && `GPA: ${item.gpa}`}
                  {item.gpa && item.minors && " · "}
                  {item.minors && `Minors: ${item.minors}`}
                </p>
              )}
              {item.honors && item.honors.length > 0 && (
                <ul className="mt-1.5 space-y-0.5">
                  {item.honors.map((honor, hi) => (
                    <li key={hi} className="text-[11px] leading-snug text-ink-soft">
                      {honor}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mb-12">
        <h2 className="font-mono text-[12px] uppercase tracking-wide text-ink-soft mb-4 font-semibold">
          Languages
        </h2>
        <div className="flex gap-6 justify-start">
          {languages.map((lang) => (
            <div key={lang.name} className="flex flex-col items-center gap-1">
              <span className={`fi fi-${lang.flag} w-6 h-4`}></span>
              <p className="text-[11px] text-ink-soft text-center">{lang.proficiency}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="font-mono text-[12px] uppercase tracking-wide text-ink-soft mb-4 font-semibold">
          Skills
        </h2>
        <div className="space-y-5">
          {skills.map((group) => (
            <div key={group.name}>
              <h3 className="text-[13px] font-semibold text-ink mb-2.5">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line/50 px-3 py-1.5 font-mono text-[12px] text-ink-soft bg-white/40 dark:bg-slate-700/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}