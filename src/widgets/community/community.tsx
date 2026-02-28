import { Button } from "@/shared/ui/button";
import { TypographyP } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";

export function Community() {
  return (
    <section className="flex flex-col gap-2 border-y border-dashed px-4 pb-6  text-center">
      <Link href="/" className="self-center">
        <Image
          src="/skid-club.svg"
          alt="Skid Club Logo"
          width={100}
          height={100}
          priority
        />
      </Link>

      <TypographyP>Join our group chat and chat with members</TypographyP>
      <Button className="self-center">Go to group chat</Button>
    </section>
  );
}
