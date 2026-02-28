"use client";

import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/input-group";
import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b">
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

      <div className="flex items-center gap-3">
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <MagnifyingGlassIcon size={24} />
          </InputGroupAddon>
        </InputGroup>

        <Separator orientation="vertical" />

        <ul className="flex items-center gap-3">
          <li>
            <Button variant="outline">Sign In</Button>
          </li>
          <li>
            <Button variant="default">Sign Up</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
