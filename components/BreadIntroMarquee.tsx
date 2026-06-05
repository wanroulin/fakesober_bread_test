import { BREAD_ORDER } from "@/lib/quiz-data";
import { BreadMediaItem } from "./BreadMediaItem";

function BreadMarqueeGroup({
  suffix,
  hidden,
}: {
  suffix: string;
  hidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-3 px-1 sm:gap-4"
      aria-hidden={hidden}
    >
      {BREAD_ORDER.map((type) => (
        <BreadMediaItem
          key={`${type}-${suffix}`}
          type={type}
          className="h-11 w-11 shrink-0 sm:h-14 sm:w-14"
        />
      ))}
    </div>
  );
}

/** 首頁：五種麵包一字排開，置中緩慢橫向無縫滾動 */
export function BreadIntroMarquee({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bread-marquee relative w-full overflow-hidden py-1 ${className}`}
      aria-label="五種鹽麵包展示"
    >
      <div className="bread-marquee-fade bread-marquee-fade--left" />
      <div className="bread-marquee-fade bread-marquee-fade--right" />

      <div className="bread-marquee-track flex w-max flex-nowrap items-center">
        <BreadMarqueeGroup suffix="a" />
        <BreadMarqueeGroup suffix="b" hidden />
      </div>
    </div>
  );
}
