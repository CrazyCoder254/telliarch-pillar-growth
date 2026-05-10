import { ReactNode, useState, useEffect } from "react";
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
  /** When false, keeps the 3D flip even if user prefers reduced motion. Defaults to true. */
  respectReducedMotion?: boolean;
}

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
};

/**
 * Reusable 3D flip card.
 * - Front face: shown by default (typically icon + title).
 * - Back face: revealed on hover (desktop) or tap (mobile) — shows description and any actions.
 * - Respects prefers-reduced-motion by default: shows back content statically without animation.
 */
const FlipCard = ({
  front,
  back,
  className,
  height = "h-[340px]",
  tappable = true,
  forceFlipped,
  respectReducedMotion = true,
}: FlipCardProps) => {
  const [tapFlipped, setTapFlipped] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isReduced = prefersReducedMotion && respectReducedMotion;

  if (isReduced) {
    return (
      <div className={cn("w-full", height, className)}>
        {back}
      </div>
    );
  }

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
