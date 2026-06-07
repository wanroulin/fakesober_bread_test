"use client";

import { useRef, useState } from "react";
import { BreadHeader } from "./BreadHeader";
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

  const isIntroOrQuiz = phase === "intro" || phase === "quiz";

  return (
    <div className="quiz-bg min-h-dvh w-full">
      <div
        className={`quiz-shell flex w-full flex-col ${
          isIntroOrQuiz
            ? "quiz-shell--centered min-h-dvh justify-center px-4 py-6 sm:px-6 sm:py-8"
            : "min-h-dvh justify-center px-4 py-6 sm:px-6 sm:py-10"
        }`}
      >
        {isIntroOrQuiz ? (
          <div className="quiz-card quiz-card--main flex flex-col gap-4 sm:gap-5">
            <BreadHeader mode={phase === "intro" ? "intro" : "quiz"} />

            {phase === "quiz" && (
              <ProgressBar
                current={questionIndex + 1}
                total={QUESTIONS.length}
              />
            )}

            <div className="quiz-card-body flex flex-1 flex-col justify-center">
              {phase === "intro" && <IntroScreen onStart={handleStart} />}

              {phase === "quiz" && (
                <QuestionScreen
                  question={QUESTIONS[questionIndex]}
                  onSelect={handleAnswer}
                />
              )}
            </div>
          </div>
        ) : (
          resultType && (
            <ResultScreen
              resultType={resultType}
              cardRef={resultCardRef}
              onRetake={handleRetake}
            />
          )
        )}

        {phase === "intro" && (
          <p className="mt-4 text-center text-sm text-[var(--quiz-muted)] sm:text-base">
            Fake Sober｜白天人格測驗 ☀️🥐
          </p>
        )}
      </div>
    </div>
  );
}
