import { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Interface pour représenter un projet avec les informations provenant de l'API
interface Project {
  id: number;
  projectNumber: number;
  title: string;
  date: string;
  techStack: string;
  description?: string;
  realisationTitle: string;
  realisationText: string;
  challengesTitle: string;
  challengesText: string;
  skillsTitle: string;
  skillsText: string;
  codeLinkText: string;
  codeLinkUrl: string;
  projectImages: {
    data: Array<{
      id: number;
      attributes: {
        name: string;
        alternativeText: string;
        formats: {
          large?: { url: string };
          medium?: { url: string };
          small?: { url: string };
        };
        url: string;
      };
    }>;
  };
}

// Composant principal qui affiche le contenu des projets
const ProjectsContent = () => {
  // State pour stocker la liste des projets récupérés via l'API
  const [projects, setProjects] = useState<Project[]>([]);

  // Récupération des données de projets à partir de l'API avec useEffect
  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await axios.get(
          "https://wr-portfolio-268f1ff6ebd6.herokuapp.com/api/api-projects-contents?populate=*"
        );
        setProjects(
          response.data.data.map((project: any) => project.attributes)
        );
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchProjectsData();
  }, []);

  // Affichage d'un message de chargement si les projets ne sont pas encore disponibles
  if (projects.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="font-mono">
      {/* Boucle pour afficher chaque projet sous forme de modal */}
      {projects.map((project, index) => (
        <Dialog key={index}>
          {/* Déclencheur du modal avec le titre et la date du projet */}
          <DialogTrigger asChild>
            <p className="cursor-pointer hover:text-brandSecondary dark:hover:text-brandPrimary transition duration-300 text-foreground dark:text-white p-4">
              <span className="font-mono text-2xl">{project.title}</span>{" "}
              <span className="font-normal font-mono">
                {project.date}/{project.techStack}
              </span>
            </p>
          </DialogTrigger>

          {/* Contenu du modal avec les détails du projet */}
          <DialogContent className="max-w-2xl max-h-[75vh] overflow-y-auto bg-background text-foreground">
            <DialogHeader>
              {/* Carousel des images du projet */}
              <Carousel className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <CarouselContent>
                  {project.projectImages.data.map((imageData, index) => {
                    const imageUrl = imageData.attributes.url;
                    return (
                      <CarouselItem key={index}>
                        <div className="p-1 relative w-full h-full h-auto">
                          <Image
                            src={imageUrl}
                            alt={imageData.attributes.alternativeText}
                            width={900}
                            height={900}
                            className="aspect-square object-contain w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10" />
                <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10" />
              </Carousel>
              <DialogTitle className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                {project.realisationTitle}
              </DialogTitle>
              <DialogDescription className="text-sm text-foreground dark:text-white">
                {project.description || "Pas de description disponible"}
              </DialogDescription>
            </DialogHeader>

            {/* Sections pour les défis, les compétences et le lien du code */}
            <div className="mt-4">
              <section className="mb-3">
                <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                  {project.challengesTitle}
                </h3>
                <p className="text-sm text-justify dark:text-white">
                  {project.challengesText}
                </p>
              </section>

              <section className="mb-3">
                <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                  {project.skillsTitle}
                </h3>
                <p className="text-sm text-justify dark:text-white">
                  {project.skillsText}
                </p>
              </section>

              <section className="mb-3">
                <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                  Lien vers le Code
                </h3>
                <p className="text-sm text-justify dark:text-white">
                  Vous pouvez consulter le code source complet sur GitHub :{" "}
                  <a
                    href={project.codeLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-brandSecondary dark:hover:text-brandPrimary transition duration-300 underline"
                  >
                    {project.codeLinkText}
                  </a>
                  .
                </p>
              </section>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ProjectsContent;
