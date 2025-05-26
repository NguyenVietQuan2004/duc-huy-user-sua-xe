"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
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

function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/");
  return { day, month, year };
}

// Fake 100 promotions
const basePromo = {
  image: "https://nhatphatauto.vn/wp-content/uploads/2025/04/24T04-03-NhatPhat-Post-ThayPhanh-1200x1200-01.jpg",
  sub: "Giảm xóc ô tô là một trong những bộ phận quan trọng của hệ thống treo, giúp xe vận hành êm ái và ổn định. Tuy nhiên, sau thời gian dài sử dụng, giảm xóc có thể bị xuống cấp, yếu, hỏng, gây ảnh hưởng nghiêm trọng đến sự...",
  location: "Tất cả trung tâm thuộc hệ thống Nhật Phát",
  startDate: "10/05/2025",
};

const promotions = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: `Căn chỉnh Hunter là bước quan trọng để đảm bảo xe vận hành ổn định, an toàn và mang đến trải nghiệm lái xe thoải mái, dễ ${
    i + 1
  }`,
  ...basePromo,
}));

const ITEMS_PER_PAGE = 9;
export default function TuVanClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(promotions.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    console.log("Chuyển tới trang:", page);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentItems = promotions.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
          {currentItems.map((promo) => {
            const { day, month, year } = formatDate(promo.startDate);
            return (
              <Link href={`/tuvan/${promo.id}`} key={promo.id} className="border group  p-4 flex flex-col shadow-md">
                <h2 className="text-[24px] font-light h-[108px] line-clamp-3 mb-2 group-hover:text-[#d51921]">
                  {promo.title}
                </h2>
                <div className="w-full rounded-sm relative mb-4 overflow-hidden">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    width={600}
                    height={600}
                    className="w-full rounded-sm hover:scale-105 transition-all duration-300 !aspect-square object-cover"
                  />
                </div>
                <div className="flex gap-4 mb-1 items-start">
                  <div className="text-center">
                    <div className="text-[24px] py-1 border-t border-[#212529] font-bold leading-none text-[#124d9b]">
                      {day}
                    </div>
                    <div className="text-[14px] py-1 border-t text-gray-600 font-light text-nowrap">tháng {month}</div>
                    <div className="text-[14px] pt-1 border-t text-gray-500 font-light">{year}</div>
                  </div>
                  <div className="text-sm text-gray-700 leading-snug  line-clamp-4 group-hover:text-[#d51921] transition-all duration-200">
                    {promo.sub}
                  </div>
                </div>
                <div className="mt-auto flex justify-between items-center pt-3">
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
