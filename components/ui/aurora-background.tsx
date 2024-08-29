"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col w-full h-full dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_7%,var(--transparent)_10%,var(--transparent)_12%,rgba(255,255,255,0.5)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_7%,var(--transparent)_10%,var(--transparent)_12%,rgba(0,0,0,0.5)_16%)]
            [--aurora:repeating-linear-gradient(100deg,rgba(177,38,70,1)_10%,rgba(200,55,85,0.9)_20%,rgba(220,60,95,0.8)_30%,rgba(240,65,105,0.7)_40%,rgba(255,70,115,0.6)_50%,rgba(177,38,70,0.5)_60%,rgba(200,55,85,0.4)_70%,rgba(220,60,95,0.3)_80%,rgba(240,65,105,0.2)_90%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {/* Assure-toi que le texte a une couleur blanche */}
        <div className="relative z-10 text-white p-4">{children}</div>
      </div>
    </main>
  );
};
