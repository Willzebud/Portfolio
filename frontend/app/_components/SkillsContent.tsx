import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import axios from "axios";

// Import des icônes
import { FunnyIcon } from "./icons/FunnyIcon";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { NextJsIcon } from "./icons/NextJsIcone";
import { TailWindIcon } from "./icons/TailWindIcon";
import { StrapiIcon } from "./icons/StrapiIcon";

// Mapping des noms d'icônes avec les composants React correspondants
const iconMapping: Record<string, React.ElementType> = {
  FunnyIcon: FunnyIcon,
  JavaScriptIcon: JavaScriptIcon,
  ReactIcon: ReactIcon,
  TypeScriptIcon: TypeScriptIcon,
  NextJsIcon: NextJsIcon,
  TailWindIcon: TailWindIcon,
  StrapiIcon: StrapiIcon,
};

// Définir les couleurs spécifiques pour chaque compétence basée sur skillID
const colorsBySkillID: Record<
  number,
  { darkColor: string; lightColor: string }
> = {
  1: { darkColor: "#FF3D00", lightColor: "#690000" },
  2: { darkColor: "#FF6F00", lightColor: "#9E0000" },
  3: { darkColor: "#FF9A13", lightColor: "#B60101" },
  4: { darkColor: "#FFA726", lightColor: "#C80000" },
  5: { darkColor: "#FFCA28", lightColor: "#D60000" },
  6: { darkColor: "#FFD54F", lightColor: "#E00000" },
  7: { darkColor: "#FEE287", lightColor: "#ED0100" },
};

interface Skill {
  skillID: number;
  skillName: string;
  skillLevel: number;
  skillIcon: string;
}

const SkillsContent = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(
          "https://wr-portfolio-268f1ff6ebd6.herokuapp.com/api/api-skills-contents"
        );
        setSkills(response.data.data.map((skill: any) => skill.attributes));
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchSkills();
  }, []);

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

  const getWidthStyle = (level: number) => {
    return isVisible ? `${level}%` : "0%";
  };

  return (
    <div
      id="skills-section"
      ref={skillsSectionRef}
      className="mx-auto flex flex-col gap-6 w-full max-w-xl h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent pr-4"
    >
      {skills.map((skill) => {
        const IconComponent = iconMapping[skill.skillIcon];
        const colors = colorsBySkillID[skill.skillID] || {
          darkColor: "#FF6F00",
          lightColor: "#9E0000",
        };

        // Définir la classe d'animation seulement pour les icônes Fun & Humour et React
        const iconClassName =
          skill.skillName === "Fun & Humour" || skill.skillName === "React"
            ? "animate-spin"
            : "";

        const iconStyle =
          skill.skillName === "Fun & Humour" || skill.skillName === "React"
            ? { animationDuration: "10s" }
            : {};

        return (
          <div
            key={skill.skillName}
            className="flex items-center space-x-4 first:mt-2"
          >
            {/* Logo et nom */}
            <div className="flex items-center dark:text-white space-x-4 w-1/3 sm:w-1/4 pl-2 sm:pl-0">
              <span className="w-6 sm:w-8">
                {IconComponent && (
                  <IconComponent
                    size={30}
                    className={iconClassName}
                    style={iconStyle}
                  />
                )}
              </span>
              <span
                className={`font-medium ${
                  theme === "dark" ? "text-white" : "text-black"
                } text-sm sm:text-base`}
              >
                {skill.skillName}
              </span>
            </div>

            {/* Barre de progression */}
            <div className="relative w-2/3 sm:w-3/4 h-5 sm:h-6 rounded-full bg-transparent ml-2 mr-4">
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out`}
                style={{
                  backgroundColor:
                    theme === "dark" ? colors.darkColor : colors.lightColor,
                  width: getWidthStyle(skill.skillLevel),
                }}
              >
                <span
                  className={`text-sm font-bold flex justify-end pr-3 ${
                    theme === "dark" ? "text-black" : "text-white"
                  }`}
                >
                  {skill.skillLevel}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="pb-6"></div>
    </div>
  );
};

export default SkillsContent;
