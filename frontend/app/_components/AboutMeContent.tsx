import axios from "axios";
import { useEffect, useState } from "react";

// Interface pour typage des données 'AboutMe'
interface AboutMe {
  aboutMe: string;
}

// Composant pour afficher le contenu de la section "À propos de moi"
const AboutMeContent = () => {
  const [aboutMe, setAboutMe] = useState<AboutMe | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer les données de l'API
  const fetchAboutMeContent = async () => {
    try {
      const response = await axios.get(
        "https://wr-portfolio-268f1ff6ebd6.herokuapp.com/api/api-about-me-contents"
      );
      setAboutMe(response.data.data[0].attributes); // Stocker les données dans le state
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      setError("Une erreur est survenue lors du chargement des informations.");
    }
  };

  // Hook pour exécuter la récupération des données lors du montage du composant
  useEffect(() => {
    fetchAboutMeContent();
  }, []);

  // Gestion de l'état de chargement ou d'erreur
  if (error) {
    return <div>{error}</div>; // Afficher un message d'erreur si nécessaire
  }

  if (!aboutMe) {
    return <div>Chargement...</div>; // Afficher un message de chargement pendant la récupération des données
  }

  // Affichage du contenu 'À propos de moi'
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

