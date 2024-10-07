import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Slot permet d'utiliser des éléments personnalisés comme enfants
import { cva, type VariantProps } from "class-variance-authority"; // cva permet de créer des variantes de classes

import { cn } from "@/lib/utils"; // Utilitaire pour combiner des classes CSS

// Configuration des différentes variantes de boutons avec class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none disabled:opacity-50", // Classes CSS de base communes à tous les boutons
  {
    // Définition des variantes disponibles
    variants: {
      variant: {
        default:
          "bg-primary text-brandPrimary-foreground shadow hover:bg-primary/90", // Style par défaut
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", // Variante destructive
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", // Variante outline avec bordures
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", // Variante secondaire
        ghost: "hover:bg-accent hover:text-accent-foreground", // Variante sans bordure ni fond
        link: "text-brandPrimary underline-offset-4 hover:underline", // Variante de type lien
      },
      size: {
        default: "h-9 px-4 py-2", // Taille par défaut
        sm: "h-8 rounded-md px-3 text-xs", // Petite taille
        lg: "h-10 rounded-md px-8", // Grande taille
        icon: "h-9 w-9", // Taille icône
      },
    },
    // Valeurs par défaut pour les variantes
    defaultVariants: {
      variant: "default", // Variante par défaut : "default"
      size: "default", // Taille par défaut : "default"
    },
  }
);

// Interface des props du bouton
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Propriétés standards pour un bouton HTML
    VariantProps<typeof buttonVariants> {
  // Ajout des props pour les variantes définies avec cva
  asChild?: boolean; // Propriété pour indiquer si le bouton doit être remplacé par un enfant personnalisé
}

// Composant Button avec prise en charge des variantes
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Si asChild est true, on utilise Slot sinon "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Application des variantes et classes supplémentaires
        ref={ref} // Référence pour le bouton
        {...props} // Props supplémentaires pour l'élément
      />
    );
  }
);

// Nom d'affichage pour le composant Button
Button.displayName = "Button";

export { Button, buttonVariants };
