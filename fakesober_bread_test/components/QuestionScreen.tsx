import type { BreadType, QuizQuestion } from "@/lib/types";

type QuestionScreenProps = {
  question: QuizQuestion;
  onSelect: (type: BreadType) => void;
};

export function QuestionScreen({ question, onSelect }: QuestionScreenProps) {
  return (
    <div className="question-screen flex min-h-0 flex-1 flex-col gap-4 animate-fade-in sm:gap-5">
      <div className="shrink-0 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[var(--quiz-tag-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--quiz-accent-dark)]">
            Q{question.id}
          </span>
          {question.highlight && (
            <span className="text-xs text-[var(--quiz-muted)]">
              {question.highlight}
            </span>
          )}
        </div>
        <h2 className="text-lg font-bold leading-snug text-[var(--quiz-text)] sm:text-xl">
          {question.title}
        </h2>
      </div>

      <ul className="flex min-h-0 flex-1 flex-col justify-center gap-2.5 overflow-y-auto pb-1 md:justify-start">
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => onSelect(option.type)}
              className="quiz-option group w-full rounded-2xl border border-[var(--quiz-border)] bg-white px-4 py-3.5 text-left text-sm leading-relaxed text-[var(--quiz-text)] transition-all hover:border-[var(--quiz-accent)] hover:bg-[var(--quiz-option-hover)] active:scale-[0.99] sm:text-base"
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
