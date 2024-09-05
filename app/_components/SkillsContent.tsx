import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript", level: "35%", color: "bg-[#FF6F00]" },
  { name: "React", level: "33%", color: "bg-[#FF9A13]" },
  { name: "TypeScript", level: "28%", color: "bg-[#FFA726]" },
  { name: "Next.js", level: "31%", color: "bg-[#FFCA28]" },
  { name: "TailWind", level: "30%", color: "bg-[#FFD54F]" },
];

const SkillsContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);

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
    <div id="skills-section" ref={skillsSectionRef} className="space-y-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="relative w-full h-6 rounded-full bg-transparent"
        >
          <div
            className={`absolute left-0 top-0 h-full rounded-full ${
              skill.color
            } text-black font-bold text-sm flex items-center justify-between px-3 skill-bar ${
              isVisible ? "active" : ""
            }`}
            style={{ width: isVisible ? getWidthStyle(skill.level) : "0%" }}
          >
            <span className="text-black font-medium">{skill.name}</span>
            <span className="ml-4">{skill.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;
