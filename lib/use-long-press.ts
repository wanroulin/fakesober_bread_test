"use client";

import { useCallback, useRef } from "react";

type UseLongPressOptions = {
  onLongPress: () => void;
  delay?: number;
};

export function useLongPress({ onLongPress, delay = 550 }: UseLongPressOptions) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clear();
    timerRef.current = setTimeout(() => {
      onLongPress();
      timerRef.current = null;
    }, delay);
  }, [clear, delay, onLongPress]);

  return {
    onTouchStart: start,
    onTouchEnd: clear,
    onTouchCancel: clear,
    onTouchMove: clear,
    onContextMenu: (e: { preventDefault: () => void }) => {
      e.preventDefault();
      onLongPress();
    },
  };
}
