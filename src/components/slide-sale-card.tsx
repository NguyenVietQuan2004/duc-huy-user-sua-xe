import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import Image from "next/image";
import { LinkToIcon } from "../../public/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { stripVTControlCharacters } from "util";
import { formatDateToDDMMYYYY, stripHtml } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Sale } from "@/type/sale";
import { saleApi } from "@/api-request/saleAPI";

function SlideSaleCard() {
  const [sales, setSales] = useState<Sale[]>();

  useEffect(() => {
    const fetchAPI = async () => {
      const sales = await saleApi.getAllSales({ limit: 8, page: 1 });
      setSales(sales.data);
    };
    fetchAPI();
  }, []);

  return (
    <div className="bg-white overflow-hidden hover:text-[#f8ab34] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.15)] border border-[#d9d9d9] rounded-sm">
      <div className="py-5 px-8 flex items-center gap-5">
        <Image
          alt=""
          width={30}
          height={31}
          className="object-cover"
          src="https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625627.svg"
        />
        <span className="text-[24px] text-[#f8ab34] font-bold">TIN KHUYẾN MẠI</span>
      </div>

      <Swiper
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          el: ".sale-swiper-pagination",
          renderBullet: (_, className) => {
            return `<span class="custom-bullet ${className}"></span>`;
          },
        }}
      >
        {sales?.map((item, index) => {
          if (index > 8) return null;
          return (
            <SwiperSlide key={item._id}>
              <Link href={`/sale/${item._id}`}>
                <div className="relative z-0 ">
                  {item.images.length ? (
                    <Image
                      alt=""
                      width={700}
                      height={700}
                      className="object-cover w-full hover:scale-105 transition-all duration-500 aspect-square"
                      src={item.images[0]}
                    />
                  ) : (
                    <div className="w-full h-full aspect-square"></div>
                  )}
                </div>
                <div className="p-8 flex flex-col gap-4 select-none z-10 relative ">
                  <div className="text-[22px] font-bold line-clamp-2 h-[66px]">{item.title}</div>
                  <div className="text-[#808080] text-sm">{formatDateToDDMMYYYY(item.created_at.toString())}</div>
                  <div
                    className="font-light line-clamp-3 text-start-css"
                    dangerouslySetInnerHTML={{ __html: stripHtml(item.content) }}
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex items-center justify-between px-8 py-3">
        <LinkToIcon strokeColor="black" />
        <div className="sale-swiper-pagination swiper-pagination !static !flex !justify-end pb-[10px]" />
      </div>
    </div>
  );
}

export default SlideSaleCard;
