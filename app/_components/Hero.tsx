/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl text-primary">Willyam Ribière</h2>
        <h3 className="text-3xl font-caption">
          React Next.js Tailwind CSS Developper
        </h3>
        <p>
          Hello, welcome to my <span className="text-primary">portfolio</span> !
          <br />I am a <span className="text-primary">
            junior developer
          </span>{" "}
          looking for an <span className="text-primary">apprenticeship</span>
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/PhotoWillyamRbr.svg"
          className="w-full h-auto max-w-40"
          alt="willyam's picture"
        />
      </div>
    </Section>
  );
};
