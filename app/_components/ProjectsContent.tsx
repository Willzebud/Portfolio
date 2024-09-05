import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import content from "@/app/_data/content.json";

const ProjectsContent = () => {
  const { project1 } = content.projects;

  return (
    <div className="font-mono">
      <Dialog>
        <DialogTrigger asChild>
          <p className="cursor-pointer hover:text-brandSecondary dark:hover:text-brandPrimary transition duration-300 text-foreground">
            <span className="font-mono text-3xl">{project1.title}</span>{" "}
            <span className="font-normal font-mono">
              {project1.date}/{project1.techStack}
            </span>
          </p>
        </DialogTrigger>
        <DialogContent className="max-w-md max-h-[75vh] overflow-y-auto bg-background text-foreground">
          <DialogHeader>
            <DialogTitle className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
              {project1.realisationTitle}
            </DialogTitle>
            <DialogDescription className="text-sm text-foreground">
              {project1.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                {project1.realisationTitle}
              </h3>
              <p className="text-sm text-justify">{project1.realisationText}</p>
            </section>
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                {project1.challengesTitle}
              </h3>
              <p className="text-sm text-justify">{project1.challengesText}</p>
            </section>
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                {project1.skillsTitle}
              </h3>
              <p className="text-sm text-justify">{project1.skillsText}</p>
            </section>
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandSecondary dark:text-brandPrimary">
                Lien vers le Code
              </h3>
              <p className="text-sm text-justify">
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
