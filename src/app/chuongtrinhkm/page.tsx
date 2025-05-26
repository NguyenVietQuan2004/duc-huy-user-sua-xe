"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationNext,
  PaginationItem,
  PaginationLink,
  PaginationContent,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { LinkToIcon } from "../../../public/icon";

function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/");
  return { day, month, year };
}

// Fake 100 promotions
const basePromo = {
  image: "https://nhatphatauto.vn/wp-content/uploads/2025/04/25T04-04-NhatPhat-Post-QuaTang-1200x1200-02.jpg",
  startDate: "10/05/2025",
  endDate: "25/06/2025",
  location: "Tất cả trung tâm thuộc hệ thống Nhật Phát",
};

const promotions = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Chương trình khuyến mãi số ${i + 1}`,
  ...basePromo,
}));

const ITEMS_PER_PAGE = 9;

export default function GioiThieu() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(promotions.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
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
            backgroundImage: "url(https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg)",
          }}
        />
        <div className=" relative max-w-[1140px] py-[120px] h-[500px] pt-[160px] lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[540px]">
            <div className="text-[18px]">TIN KHUYẾN MẠI</div>
            <div className="text-[36px] font-bold text-wrap">Ưu đãi đặc biệt từ Nhật Phát Auto cùng các đối tác</div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="px-4  max-w-[1140px] mx-auto text-[18px]  py-20 flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((promo) => {
            const { day, month, year } = formatDate(promo.startDate);
            return (
              <Link
                href={`/chuongtrinhkm/${promo.id}`}
                key={promo.id}
                className="border rounded-sm p-4 flex flex-col shadow-md"
              >
                <h2 className="text-[24px] font-light h-[108px] line-clamp-3 mb-2">{promo.title}</h2>
                <div className="w-full  relative mb-4">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    width={600}
                    height={600}
                    className="w-full rounded-lg !aspect-square object-cover"
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
                  <div className="text-sm text-gray-700 leading-snug  line-clamp-4">
                    Thời hạn Chương trình: <br /> {promo.startDate} tới hết ngày {promo.endDate}. <br />
                    Địa điểm: {promo.location}.
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
