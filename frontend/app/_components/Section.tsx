import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

// Composant Section pour structurer les sections du site
export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    // Container de section avec des styles par défaut et des styles supplémentaires via className
    <section className={cn("max-w-5xl px-4 m-auto", props.className)}>
      {props.children}
    </section>
  );
};
