/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono hover:bg-accent/50 transition-colors border border-accent px-1 py-0.5 rounded -m-1",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-center justify-between gap-6">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl">
          Hello! I&apos;m <span className="text-primary">Willyam</span>.
        </h2>
        <h3 className="text-3xl font-caption">
          <Code className="inline-flex items-center">
            React Next.js Tailwind CSS Developper
          </Code>
        </h3>
        <p className="text-base mt-2">
          Welcome to my <span className="text-primary">portfolio</span>! I am a{" "}
          <span className="text-primary">junior developer</span> looking for an{" "}
          <span className="text-primary">apprenticeship</span>.
        </p>
      </div>
      <div className="flex-shrink-0 mr-0">
        {" "}
        {/* Changer ml-auto en mr-0 pour aligner correctement */}
        <img
          src="/PhotoWillyamRbr.svg"
          className="w-full h-auto max-w-40 max-md:w-56"
          alt="willyam's picture"
        />
      </div>
    </Section>
  );
};
