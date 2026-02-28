import { Banner } from "@/widgets/banner/banner";
import { Community } from "@/widgets/community/community";
import { StoreList } from "@/widgets/store-list/store-list";
import { TypographyH1 } from "@/shared/ui/typography";

export default function Page() {
  return (
    <>
      <Banner />
      <TypographyH1 className="my-4">Fixed Gear with Skid club</TypographyH1>
      <Community />
      <StoreList />
    </>
  );
}
