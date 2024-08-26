import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold card-foreground font-caption">
          willyam.com
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/willyamribiere/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://github.com/Willzebud/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href=""
            className={cn(buttonVariants({ variant: "outline" }), "h-6 px-1")}
          >
            Contact
          </Link>
        </ul>
      </Section>
    </header>
  );
};
