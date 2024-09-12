"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { ModeToggle } from "./ModeToggle";
import * as Dialog from "@radix-ui/react-dialog";
import ContactForm from "@/components/ui/contactForm";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-background">
      <Section className="flex items-center justify-between">
        <h1 className="text-lg font-bold card-foreground font-caption">
          Willyam Portfolio
        </h1>
        <ul className="flex items-center gap-2">
          <ModeToggle />
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

          {/* Ajout de la modal le formulaire de contact */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-6 px-1"
                )}
              >
                Contact
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
              <Dialog.Content className="fixed bg-background text-foreground p-6 max-w-lg w-full rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border dark:border-white">
                <Dialog.Title className="text-lg font-bold mb-4 text-brandSecondary dark:text-brandPrimary text-center">
                  Contactez-moi
                </Dialog.Title>
                <ContactForm />
                <Dialog.Close className="absolute top-4 right-4">
                  X
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </ul>
      </Section>
    </header>
  );
};
