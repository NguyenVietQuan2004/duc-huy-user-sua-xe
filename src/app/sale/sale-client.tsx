"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sale } from "@/type/sale";
import {
  Pagination,
  PaginationNext,
  PaginationItem,
  PaginationLink,
  PaginationContent,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { LinkToIcon } from "../../../public/icon";
import { saleApi } from "@/api-request/saleAPI";
import { stripHtml } from "@/lib/utils";
import { posterApi } from "@/api-request/posterAPI";

const ITEMS_PER_PAGE = 9;

function SaleClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [promotionsList, setPromotionList] = useState<Sale[]>();
  const totalPages = promotionsList ? Math.ceil(promotionsList.length / ITEMS_PER_PAGE) : 0;
  const [img, setImg] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      const listPromotions = await saleApi.getAllSales({ limit: 100, page: 1 });
      const poster = await posterApi.getPoster();
      setImg(poster.images_promotion);
      setPromotionList(listPromotions.data);
    };
    fetchAPI();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentItems =
    promotionsList && promotionsList.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div>
      {/* Banner */}
      <div className="relative">
        {img && (
          <div
            className="absolute inset-0 bg-cover bg-center h-[500px] "
            style={{
              backgroundImage: `url(${img || "https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg"})`,
            }}
          />
        )}
        <div className=" relative max-w-[1140px] py-[120px] h-[500px] pt-[160px] lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[540px]">
            <div className="text-[18px]">TIN KHUYẾN MẠI</div>
            <div className="text-[36px] font-bold text-wrap">
              Ưu đãi đặc biệt từ Trung tâm BMB Car Carecùng các đối tác
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="px-4  max-w-[1140px] mx-auto text-[18px]  py-20 flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems?.map((promo) => {
            const date = new Date(promo.created_at); // hoặc updated_at
            const day = date.getDate();
            const month = date.getMonth() + 1; // Tháng trong JS bắt đầu từ 0
            const year = date.getFullYear();
            return (
              <Link
                href={`/sale/${promo._id}`}
                key={promo._id}
                className="border rounded-sm group hover:text-[#d51921] p-4 flex flex-col shadow-md"
              >
                <h2 className="text-[24px] font-light h-[108px] line-clamp-3 mb-2">{promo.title}</h2>
                <div className="w-full  relative mb-4 rounded-lg  overflow-hidden">
                  {promo.images.length ? (
                    <Image
                      src={promo.images[0]}
                      alt={promo.title}
                      width={600}
                      height={600}
                      className="w-full  hover:scale-105 duration-300 !aspect-square object-cover"
                    />
                  ) : (
                    <div className="w-full"></div>
                  )}
                </div>
                <div className="flex gap-4 mb-1 items-start">
                  <div className="text-center">
                    <div className="text-[24px] py-1 border-t border-[#212529] font-bold leading-none text-[#124d9b]">
                      {day}
                    </div>
                    <div className="text-[14px] py-1 border-t text-gray-600 font-light text-nowrap">tháng {month}</div>
                    <div className="text-[14px] pt-1 border-t text-gray-500 font-light">{year}</div>
                  </div>
                  <div
                    className=" text-sm text-gray-700 leading-snug  line-clamp-4 group-hover:text-[#d51921] transition-all duration-200"
                    dangerouslySetInnerHTML={{ __html: stripHtml(promo.content) }}
                  />
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

export default SaleClient;
