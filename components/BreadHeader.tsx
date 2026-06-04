import Image from "next/image";
import { BREAD_IMAGES, BREAD_ORDER } from "@/lib/quiz-data";

export function BreadHeader() {
  return (
    <header className="flex flex-col items-center gap-3 px-2">
      <Image
        src="/fake_sober_icon.png"
        alt="Fake Sober"
        width={72}
        height={72}
        className="h-20 w-20 object-contain sm:h-24 sm:w-24"
        priority
      />
      <div className="flex w-full max-w-sm items-end justify-center gap-1.5 sm:max-w-md sm:gap-2">
        {BREAD_ORDER.map((type) => (
          <div
            key={type}
            className="relative flex-1 aspect-square max-w-[4rem] sm:max-w-[5rem]"
          >
            <Image
              src={BREAD_IMAGES[type]}
              alt=""
              fill
              className="object-contain drop-shadow-sm"
              sizes="(max-width: 640px) 56px, 68px"
            />
          </div>
        ))}
      </div>
    </header>
  );
}
