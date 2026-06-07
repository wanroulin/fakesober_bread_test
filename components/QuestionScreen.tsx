import type { BreadType, QuizQuestion } from "@/lib/types";

type QuestionScreenProps = {
  question: QuizQuestion;
  onSelect: (type: BreadType) => void;
};

export function QuestionScreen({ question, onSelect }: QuestionScreenProps) {
  return (
    <div className="question-screen flex flex-col gap-3 animate-fade-in sm:gap-4">
      <div className="space-y-2">
        <span className="inline-block rounded-full bg-[var(--quiz-tag-bg)] px-3 py-1 text-sm font-semibold text-[var(--quiz-accent-dark)] sm:text-base">
          Q{question.id}
        </span>
        <h2 className="text-xl font-bold leading-snug text-[var(--quiz-text)] sm:text-2xl">
          {question.title}
        </h2>
      </div>

      <ul className="flex flex-col gap-2 sm:gap-2.5">
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => onSelect(option.type)}
              className="quiz-option group w-full rounded-2xl border border-[var(--quiz-border)] bg-white px-4 py-3 text-left text-base leading-relaxed text-[var(--quiz-text)] transition-all hover:border-[var(--quiz-accent)] hover:bg-[var(--quiz-option-hover)] active:scale-[0.99] sm:px-5 sm:py-3.5 sm:text-lg"
            >
              <span className="mr-2 font-semibold text-[var(--quiz-accent-dark)]">
                {String.fromCharCode(65 + index)}.
              </span>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
