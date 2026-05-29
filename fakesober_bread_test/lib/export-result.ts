import html2canvas from "html2canvas";

export async function captureElementAsPng(
  element: HTMLElement,
): Promise<string> {
  const canvas = await html2canvas(element, {
    backgroundColor: "#faf6f0",
    scale: typeof window !== "undefined" && window.devicePixelRatio > 1 ? 2 : 1.5,
    useCORS: true,
    logging: false,
  });
  return canvas.toDataURL("image/png");
}

export function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
}
