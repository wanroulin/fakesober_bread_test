import Image from "next/image";
import { BREAD_IMAGES, BREAD_ORDER } from "@/lib/quiz-data";
import type { BreadType } from "@/lib/types";

type ProgressBarProps = {
  current: number;
  total: number;
};

const PROGRESS_BREADS: BreadType[] = Array.from(
  { length: 6 },
  (_, i) => BREAD_ORDER[i % BREAD_ORDER.length],
);

function BreadStep({
  breadType,
  step,
  current,
}: {
  breadType: BreadType;
  step: number;
  current: number;
}) {
  const isCompleted = step < current;
  const isCurrent = step === current;
  const isUpcoming = step > current;

  return (
    <div
      className={`relative shrink-0 rounded-full border-2 bg-white p-1 transition-all duration-300 ${
        isCurrent
          ? "bread-step--current size-11 border-[var(--quiz-accent-dark)] shadow-md sm:size-[3.25rem]"
          : isCompleted
            ? "bread-step--done size-10 border-[var(--quiz-accent)] sm:size-12"
            : "bread-step--upcoming size-9 border-[var(--quiz-border)] opacity-75 sm:size-11"
      }`}
      aria-current={isCurrent ? "step" : undefined}
    >
      <div className="relative size-7 sm:size-8">
        <Image
          src={BREAD_IMAGES[breadType]}
          alt=""
          fill
          className={`object-contain transition-opacity duration-300 ${
            isUpcoming ? "opacity-40 grayscale-[25%]" : "opacity-100"
          }`}
          sizes="48px"
        />
      </div>
    </div>
  );
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const steps = PROGRESS_BREADS.slice(0, total);

  return (
    <div
      className="w-full space-y-3"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`測驗進度：第 ${current} 題，共 ${total} 題`}
    >
      <p className="text-center text-base font-medium text-[var(--quiz-muted)] sm:text-lg">
        第 {current} / {total} 題
      </p>

      <div className="flex w-full items-center justify-between gap-0 px-1">
        {steps.map((breadType, index) => {
          const step = index + 1;
          const lineDone = step < current;

          return (
            <div key={step} className="flex min-w-0 flex-1 items-center last:flex-none">
              <BreadStep breadType={breadType} step={step} current={current} />

              {index < total - 1 && (
                <div
                  className={`mx-0.5 h-0.5 min-w-2 flex-1 rounded-full transition-colors duration-300 sm:mx-1 sm:h-[3px] ${
                    lineDone
                      ? "bg-[var(--quiz-accent-dark)]"
                      : "bg-[var(--quiz-progress-track)]"
                  }`}
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
