"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Blog } from "@/type/blog";
import { useEffect, useState } from "react";
import SlideSaleCard from "@/components/slide-sale-card";
import AdviceOtherCard from "@/components/advice-other-card";
import { injectImageRandomly } from "@/lib/utils";

function SearchDetails({}: { id: string }) {
  const [blog, setBlogs] = useState<Blog>();

  useEffect(() => {
    const fetchAPI = async () => {
      // setBlogs(blogSample);
    };
    fetchAPI();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-[100px] px-4 ">
      <div className="grid grid-cols-12 gap-10">
        <div className="px-4 lg:px-0 pt-20 lg:pt-0 col-span-12 lg:col-span-8">
          <div className="text-[36px] font-light">{blog?.title}</div>
          <div className="text-[14px] flex justify-between font-light my-4">
            <div>{blog?.name}</div>
            <div>{blog?.created_at.toDateString()}</div>
          </div>

          {blog?.content && (
            <div
              className="text-lg"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: injectImageRandomly(blog.content, blog.images, blog.images_name),
              }}
            />
          )}

          {/* {blog?.content && (
            <div
              className="text-lg overflow-hidden text-wrap"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />
          )} */}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block col-span-4">
          <SlideSaleCard />
          <AdviceOtherCard />
        </div>
      </div>
    </div>
  );
}

export default SearchDetails;
