"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationName = "fade-up" | "fade-in" | "slide-left" | "slide-right";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  animation?: AnimationName;
  delayMs?: number;
  once?: boolean;
};

const animationClassMap: Record<AnimationName, string> = {
  "fade-up": "translate-y-6 opacity-0",
  "fade-in": "opacity-0",
  "slide-left": "translate-x-6 opacity-0",
  "slide-right": "-translate-x-6 opacity-0",
};

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  delayMs = 0,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : animationClassMap[animation],
        className
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
