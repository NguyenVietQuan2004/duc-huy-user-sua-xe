"use client";

import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import Image from "next/image";
import { LinkToIcon } from "../../public/icon";
import striptags from "striptags";
import { useEffect, useState } from "react";
import { blogApi } from "@/api-request/blogApi";
import { Blog } from "@/type/blog";
import { formatDateToDDMMYYYY } from "@/lib/utils";
function AdviceOtherCard() {
  const [adviceList, setAdviceList] = useState<Blog[]>();
  useEffect(() => {
    const fetchAPI = async () => {
      const listAdvices = await blogApi.getAllBlogs({ limit: 5, page: 1 });
      setAdviceList([...listAdvices]);
    };
    fetchAPI();
  }, []);

  return (
    <div className="bg-white mt-8 overflow-hidden  shadow-[4px_4px_15px_0px_rgba(0,0,0,0.15)] border border-[#d9d9d9] rounded-sm">
      <div className="py-5 px-8 flex items-center gap-5">
        <Image
          alt=""
          width={30}
          height={31}
          className="object-cover"
          src="https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625627-1.svg"
        />
        <span className="text-[20px] text-[#124d9b] font-bold">BÀI VIẾT TƯ VẤN KHÁC</span>
      </div>

      {adviceList?.map((item, index) => {
        if (index > 4) return null;
        return (
          <Link
            href={`/advice/${item._id}`}
            key={item._id}
            className="block rounded-none border-t  items-start border-transparent border-t-black
                    gap-4 py-3 px-4 overflow-hidden shadow-none hover:bg-gray-50 transition-all"
          >
            <div className="flex gap-4">
              {item.images.length ? (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="aspect-square min-w-[100px] object-cover"
                />
              ) : (
                <div className="min-w-[100px]"></div>
              )}

              <div
                className="font-semibold text-start-css text-sm leading-snug text-wrap line-clamp-4"
                dangerouslySetInnerHTML={{ __html: striptags(item.content) }}
              />
              {/* <div className="font-semibold text-start-css text-sm leading-snug text-wrap line-clamp-4">
                {striptags(item.content)}
              </div> */}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">{formatDateToDDMMYYYY(item.created_at.toString())}</span>
                <LinkToIcon strokeColor="#d51921" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AdviceOtherCard;
