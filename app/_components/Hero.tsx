import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import content from "@/app/_data/content.json";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const Code = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono hover:bg-accent/50 transition-colors border border-accent px-1 py-0.5 rounded -m-1",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export const Hero = () => {
  const { greeting, name } = content.hero;

  const words = [
    { text: "Développeur" },
    { text: "React" },
    { text: "Next.js" },
    { text: "Tailwind" },
    { text: "CSS" },
  ];

  return (
    <Section className="flex max-lg:flex-col items-center justify-between gap-6">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl">
          {greeting}{" "}
          <span className="text-brandSecondary dark:text-brandPrimary">
            {name}
          </span>
          .
        </h2>
        <h3 className="text-2xl font-caption">
          <Code className="inline-flex items-center justify-center">
            <div className="flex items-center justify-center">
              <TypewriterEffect
                words={words}
                className="text-2xl inline-block"
              />
            </div>
          </Code>
        </h3>

        <p className="text-base mt-2">
          Bienvenue sur mon{" "}
          <span className="font-medium text-brandSecondary dark:text-brandPrimary">
            portfolio
          </span>
          ! Je suis un{" "}
          <span className="font-medium text-brandSecondary dark:text-brandPrimary">
            développeur junior
          </span>{" "}
          à la recherche d'une{" "}
          <span className="font-medium text-brandSecondary dark:text-brandPrimary">
            alternance
          </span>
          .
        </p>
      </div>
      <div className="flex-shrink-0 mr-0">
        <img
          src="/PhotoWillyamRbr.svg"
          className="w-full h-auto max-w-40 max-md:w-56"
          alt="willyam's picture"
        />
      </div>
    </Section>
  );
};
