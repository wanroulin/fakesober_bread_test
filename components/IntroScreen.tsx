type IntroScreenProps = {
  onStart: () => void;
};

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-2 text-center">
      <div className="space-y-3">



        <h1 className="text-2xl font-bold leading-snug text-[var(--quiz-text)] sm:text-4xl">
          如果 Fake Sober 的麵包是一種人，
          <br />
          你會是哪一種？
        </h1>
        <p className="text-base leading-relaxed text-[var(--quiz-muted)] sm:text-lg">
          共 6 題，約 2 分鐘
          <br />
          找出你的鹽麵包人格！
        </p>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="quiz-btn-primary w-full max-w-xs rounded-full px-8 py-4 text-lg font-semibold transition-transform active:scale-[0.98] sm:max-w-sm sm:text-xl"
      >
        開始測驗
      </button>
    </div>
  );
}
