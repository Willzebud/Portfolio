import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./GithubIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold card-foreground">willyam.com</h1>
        <div className="flex-1" />
        <ul>
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
            href="https://github.com/Willzebud/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
