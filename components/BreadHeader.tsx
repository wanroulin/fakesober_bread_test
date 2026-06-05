import Image from "next/image";
import { BreadIntroMarquee } from "./BreadIntroMarquee";
import { BreadStaticRow } from "./BreadStaticRow";

type BreadHeaderProps = {
  mode: "intro" | "quiz";
};

export function BreadHeader({ mode }: BreadHeaderProps) {
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
      {mode === "intro" ? (
        <BreadIntroMarquee className="w-full" />
      ) : (
        <BreadStaticRow className="w-full" />
      )}
    </header>
  );
}
