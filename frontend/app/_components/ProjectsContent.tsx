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
import projectsContent from "@/app/_data/projectsContent.json";
import Image from "next/image";

const ProjectsContent = () => {
  const { project1 } = projectsContent.projects;

  return (
    <div className="font-mono">
      {/* Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <p className="cursor-pointer hover:text-brandSecondary dark:hover:text-brandPrimary transition duration-300 text-foreground dark:text-white p-4">
            <span className="font-mono text-3xl">{project1.title}</span>{" "}
            <span className="font-normal font-mono">
              {project1.date}/{project1.techStack}
            </span>
          </p>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[75vh] overflow-y-auto bg-background text-foreground">
          <DialogHeader>
            {/* Carousel */}
            <Carousel className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <CarouselContent>
                {project1.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 relative w-full h-full h-auto">
                      {" "}
                      {/* position relative pour le layout "fill" */}
                      <Image
                        src={image.url}
                        alt={image.alt}
                        layout="responsive"
                        width={900}
                        height={900}
                        className="aspect-square object-contain w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10" />
              <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10" />
            </Carousel>
            <DialogTitle className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
              {project1.realisationTitle}
            </DialogTitle>
            <DialogDescription className="text-sm text-foreground dark:text-white">
              {project1.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                {project1.challengesTitle}
              </h3>
              <p className="text-sm text-justify dark:text-white">
                {project1.challengesText}
              </p>
            </section>
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                {project1.skillsTitle}
              </h3>
              <p className="text-sm text-justify dark:text-white">
                {project1.skillsText}
              </p>
            </section>
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                Lien vers le Code
              </h3>
              <p className="text-sm text-justify dark:text-white">
                Vous pouvez consulter le code source complet sur GitHub :{" "}
                <a
                  href={project1.codeLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-brandSecondary dark:hover:text-brandPrimary transition duration-300 underline"
                >
                  {project1.codeLinkText}
                </a>
                .
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsContent;
