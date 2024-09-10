import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { NextJsIcon } from "./icons/NextJsIcone";
import { TailWindIcon } from "./icons/TailWindIcon";

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
    icon: <ReactIcon size={30} />,
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
];

const SkillsContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

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
    if (window.innerWidth <= 768) {
      return "auto";
    }
    return level;
  };

  return (
    <div
      id="skills-section"
      ref={skillsSectionRef}
      className="flex flex-col gap-8"
    >
      {skills.map((skill, index) => (
        <div key={skill.name} className="flex items-center space-x-4">
          {/* Logo et nom */}
          <div className="flex items-center space-x-2 w-1/6">
            <span className={theme === "dark" ? "text-white" : "text-black"}>
              {skill.icon}
            </span>
            <span
              className={`font-medium ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {skill.name}
            </span>
          </div>

          {/* Barre de progression */}
          <div className="relative w-3/4 h-6 rounded-full bg-transparent">
            <div
              className={`absolute left-0 top-0 h-full rounded-full ${
                theme === "dark" ? skill.darkColor : skill.lightColor
              } text-base font-bold text-sm flex items-center justify-between px-3 skill-bar ${
                isVisible ? "active" : ""
              } ${theme === "dark" ? "text-black" : "text-white"}`}
              style={{ width: isVisible ? getWidthStyle(skill.level) : "0%" }}
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
