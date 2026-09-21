import { achievements } from "@/data/achievements";
import { AchievementColumn } from "@/components/AchievementColumn";

export default function AchievementsPage() {
  const academic = achievements.filter((a) => a.track === "academic");
  const athletic = achievements.filter((a) => a.track === "athletic");

  return (
    <div className="mx-auto max-w-board px-6 py-14">
      <div className="mb-12">
        <h1 className="font-display text-4xl italic leading-tight sm:text-5xl">
          Achievements
        </h1>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-soft">
          The academic honors and athletic results I&apos;m most proud of.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
        <AchievementColumn
          heading="Academic & Fellowships"
          track="academic"
          items={academic}
        />
        <AchievementColumn
          heading="Athletics & High Performance"
          track="athletic"
          items={athletic}
        />
      </div>
    </div>
  );
}