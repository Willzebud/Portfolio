import axios from "axios";
import { useEffect, useState } from "react";

interface AboutMe {
  aboutMe: string;
}

const AboutMeContent = () => {
  const [aboutMe, setAboutMe] = useState<AboutMe | null>(null);

  useEffect(() => {
    const fetchAboutMeData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/api-about-me-contents"
        );
        setAboutMe(response.data.data[0].attributes);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchAboutMeData();
  }, []);

  if (!aboutMe) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="font-mono text-foreground flex items-center justify-center h-96">
      <div className="max-w-2xl text-justify p-2 sm:p-0">
        {aboutMe.aboutMe.split("\n").map((line, index) => (
          <p key={index} className="sm:mb-4 mb-2 dark:text-white">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeContent;
