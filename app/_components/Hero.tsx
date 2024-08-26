/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption">Willyam Ribière</h2>
        <h3>React Next.js Tailwind CSS Developper</h3>
        <p>
          Hello, welcome to my portfolio! I am a junior developer looking for an
          apprenticeship
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/PhotoWillyamRbr.svg"
          className="w-full h-auto max-w-xs"
          alt="willyam's picture"
        />
      </div>
    </Section>
  );
};
