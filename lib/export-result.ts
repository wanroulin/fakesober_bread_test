import { domToPng } from "modern-screenshot";

export async function captureElementAsPng(
  element: HTMLElement,
): Promise<string> {
  const scale =
    typeof window !== "undefined" && window.devicePixelRatio > 1 ? 2 : 1.5;

  return domToPng(element, {
    scale,
    backgroundColor: "#faf6f0",
  });
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function downloadDataUrl(dataUrl: string, filename: string): void {
  fetch(dataUrl)
    .then((res) => res.blob())
    .then((blob) => downloadBlob(blob, filename))
    .catch(() => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
}

/** 產生與畫面一致的 PNG 並觸發瀏覽器下載 */
export async function downloadResultImage(
  element: HTMLElement,
  filename?: string,
): Promise<void> {
  const dataUrl = await captureElementAsPng(element);
  const name = filename ?? `fake-sober-麵包人格-${Date.now()}.png`;
  downloadDataUrl(dataUrl, name);
}
