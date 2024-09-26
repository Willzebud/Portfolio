"use client";

import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import axios from "axios";

interface HeroContent {
  greeting: string;
  name: string;
  title: string;
  message: string;
  profilPicture: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

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
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const response = await axios.get(
          "https://wr-portfolio-268f1ff6ebd6.herokuapp.com/api/api-hero-contents?populate=*"
        );
        setHeroContent(response.data.data[0].attributes);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchHeroContent();
  }, []);

  if (!heroContent) {
    return <div>Chargement...</div>;
  }

  const words = heroContent.title.split(" ").map((word) => ({ text: word }));

  const styledMessage = (message: string) => {
    const keywords = ["portfolio", "développeur junior", "alternance"];
    let formattedMessage = message;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      formattedMessage = formattedMessage.replace(
        regex,
        `<span class="font-bold text-brandSecondary dark:text-brandPrimary">$1</span>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: formattedMessage }} />;
  };

  return (
    <Section className="flex max-lg:flex-col items-center justify-between gap-6">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl dark:text-white">
          {heroContent.greeting}{" "}
          <span className="text-brandSecondary dark:text-brandPrimary">
            {heroContent.name}
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

        <p className="text-base mt-2 dark:text-white">
          {styledMessage(heroContent.message)}
        </p>
      </div>
      <div className="flex-shrink-0 mr-0">
        <Image
          src={heroContent.profilPicture.data.attributes.url}
          width={160}
          height={160}
          className="w-full h-auto max-w-40 max-md:w-56"
          alt="willyam's picture"
        />
      </div>
    </Section>
  );
};
