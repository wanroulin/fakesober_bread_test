"use client";

import { RefObject, useState } from "react";
import { RESULTS } from "@/lib/quiz-data";
import { downloadResultImage } from "@/lib/export-result";
import { ResultSaveHeader } from "./ResultSaveHeader";
import { useLongPress } from "@/lib/use-long-press";
import type { BreadType } from "@/lib/types";

type ResultScreenProps = {
  resultType: BreadType;
  cardRef: RefObject<HTMLDivElement | null>;
  onRetake: () => void;
};

export function ResultScreen({
  resultType,
  cardRef,
  onRetake,
}: ResultScreenProps) {
  const result = RESULTS[resultType];
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const handleSave = async () => {
    const el = cardRef.current;
    if (!el || isSaving) return;

    setIsSaving(true);
    setSaveMessage(null);
    try {
      await downloadResultImage(el);
      setSaveMessage("圖片已下載！");
      window.setTimeout(() => setSaveMessage(null), 2500);
    } catch (err) {
      console.error(err);
      setSaveMessage("下載失敗，請再試一次");
    } finally {
      setIsSaving(false);
    }
  };

  const longPressHandlers = useLongPress({
    onLongPress: () => {
      if (!isSaving) void handleSave();
    },
  });

  return (
    <div className="flex flex-1 flex-col gap-5 animate-fade-in">
      <div
        ref={cardRef}
        className="save-capture touch-save-area cursor-pointer select-none rounded-2xl border border-[#e5d9cc] bg-[#faf6f0] p-5 sm:p-6"
        {...longPressHandlers}
        title="長按可儲存結果圖片"
      >
        <ResultSaveHeader />

        <p className="py-4 text-center text-base text-[#8a7568] sm:text-lg">
          你的麵包人格是…
        </p>

        <div className="space-y-5 border-t border-[#e5d9cc] pt-5">
          <div className="flex flex-row items-center gap-4 sm:gap-6">
            <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={result.image}
                alt={result.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 flex-1 text-left">
              <h2 className="text-xl font-bold leading-tight text-[#3d2f24] sm:text-2xl">
                {result.name}
              </h2>
              <ul className="mt-2.5 flex flex-col gap-1.5 sm:gap-2">
                {result.keywords.map((kw) => (
                  <li
                    key={kw.text}
                    className="flex flex-row items-center gap-2 text-base text-[#3d2f24] sm:text-lg"
                  >
                    <span className="shrink-0 text-xl leading-none sm:text-2xl">
                      {kw.emoji}
                    </span>
                    <span className="font-medium">{kw.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-[#3d2f24] sm:text-lg">
            <section>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#8a7568] sm:text-base">
                人格敘述
              </h3>
              {result.description.map((line, i) => (
                <p key={i} className="mb-1 last:mb-0">
                  {line}
                </p>
              ))}
            </section>

            <section className="rounded-xl bg-[#ffffffcc] p-4">
              <h3 className="mb-1 text-sm font-semibold text-[#8a7568] sm:text-base">
                適合飲料
              </h3>
              <p className="font-semibold">{result.drink}</p>
              <p className="mt-1 text-[#8a7568]">{result.drinkNote}</p>
            </section>

            <section className="rounded-xl bg-[#ffffffcc] p-4">
              <h3 className="mb-1 text-sm font-semibold text-[#8a7568] sm:text-base">
                最適合當朋友的麵包
              </h3>
              <p className="font-semibold">{result.friendBread}</p>
              <p className="mt-1 text-[#8a7568]">{result.friendNote}</p>
            </section>
          </div>

          <p className="text-center text-sm text-[#8a7568]">
            Fake Sober ☀️🥐
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-[#8a7568] sm:text-base">
        點「儲存結果」下載圖片，或長按上方結果區塊
      </p>

      {saveMessage && (
        <p className="text-center text-sm font-medium text-[#8b5e3c]">
          {saveMessage}
        </p>
      )}

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <button
          type="button"
          onClick={() => void handleSave()}
          disabled={isSaving}
          className="quiz-btn-primary flex-1 rounded-full px-6 py-3.5 text-base font-semibold disabled:opacity-60 sm:text-lg"
        >
          {isSaving ? "產生圖片中…" : "儲存結果"}
        </button>
        <button
          type="button"
          onClick={onRetake}
          className="flex-1 rounded-full border border-[#e5d9cc] bg-white px-6 py-3.5 text-base font-semibold text-[#3d2f24] transition-colors hover:bg-[#fdf9f4] sm:text-lg"
        >
          重新測一次
        </button>
      </div>
    </div>
  );
}
