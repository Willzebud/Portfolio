import { ComponentPropsWithoutRef } from "react";
import { useTheme } from "next-themes";

export const StrapiIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  const { theme } = useTheme();

  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <title>Strapi</title>
      <g>
        <rect
          width="256"
          height="256"
          fill={theme === "dark" ? "#FFFFFF" : "#000000"}
        />
        <path
          d="M176.64,77.6532528 L90.4527698,77.6532528 L90.4527698,121.6 L134.4,121.6 L134.4,165.546264 L178.346264,165.546264 L178.346264,79.36 C178.346264,78.4173887 177.581887,77.6532528 176.64,77.6532528 Z"
          fill={theme === "dark" ? "#000000" : "#FFFFFF"}
        ></path>
        <rect
          fill={theme === "dark" ? "#000000" : "#FFFFFF"}
          x="132.692528"
          y="121.6"
          width="1.70666264"
          height="1.70666264"
        ></rect>
        <path
          d="M90.4527698,121.6 L132.692528,121.6 C133.635623,121.6 134.4,122.364377 134.4,123.306264 L134.4,165.546264 L92.159517,165.546264 C91.2169057,165.546264 90.4527698,164.783094 90.4527698,163.84 L90.4527698,121.6 Z"
          fill={theme === "dark" ? "#000000" : "#FFFFFF"}
        ></path>
        <path
          d="M134.4,165.546264 L178.346264,165.546264 L135.856302,208.036226 C135.318943,208.573585 134.4,208.193208 134.4,207.43366 L134.4,165.546264 Z"
          fill={theme === "dark" ? "#000000" : "#FFFFFF"}
        ></path>
        <path
          d="M90.4526491,121.6 L48.5660981,121.6 C47.8059472,121.6 47.4252075,120.680815 47.9626868,120.143215 L90.4526491,77.6532528 L90.4526491,121.6 Z"
          fill={theme === "dark" ? "#000000" : "#FFFFFF"}
        ></path>
      </g>
    </svg>
  );
};
