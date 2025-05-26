"use client";

import "swiper/css";
import "swiper/css/pagination";
import { blogSample } from "@/data";
import { TuVan } from "@/type/tuvan";
import { useEffect, useState } from "react";
import TuVanOtherCard from "@/components/tuvan-other-card";

function injectImageRandomly(content: string, images?: string[], imgNames?: string[]) {
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
}

function ChuongtrinhKMDetail({}: { id: string }) {
  const [tuvan, setBlogs] = useState<TuVan>();

  useEffect(() => {
    const fetchAPI = async () => {
      // setBlogs(() => sampleArrayBlog.find((item) => item._id === id));
      setBlogs(blogSample);
    };
    fetchAPI();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-[100px] px-4 ">
      <div className="grid grid-cols-10 gap-10">
        <div className="px-4 lg:px-0 pt-20 lg:pt-0 col-span-12 lg:col-span-7">
          <div className="text-[36px] font-light">{tuvan?.title}</div>
          <div className="text-[14px] flex justify-between font-light my-4">
            <div>Tin khuyến mại</div>
            <div>{tuvan?.created_at.toDateString()}</div>
          </div>

          {tuvan?.content && (
            <div
              className="text-lg"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: injectImageRandomly(tuvan.content, tuvan.images, tuvan.images_name),
              }}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block col-span-3">
          <TuVanOtherCard />
        </div>
      </div>
    </div>
  );
}

export default ChuongtrinhKMDetail;
