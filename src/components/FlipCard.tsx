import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  height?: string;
  /** When true, also flip on tap (for mobile). Defaults to true. */
  tappable?: boolean;
  /** Forced flip state (overrides hover/tap). */
  forceFlipped?: boolean;
}

/**
 * Reusable 3D flip card.
 * - Front face: shown by default (typically icon + title).
 * - Back face: revealed on hover (desktop) or tap (mobile) — shows description and any actions.
 */
const FlipCard = ({
  front,
  back,
  className,
  height = "h-[340px]",
  tappable = true,
  forceFlipped,
}: FlipCardProps) => {
  const [tapFlipped, setTapFlipped] = useState(false);
  const isFlipped = forceFlipped ?? tapFlipped;

  return (
    <div className={cn("group perspective-1000 w-full", height, className)}>
      <div
        className={cn(
          "relative w-full h-full preserve-3d transition-transform duration-700 ease-in-out",
          "group-hover:rotate-y-180",
          isFlipped && "rotate-y-180"
        )}
        onClick={() => tappable && setTapFlipped((p) => !p)}
      >
        <div className="absolute inset-0 backface-hidden">{front}</div>
        <div className="absolute inset-0 backface-hidden rotate-y-180">{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;
