import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import { RESULTS } from "@/lib/quiz-data";
import { captureElementAsPng } from "@/lib/export-result";
import type { BreadType } from "@/lib/types";

type ResultScreenProps = {
  resultType: BreadType;
  cardRef: RefObject<HTMLDivElement | null>;
  onSave: () => void;
  onRetake: () => void;
  isSaving: boolean;
};

export function ResultScreen({
  resultType,
  cardRef,
  onSave,
  onRetake,
  isSaving,
}: ResultScreenProps) {
  const result = RESULTS[resultType];
  const [shareImageUrl, setShareImageUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(async () => {
      const el = cardRef.current;
      if (!el || cancelled) return;
      try {
        const dataUrl = await captureElementAsPng(el);
        if (!cancelled) setShareImageUrl(dataUrl);
      } catch {
        /* preview optional */
      }
    }, 600);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [cardRef, resultType]);

  return (
    <div className="flex flex-1 flex-col gap-5 animate-fade-in">
      <p className="text-center text-base text-[var(--quiz-muted)] sm:text-lg">
        你的麵包人格是…
      </p>

      <div
        ref={cardRef}
        className="save-card rounded-2xl border border-[var(--quiz-border)] bg-[#faf6f0] p-5 sm:p-6"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32">
            <Image
              src={result.image}
              alt={result.name}
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
          <h2 className="text-2xl font-bold text-[var(--quiz-text)] sm:text-3xl">
            {result.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {result.keywords.map((kw) => (
              <span
                key={kw.text}
                className="rounded-full bg-white px-3 py-1.5 text-base text-[var(--quiz-text)] shadow-sm sm:text-lg"
              >
                {kw.emoji} {kw.text}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--quiz-text)] sm:text-lg">
          <section>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--quiz-muted)] sm:text-base">
              人格敘述
            </h3>
            {result.description.map((line, i) => (
              <p key={i} className="mb-1 last:mb-0">
                {line}
              </p>
            ))}
          </section>

          <section className="rounded-xl bg-white/80 p-4">
            <h3 className="mb-1 text-sm font-semibold text-[var(--quiz-muted)] sm:text-base">
              適合飲料
            </h3>
            <p className="font-semibold">{result.drink}</p>
            <p className="mt-1 text-[var(--quiz-muted)]">{result.drinkNote}</p>
          </section>

          <section className="rounded-xl bg-white/80 p-4">
            <h3 className="mb-1 text-sm font-semibold text-[var(--quiz-muted)] sm:text-base">
              最適合當朋友的麵包
            </h3>
            <p className="font-semibold">{result.friendBread}</p>
            <p className="mt-1 text-[var(--quiz-muted)]">{result.friendNote}</p>
          </section>
        </div>

        <p className="mt-4 text-center text-sm text-[var(--quiz-muted)]">
          Fake Sober ☀️🥐
        </p>
      </div>

      {shareImageUrl && (
        <div className="space-y-2">
          <p className="text-center text-sm text-[var(--quiz-muted)] sm:text-base">
            長按下方圖片可儲存到相簿
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shareImageUrl}
            alt={`${result.name} 測驗結果`}
            className="mx-auto w-full max-w-sm rounded-2xl border border-[var(--quiz-border)] shadow-sm"
          />
        </div>
      )}

      <p className="text-center text-sm text-[var(--quiz-muted)] sm:text-base">
        {shareImageUrl ? "或使用按鈕下載" : "圖片準備中，也可使用按鈕下載"}
      </p>

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <button
          type="button"
          onClick={onSave}
          disabled={isSaving}
          className="quiz-btn-primary flex-1 rounded-full px-6 py-3.5 text-base font-semibold disabled:opacity-60 sm:text-lg"
        >
          {isSaving ? "產生圖片中…" : "儲存結果"}
        </button>
        <button
          type="button"
          onClick={onRetake}
          className="flex-1 rounded-full border border-[var(--quiz-border)] bg-white px-6 py-3.5 text-base font-semibold text-[var(--quiz-text)] transition-colors hover:bg-[var(--quiz-option-hover)] sm:text-lg"
        >
          重新測一次
        </button>
      </div>
    </div>
  );
}
