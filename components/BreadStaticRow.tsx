import { BREAD_ORDER } from "@/lib/quiz-data";
import { BreadMediaItem } from "./BreadMediaItem";

/** 測驗用：五種麵包固定一排，不輪播 */
export function BreadStaticRow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-full items-center justify-center gap-1.5 px-1 sm:gap-2 ${className}`}
      aria-label="五種鹽麵包"
    >
      {BREAD_ORDER.map((type) => (
        <BreadMediaItem
          key={type}
          type={type}
          className="h-14 w-full max-w-[3.25rem] flex-1 sm:h-16 sm:max-w-[3.75rem]"
        />
      ))}
    </div>
  );
}
