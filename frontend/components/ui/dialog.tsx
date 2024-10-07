"use client";

import * as React from "react"; // Importation des fonctionnalités React.
import * as DialogPrimitive from "@radix-ui/react-dialog"; // Importation de la bibliothèque Dialog de Radix UI.
import { Cross2Icon } from "@radix-ui/react-icons"; // Icône de croix pour fermer la boîte de dialogue.

import { cn } from "@/lib/utils"; // Fonction utilitaire pour gérer les classes CSS conditionnelles.

const Dialog = DialogPrimitive.Root; // Composant racine du dialogue.
const DialogTrigger = DialogPrimitive.Trigger; // Déclencheur pour ouvrir la boîte de dialogue.
const DialogPortal = DialogPrimitive.Portal; // Portail pour rendre le contenu du dialogue dans le DOM.
const DialogClose = DialogPrimitive.Close; // Bouton pour fermer la boîte de dialogue.

// Composant pour l'overlay de la boîte de dialogue, qui obscurcit l'arrière-plan.
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:rounded-md rounded-md",
      className
    )}
    {...props} // Props supplémentaires, le cas échéant.
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName; // Nom d'affichage pour faciliter le débogage.

// Composant pour le contenu de la boîte de dialogue.
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    {" "}
    {/* Portail pour rendre le contenu en dehors de la hiérarchie DOM */}
    <DialogOverlay /> {/* Overlay pour l'arrière-plan */}
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background sm:p-4 p-12 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children} {/* Contenu à l'intérieur du dialogue */}
      {/* Bouton pour fermer la boîte de dialogue */}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-offset-0 text-brandSecondary dark:text-brandPrimary">
        <Cross2Icon className="h-4 w-4" /> {/* Icône de croix */}
        <span className="sr-only">Close</span>{" "}
        {/* Texte invisible pour l'accessibilité */}
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

// Composant pour l'en-tête du dialogue (titre, etc.).
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left", // Disposition et style de l'en-tête
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader"; // Nom d'affichage pour l'en-tête.

// Composant pour le pied de page du dialogue (actions, boutons, etc.).
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", // Disposition et style du pied de page
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter"; // Nom d'affichage pour le pied de page.

// Composant pour le titre du dialogue.
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight", // Style du titre
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName; // Nom d'affichage pour le titre.

// Composant pour la description du dialogue.
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // Style de la description
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName; // Nom d'affichage pour la description.

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
