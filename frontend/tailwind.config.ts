import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// Configuration Tailwind CSS pour le projet
const config: Config = {
  // Mode sombre activé via la classe "dark"
  darkMode: ["class"],

  // Définit les chemins où Tailwind doit rechercher les classes CSS à générer
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  // Préfixe CSS vide, il n'y aura donc pas de préfixe ajouté aux classes générées
  prefix: "",

  // Thème personnalisé pour le projet
  theme: {
    // Configuration du conteneur pour centrer les éléments et ajouter un padding
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    // Polices personnalisées définies à l'aide de variables CSS
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
      mono: ["var(--font-geist-mono)"],
      caption: ["var(--font-caption)"],
    },

    // Extension des couleurs et autres styles
    extend: {
      colors: {
        // Couleurs personnalisées basées sur des variables CSS
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        custom: {
          DEFAULT: "#CFCFCF",
        },
        brandPrimary: {
          DEFAULT: "#FF9A13",
        },
        brandSecondary: {
          DEFAULT: "#9E0000",
        },
      },

      // Définition des rayons de bordure (border-radius)
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Définition des animations et keyframes
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // Plugins supplémentaires pour Tailwind
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

// Plugin personnalisé pour ajouter les couleurs en tant que variables CSS globales
function addVariablesForColors({ addBase, theme }: any) {
  // Récupère toutes les couleurs du thème Tailwind
  let allColors = flattenColorPalette(theme("colors"));

  // Convertit les couleurs en variables CSS
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // Ajoute les nouvelles variables CSS dans la racine (root) du document
  addBase({
    ":root": newVars,
  });
}

export default config;
