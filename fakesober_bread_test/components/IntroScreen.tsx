type IntroScreenProps = {
  onStart: () => void;
};

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-3">
        <p className="text-sm tracking-wide text-[var(--quiz-muted)]">
          白天人格測驗
        </p>
        <h1 className="text-2xl font-bold leading-snug text-[var(--quiz-text)] sm:text-3xl">
          如果 Fake Sober 的麵包是一種人，
          <br />
          你會是哪一種？
        </h1>
        <p className="text-sm leading-relaxed text-[var(--quiz-muted)]">
          共 6 題，約 2 分鐘
          <br />
          找出你的鹽麵包人格 ☀️
        </p>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="quiz-btn-primary w-full max-w-xs rounded-full px-8 py-3.5 text-base font-semibold transition-transform active:scale-[0.98] sm:max-w-sm"
      >
        開始測驗
      </button>
    </div>
  );
}
