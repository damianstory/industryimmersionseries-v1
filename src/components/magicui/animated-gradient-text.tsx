"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
}: AnimatedGradientTextProps) {
  return (
    <>
      <style jsx global>{`
        @keyframes gradient-animation {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
      `}</style>
      <span
        className={cn(
          "inline-block bg-gradient-to-r bg-clip-text text-transparent",
          className
        )}
        style={{
          backgroundImage: `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
          backgroundSize: "200% 200%",
          animation: `gradient-animation ${3 / speed}s ease-in-out infinite`,
        }}
      >
        {children}
      </span>
    </>
  );
} 