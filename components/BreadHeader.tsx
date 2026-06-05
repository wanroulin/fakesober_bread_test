import Image from "next/image";
import { BreadCarousel } from "./BreadCarousel";

export function BreadHeader() {
  return (
    <header className="flex flex-col items-center gap-3 px-2">
      <Image
        src="/fake_sober_icon.png"
        alt="Fake Sober"
        width={96}
        height={96}
        className="h-20 w-20 object-contain sm:h-24 sm:w-24"
        priority
      />
      <BreadCarousel className="w-full" />
    </header>
  );
}
