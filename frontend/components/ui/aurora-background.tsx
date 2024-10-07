"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

// Interface pour les props du composant AuroraBackground
interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode; // Enfants à afficher dans le composant
  showRadialGradient?: boolean; // Option pour afficher ou non un gradient radial
}

// Composant AuroraBackground
export const AuroraBackground = ({
  className, // Classes CSS supplémentaires
  children, // Contenu à afficher à l'intérieur du composant
  showRadialGradient = true, // Par défaut, le gradient radial est activé
  ...props // Autres props HTML standard
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col w-full h-full dark:bg-zinc-900 text-slate-950 transition-bg", // Arrière-plan sombre ou clair selon le mode
          className // Ajout de classes supplémentaires si nécessaire
        )}
        {...props} // Props supplémentaires passées au div
      >
        {/* Conteneur pour l'effet Aurora */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
                [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
                [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
                [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
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
                absolute -inset-[10px] opacity-50 will-change-transform
              `,

              // Ajout d'un gradient radial conditionnel
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>

        {/* Contenu rendu par le composant */}
        <div className="relative z-10 text-white">{children}</div>
      </div>
    </main>
  );
};
