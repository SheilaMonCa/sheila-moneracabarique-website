import { Achievement, AchievementTrack } from "@/lib/types";
import { AchievementCard } from "./AchievementCard";

interface AchievementColumnProps {
  heading: string;
  track: AchievementTrack;
  items: Achievement[];
}

export function AchievementColumn({
  heading,
  items,
}: AchievementColumnProps) {
  return (
    <section>
      <h2 className="font-display text-2xl italic">{heading}</h2>
      <div className="mt-4">
        {items.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}