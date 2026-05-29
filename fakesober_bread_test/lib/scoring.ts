import { QUESTION_WEIGHTS } from "./quiz-data";
import type { BreadType } from "./types";

export function createEmptyScores(): Record<BreadType, number> {
  return {
    original: 0,
    earlgrey: 0,
    redbean: 0,
    bacon: 0,
    garlic: 0,
  };
}

export function calculateResult(answers: BreadType[]): BreadType {
  const scores = createEmptyScores();

  answers.forEach((type, index) => {
    scores[type] += QUESTION_WEIGHTS[index];
  });

  const maxScore = Math.max(...Object.values(scores));
  const tied = (Object.keys(scores) as BreadType[]).filter(
    (key) => scores[key] === maxScore,
  );

  if (tied.length === 1) {
    return tied[0];
  }

  return answers[5];
}
