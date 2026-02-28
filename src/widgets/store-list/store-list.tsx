import Image from "next/image";
import { TypographyH2, TypographyH3 } from "@/shared/ui/typography";
import Link from "next/link";
import { Button } from "@/shared/ui/button";

export function StoreList() {
  const stores = [
    {
      name: "Bike Planet",
      image:
        "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?q=80&w=730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://bikeplanet.example.com",
    },
    {
      name: "Cycle World",
      image:
        "https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://cycleworld.example.com",
    },
  ];

  return (
    <section className="flex flex-col px-4 py-6 space-y-6">
      <TypographyH2>Store list</TypographyH2>

      <div className="flex flex-wrap gap-8">
        {stores.map((store) => (
          <Button
            variant="link"
            key={store.name}
            asChild
            className="hover:bg-neutral-100 px-0"
          >
            <Link
              href={store.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={store.image}
                  alt={store.name}
                  className="object-center"
                  width={24}
                  height={24}
                />
              </div>

              <TypographyH3 className="text-lg">{store.name}</TypographyH3>
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
