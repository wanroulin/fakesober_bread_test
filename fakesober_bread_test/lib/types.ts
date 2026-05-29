export type BreadType =
  | "original"
  | "earlgrey"
  | "redbean"
  | "bacon"
  | "garlic";

export type QuizOption = {
  label: string;
  type: BreadType;
};

export type QuizQuestion = {
  id: number;
  title: string;
  weight: number;
  highlight?: string;
  options: QuizOption[];
};

export type BreadResult = {
  type: BreadType;
  name: string;
  image: string;
  keywords: { emoji: string; text: string }[];
  description: string[];
  drink: string;
  drinkNote: string;
  friendBread: string;
  friendNote: string;
};
