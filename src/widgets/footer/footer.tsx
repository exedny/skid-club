"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DiscordLogoIcon,
  GithubLogoIcon,
  TelegramLogoIcon,
} from "@phosphor-icons/react";
import { Button } from "@/shared/ui/button";

export function Footer() {
  return (
    <footer className="flex items-center flex-col gap-y-4 px-4 py-2 border-t">
      <Button variant="link" asChild className="mb-2">
        <Link href="/">
          <Image
            src="/skid-club.svg"
            alt="Skid Club Logo"
            width={70}
            height={70}
            priority
          />
        </Link>
      </Button>

      <ul className="flex items-center gap-3">
        <li>
          <Button variant="link" asChild>
            <Link href="https://github.com/exedny/skid-club" target="_blank">
              <GithubLogoIcon size={24} className="mr-2" />
              Github
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <Link href="https://github.com/exedny/skid-club" target="_blank">
              <TelegramLogoIcon size={24} className="mr-2" />
              Telegram
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <Link href="https://github.com/exedny/skid-club" target="_blank">
              <DiscordLogoIcon size={24} className="mr-2" />
              Discord
            </Link>
          </Button>
        </li>
      </ul>
    </footer>
  );
}
