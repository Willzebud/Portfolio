import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Assurez-vous que le chemin d'importation est correct

const ProjectsContent = () => {
  return (
    <div className="font-mono">
      {/* Utilisation de la modale */}
      <Dialog>
        {/* Élément cliquable avec effet hover */}
        <DialogTrigger asChild>
          <p className="cursor-pointer hover:text-primary transition duration-300">
            Application Web de location immobilière Juillet 2024/React/React
            Router/Json/Node.js
          </p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Détails du Projet</DialogTitle>
            <DialogDescription>
              Ce projet est une application Web de location immobilière
              développée en utilisant React, React Router, Node.js, et d'autres
              technologies front-end et back-end.
            </DialogDescription>
          </DialogHeader>
          {/* Contenu supplémentaire de la modale */}
          <div>
            <p>
              Elle permet aux utilisateurs de rechercher, de filtrer et de
              réserver des biens immobiliers directement en ligne.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsContent;
