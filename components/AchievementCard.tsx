import Image from "next/image";
import { ImageOff } from "lucide-react";
import { Achievement } from "@/lib/types";

interface AchievementCardProps {
  item: Achievement;
}

export function AchievementCard({ item }: AchievementCardProps) {
  return (
    <article className="grid grid-cols-1 gap-4 border-b border-line py-6 sm:grid-cols-[6rem_1fr]">
      {/* Left: Date and photo */}
      <div className="flex flex-col gap-4">
        <div className="font-mono text-[12px] text-ink-soft font-semibold">
          {item.year}
        </div>

        {/* Photo slot */}
        {item.photo && (
          <div className="w-24 h-24 overflow-hidden rounded-sm border border-line">
            <Image
              src={item.photo}
              alt={`${item.title} photo or certificate`}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Right: Title, body, and context */}
      <div>
        <h3 className="font-display text-lg leading-snug">{item.title}</h3>
        <p className="mt-0.5 font-mono text-[12px] text-ink-soft">
          {item.awardingBody}
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
          {item.context}
        </p>
      </div>
    </article>
  );
}