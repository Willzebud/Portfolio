import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { NextJsIcon } from "./icons/NextJsIcone";
import { TailWindIcon } from "./icons/TailWindIcon";
import { StrapiIcon } from "./icons/StrapiIcon";

const skills = [
  {
    name: "JavaScript",
    level: "35%",
    darkColor: "bg-[#FF6F00]",
    lightColor: "bg-[#9E0000]",
    icon: <JavaScriptIcon size={30} />,
  },
  {
    name: "React",
    level: "33%",
    darkColor: "bg-[#FF9A13]",
    lightColor: "bg-[#B60101]",
    icon: (
      <ReactIcon
        size={30}
        className="animate-spin"
        style={{ animationDuration: "10s" }}
      />
    ),
  },
  {
    name: "TypeScript",
    level: "28%",
    darkColor: "bg-[#FFA726]",
    lightColor: "bg-[#C80000]",
    icon: <TypeScriptIcon size={30} />,
  },
  {
    name: "Next.js",
    level: "31%",
    darkColor: "bg-[#FFCA28]",
    lightColor: "bg-[#D60000]",
    icon: <NextJsIcon size={30} />,
  },
  {
    name: "TailWind",
    level: "30%",
    darkColor: "bg-[#FFD54F]",
    lightColor: "bg-[#E00000]",
    icon: <TailWindIcon size={30} />,
  },
  {
    name: "Strapi",
    level: "23%",
    darkColor: "bg-[#FEE287]",
    lightColor: "bg-[#ED0100]",
    icon: <StrapiIcon size={30} />,
  },
];

const SkillsContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "text-white" : "text-black";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getWidthStyle = (level: string) => {
    return isVisible ? level : "0%";
  };

  return (
    <div
      id="skills-section"
      ref={skillsSectionRef}
      className="mx-auto flex flex-col gap-8 w-full max-w-xl"
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center space-x-4 first:mt-2"
        >
          {/* Logo et nom */}
          <div className="flex items-center dark:text-white space-x-2 w-1/3 sm:w-1/4">
            {" "}
            {/* Ajustement des tailles */}
            <span className={`${textColor} w-6 sm:w-8`}>{skill.icon}</span>
            <span className={`font-medium ${textColor} text-sm sm:text-base`}>
              {skill.name}
            </span>
          </div>

          {/* Barre de progression */}
          <div className="relative w-2/3 sm:w-3/4 h-5 sm:h-6 rounded-full bg-transparent ml-2">
            <div
              className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out ${
                theme === "dark" ? skill.darkColor : skill.lightColor
              } text-base font-bold text-sm flex items-center justify-between px-3 skill-bar ${
                isVisible ? "active" : ""
              } ${theme === "dark" ? "text-black" : "text-white"}`}
              style={{ width: getWidthStyle(skill.level) }}
            >
              <span className="ml-auto">{skill.level}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;
