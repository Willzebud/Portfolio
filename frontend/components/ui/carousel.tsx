"use client";

import * as React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"; // Icônes de flèche pour navigation
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"; // Importation d'Embla pour le carousel
import { cn } from "@/lib/utils"; // Utilitaire pour combiner des classes CSS
import { Button } from "@/components/ui/button"; // Importation du composant Button personnalisé

// Types pour l'API et les paramètres d'Embla
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

// Props du Carousel
type CarouselProps = {
  opts?: CarouselOptions; // Options de configuration
  plugins?: CarouselPlugin; // Plugins pour Embla
  orientation?: "horizontal" | "vertical"; // Orientation (horizontal ou vertical)
  setApi?: (api: CarouselApi) => void; // Fonction pour récupérer l'API du carousel
};

// Contexte pour partager l'état du carousel à d'autres composants
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]; // Référence du carousel
  api: ReturnType<typeof useEmblaCarousel>[1]; // API d'Embla
  scrollPrev: () => void; // Fonction pour défiler vers l'arrière
  scrollNext: () => void; // Fonction pour défiler vers l'avant
  canScrollPrev: boolean; // Indicateur si on peut défiler vers l'arrière
  canScrollNext: boolean; // Indicateur si on peut défiler vers l'avant
} & CarouselProps;

// Création du contexte du carousel
const CarouselContext = React.createContext<CarouselContextProps | null>(null);

// Hook personnalisé pour accéder au contexte du carousel
function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />"); // Erreur si le hook est utilisé hors du contexte
  }

  return context;
}

// Composant principal Carousel
const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    // Fonction appelée quand la sélection change dans le carousel
    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    // Défilement vers l'arrière
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    // Défilement vers l'avant
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    // Gestion du clavier (flèches gauche et droite)
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    // Configuration de l'API quand elle est disponible
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    // Mise à jour du défilement disponible à chaque sélection
    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect); // Réinit sur changement d'état
      api.on("select", onSelect); // Sélection d'un élément
      return () => {
        api?.off("select", onSelect); // Nettoyage
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

// Contenu du carousel (les slides)
const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

// Élément (slide) du carousel
const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

// Bouton pour défiler vers l'arrière
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        "bg-brandSecondary text-white",
        "dark:bg-brandPrimary dark:text-background",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeftIcon className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

// Bouton pour défiler vers l'avant
const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        "bg-brandSecondary text-white",
        "dark:bg-brandPrimary dark:text-background",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRightIcon className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
