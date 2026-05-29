"use client";

import { useCallback, useRef, useState } from "react";
import { BreadHeader } from "./BreadHeader";
import { captureElementAsPng, downloadDataUrl } from "@/lib/export-result";
import { ProgressBar } from "./ProgressBar";
import { IntroScreen } from "./IntroScreen";
import { QuestionScreen } from "./QuestionScreen";
import { ResultScreen } from "./ResultScreen";
import { QUESTIONS } from "@/lib/quiz-data";
import { calculateResult } from "@/lib/scoring";
import type { BreadType } from "@/lib/types";

type Phase = "intro" | "quiz" | "result";

export function QuizApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<BreadType[]>([]);
  const [resultType, setResultType] = useState<BreadType | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const resultCardRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setPhase("quiz");
    setQuestionIndex(0);
    setAnswers([]);
    setResultType(null);
  };

  const handleAnswer = (type: BreadType) => {
    const nextAnswers = [...answers, type];
    setAnswers(nextAnswers);

    if (questionIndex < QUESTIONS.length - 1) {
      setQuestionIndex((i) => i + 1);
      return;
    }

    const result = calculateResult(nextAnswers);
    setResultType(result);
    setPhase("result");
  };

  const handleRetake = () => {
    setPhase("intro");
    setQuestionIndex(0);
    setAnswers([]);
    setResultType(null);
  };

  const handleSaveImage = useCallback(async () => {
    const el = resultCardRef.current;
    if (!el || isSaving) return;

    setIsSaving(true);
    try {
      const dataUrl = await captureElementAsPng(el);
      downloadDataUrl(dataUrl, `fake-sober-麵包人格-${Date.now()}.png`);
    } finally {
      setIsSaving(false);
    }
  }, [isSaving]);

  const isQuiz = phase === "quiz";

  return (
    <div
      className={`quiz-bg w-full ${isQuiz ? "h-dvh min-h-dvh" : "min-h-dvh"}`}
    >
      <div
        className={`mx-auto flex w-full max-w-lg flex-col ${
          isQuiz
            ? "h-full px-0 py-0 md:h-auto md:min-h-dvh md:justify-center md:px-6 md:py-8"
            : "min-h-dvh px-4 py-6 sm:px-6 sm:py-10"
        }`}
      >
        <div
          className={`quiz-card flex flex-col ${
            isQuiz
              ? "quiz-card--quiz h-full min-h-0 gap-4 rounded-none border-0 px-4 py-5 shadow-none md:h-[90dvh] md:max-h-[90dvh] md:gap-6 md:rounded-3xl md:border md:px-8 md:py-8 md:shadow-lg"
              : "flex-1 gap-5 rounded-3xl px-4 py-6 shadow-lg sm:gap-6 sm:px-8 sm:py-8"
          }`}
        >
          <BreadHeader />

          {isQuiz && (
            <ProgressBar
              current={questionIndex + 1}
              total={QUESTIONS.length}
            />
          )}

          <div className="flex min-h-0 flex-1 flex-col">
            {phase === "intro" && <IntroScreen onStart={handleStart} />}

            {isQuiz && (
              <QuestionScreen
                question={QUESTIONS[questionIndex]}
                onSelect={handleAnswer}
              />
            )}

            {phase === "result" && resultType && (
              <ResultScreen
                resultType={resultType}
                cardRef={resultCardRef}
                onSave={handleSaveImage}
                onRetake={handleRetake}
                isSaving={isSaving}
              />
            )}
          </div>
        </div>

        {!isQuiz && (
          <p className="mt-4 text-center text-xs text-[var(--quiz-muted)]">
            Fake Sober｜白天人格測驗 ☀️🥐
          </p>
        )}
      </div>
    </div>
  );
}
