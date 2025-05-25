"use client";

import { useEffect, useState } from "react";

export default function ClientSafeHTML({
  content,
  images,
  imgNames,
}: {
  content: string;
  images?: string[];
  imgNames?: string[];
}) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const lines = content.split("\n");
    const modifiedLines = [...lines];

    if (images?.length) {
      const names = imgNames && imgNames.length === images.length ? imgNames : new Array(images.length).fill("");

      images.forEach((imageUrl, i) => {
        const imgName = names[i];
        const insertIndex = Math.floor(Math.random() * (modifiedLines.length + 1));
        const imageTag = `<div class="my-1"><img src="${imageUrl}" alt="image" class="w-full rounded-md shadow-md" /><div class="text-center font-light text-[18px] italic mt-4 ">${imgName}</div></div>`;
        modifiedLines.splice(insertIndex, 0, imageTag);
      });
    }

    setHtml(modifiedLines.join("\n"));
  }, [content, images, imgNames]);

  return <div className="text-lg" style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
