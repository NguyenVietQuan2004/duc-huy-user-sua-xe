"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Blog } from "@/type/blog";
import { useEffect, useState } from "react";
import SlideSaleCard from "@/components/slide-sale-card";
import AdviceOtherCard from "@/components/advice-other-card";

function SearchDetails({}: { id: string }) {
  const [blog, setBlogs] = useState<Blog>();

  useEffect(() => {
    const fetchAPI = async () => {};
    fetchAPI();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-[100px] lg:px-4 ">
      <div className="grid grid-cols-12 gap-10">
        <div className="px-4 lg:px-0 pt-20 lg:pt-0 col-span-10 lg:col-span-8">
          <div className="text-[36px] font-light">{blog?.title}</div>
          <div className="text-[14px] flex justify-between font-light my-4">
            <div>{blog?.name}</div>
            <div>{blog?.created_at.toDateString()}</div>
          </div>

          {blog?.content && (
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />
          )}
        </div>

        <div className="hidden lg:block col-span-4">
          <SlideSaleCard />
          <AdviceOtherCard />
        </div>
      </div>
    </div>
  );
}

export default SearchDetails;
