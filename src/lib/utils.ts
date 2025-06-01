import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const injectImageRandomly = (content: string, images?: string[], imgNames?: string[]) => {
  if (!images?.length) return content;

  const lines = content.split("\n");

  if (!imgNames || imgNames.length !== images.length) {
    imgNames = new Array(images.length).fill("");
  }

  const modifiedLines = [...lines];

  images.forEach((imageUrl, i) => {
    const imgName = imgNames[i];

    const insertIndex = Math.floor(Math.random() * (modifiedLines.length + 1));

    const imageTag = `<div class="my-1"><img src="${imageUrl}" alt="image" class="w-full rounded-md shadow-md" /><div class="text-center font-light text-[18px] italic mt-4 ">${imgName}</div></div>`;

    modifiedLines.splice(insertIndex, 0, imageTag);
  });

  return modifiedLines.join("\n");
};
export const stripHtml = (html: string, prefix = ""): string => {
  const tempDiv = document.createElement("div");
  tempDiv.style.textAlign = "start";
  tempDiv.innerHTML = html;

  // Hàm đệ quy gán style textAlign cho tất cả phần tử con
  const setTextAlignStart = (element: HTMLElement) => {
    element.style.textAlign = "start";
    // Duyệt qua tất cả các phần tử con
    Array.from(element.children).forEach((child) => {
      setTextAlignStart(child as HTMLElement);
    });
  };

  setTextAlignStart(tempDiv);

  let text = tempDiv.textContent || "";
  text = text.replace(/\s+/g, " ").trim();

  return prefix + text;
};
export function formatDateToDDMMYYYY(dateString: string | undefined): string {
  if (!dateString) return "";
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // tháng tính từ 0
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
