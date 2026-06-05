"use client";

import Image from "next/image";
import { useState } from "react";
import { BREAD_IMAGES, BREAD_VIDEOS } from "@/lib/quiz-data";
import type { BreadType } from "@/lib/types";

type BreadMediaItemProps = {
  type: BreadType;
  className?: string;
};

export function BreadMediaItem({ type, className = "" }: BreadMediaItemProps) {
  const [useImage, setUseImage] = useState(false);

  return (
    <div className={`relative aspect-square ${className}`}>
      {useImage ? (
        <Image
          src={BREAD_IMAGES[type]}
          alt=""
          fill
          className="object-contain"
          sizes="72px"
        />
      ) : (
        <video
          src={BREAD_VIDEOS[type]}
          className="h-full w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setUseImage(true)}
        />
      )}
    </div>
  );
}
