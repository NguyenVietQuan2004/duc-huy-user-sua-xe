"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LinkToIcon } from "../../../public/icon";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Blog } from "@/type/blog";
import { blogApi } from "@/api-request/blogApi";
import { stripHtml } from "@/lib/utils";

const ITEMS_PER_PAGE = 9;
export default function AdviceClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [adviceList, setAdviceList] = useState<Blog[]>();
  const totalPages = adviceList ? Math.ceil(adviceList.length / ITEMS_PER_PAGE) : 0;
  useEffect(() => {
    const fetchAPI = async () => {
      const listAdvices = await blogApi.getAllBlogs({ limit: 100, page: 1 });
      setAdviceList([...listAdvices]);
      console.log(listAdvices);
    };
    fetchAPI();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    console.log("Chuyển tới trang:", page);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentItems = adviceList && adviceList.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center h-[500px] "
          style={{
            backgroundImage: "url(https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GocTuVan.jpg)",
          }}
        />
        <div className="relative max-w-[1140px] py-[120px] pt-[160px] h-[500px] lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[540px]">
            <div className="text-[18px]">GÓC TƯ VẤN</div>
            <div className="text-[36px] font-bold">Kiến thức cho những hành trình an toàn trên mọi cung đường</div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="max-w-[1100px] px-4  mx-auto  text-[18px] py-20 flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems?.map((advice) => {
            console.log(advice);
            const date = new Date(advice.created_at); // hoặc updated_at
            const day = date.getDate();
            const month = date.getMonth() + 1; // Tháng trong JS bắt đầu từ 0
            const year = date.getFullYear();
            return (
              <Link
                href={`/advice/${advice._id}`}
                key={advice._id}
                className="border group  p-4 flex flex-col shadow-md"
              >
                <h2 className="text-[24px] font-light h-[108px] line-clamp-3 mb-2 group-hover:text-[#d51921]">
                  {advice.title}
                </h2>
                <div className="w-full rounded-sm relative mb-4 overflow-hidden">
                  {advice.images.length ? (
                    <Image
                      src={advice.images[0]}
                      alt={advice.title}
                      width={600}
                      height={600}
                      className="w-full rounded-sm hover:scale-105 transition-all duration-300 !aspect-square object-cover"
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="flex gap-4 mb-1 mt-auto items-start">
                  <div className="text-center">
                    <div className="text-[24px] py-1 border-t border-[#212529] font-bold leading-none text-[#124d9b]">
                      {day}
                    </div>
                    <div className="text-[14px] py-1 border-t text-gray-600 font-light text-nowrap">tháng {month}</div>
                    <div className="text-[14px] pt-1 border-t text-gray-500 font-light">{year}</div>
                  </div>
                  {/* <div className="text-sm text-gray-700 leading-snug  line-clamp-4 group-hover:text-[#d51921] transition-all duration-200">
                    {advice.content}
                  </div> */}

                  <div
                    className=" text-sm text-gray-700 leading-snug  line-clamp-4 group-hover:text-[#d51921] transition-all duration-200"
                    dangerouslySetInnerHTML={{ __html: stripHtml(advice.content) }}
                  />
                </div>
                <div className=" flex justify-between items-center pt-3">
                  <LinkToIcon strokeColor="black" />
                  <Button variant="link" className="text-red-600 text-[15px]">
                    Xem thêm
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <Pagination>
          <PaginationContent className="flex-wrap justify-center gap-1">
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => {
              const isActive = currentPage === i + 1;
              return (
                <PaginationItem key={i} className="cursor-pointer">
                  <PaginationLink
                    isActive={isActive}
                    onClick={() => handlePageChange(i + 1)}
                    className={`${isActive && "text-white bg-blue-600"}`}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
