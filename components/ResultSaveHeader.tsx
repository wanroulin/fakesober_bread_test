import { BREAD_IMAGES, BREAD_ORDER } from "@/lib/quiz-data";


export function ResultSaveHeader() {
  return (
    <header className="flex flex-col items-center gap-3 border-b border-[#e5d9cc] pb-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/fake_sober_icon.png"
        alt="Fake Sober"
        className="h-20 w-20 object-contain sm:h-24 sm:w-24"
      />
      <div className="flex w-full max-w-sm items-end justify-center gap-1.5 sm:max-w-md sm:gap-2">
        {BREAD_ORDER.map((type) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={type}
            src={BREAD_IMAGES[type]}
            alt=""
            className="h-12 w-12 flex-1 max-w-[2.5rem] object-contain sm:h-10 sm:w-10 sm:max-w-[2.75rem]"
          />
        ))}
      </div>
    </header>
  );
}
