import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectsContent = () => {
  return (
    <div className="font-mono">
      {/* Utilisation de la modale */}
      <Dialog>
        {/* Élément cliquable avec effet hover */}
        <DialogTrigger asChild>
          <p className="cursor-pointer hover:text-brandPrimary transition duration-300">
            <span className="font-mono text-3xl">Kasa</span>{" "}
            <span className="font-normal font-mono">
              Jui.2024/React/React Router/Node.js
            </span>
          </p>
        </DialogTrigger>
        <DialogContent className="max-w-md max-h-[75vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-semibold text-base text-brandPrimary">
              Détails du Projet
            </DialogTitle>
            <DialogDescription className="text-white text-sm">
              Ce projet est une application Web de location immobilière
              développée en utilisant React, React Router, et Node.js.
            </DialogDescription>
          </DialogHeader>
          {/* Contenu supplémentaire de la modale */}
          <div className="mt-4 text-white">
            {/* Description du Projet */}
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandPrimary">
                Description de la Réalisation
              </h3>
              <p className="text-sm text-justify">
                Dans ce projet, j'ai implémenté le front-end d'une application
                de location immobilière en utilisant React et React Router pour
                créer une interface utilisateur moderne et réactive. Le projet
                s'appuie sur des données simulées extraites d'un fichier JSON et
                se concentre exclusivement sur le développement front-end, en se
                basant sur des maquettes fournies.
              </p>
            </section>

            {/* Problématiques Rencontrées */}
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandPrimary">
                Problématiques Rencontrées et Solutions
              </h3>
              <p className="text-sm text-justify">
                Une des principales problématiques a été de gérer le routage
                entre les différentes pages de l'application. Pour surmonter ce
                défi, j'ai utilisé React Router, ce qui m'a permis de configurer
                facilement la navigation et de gérer les états des composants
                liés à la navigation. De plus, j'ai dû simuler des données
                extraites d'un fichier JSON, ce qui m'a appris à manipuler et
                afficher des données dynamiques dans une application React.
              </p>
            </section>

            {/* Compétences Développées */}
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandPrimary">
                Compétences Développées
              </h3>
              <p className="text-sm text-justify">
                Ce projet m'a permis de renforcer mes compétences en
                développement front-end avec React et React Router, ainsi que
                d'acquérir une meilleure maîtrise de Node.js pour exécuter du
                code JavaScript en dehors du navigateur. J'ai également utilisé
                SASS pour gérer le CSS et j'ai implémenté des animations CSS
                pour améliorer l'expérience utilisateur.
              </p>
            </section>

            {/* Lien vers le Code */}
            <section className="mb-3">
              <h3 className="font-semibold text-base text-brandPrimary">
                Lien vers le Code
              </h3>
              <p className="text-sm text-justify">
                Vous pouvez consulter le code source complet sur GitHub :{" "}
                <a
                  href="https://github.com/Willzebud/application_web_location_immobiliere_React"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-brandPrimary transition duration-300 underline"
                >
                  Voir le projet sur GitHub
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
