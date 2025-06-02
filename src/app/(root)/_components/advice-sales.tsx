"use client";
import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import Image from "next/image";
import SlideKM from "@/components/slide-sale-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { LinkToIcon } from "../../../../public/icon";
import { Autoplay, Pagination } from "swiper/modules";
import { formatDateToDDMMYYYY, stripHtml } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Blog } from "@/type/blog";
import { blogApi } from "@/api-request/blogApi";

function AdviceSale() {
  const [adviceList, setAdviceList] = useState<Blog[]>();
  useEffect(() => {
    const fetchAPI = async () => {
      const listAdvices = await blogApi.getAllBlogs({ limit: 5, page: 1 });
      setAdviceList(listAdvices.data);
    };
    fetchAPI();
  }, []);

  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 bg-cover bg-center h-[500px] "
        style={{
          backgroundImage: "url(https://nhatphatauto.vn/wp-content/uploads/2024/05/Mask-group-3-compressed.jpg)",
        }}
      />
      <div className="py-[170px] pb-16 px-4  relative max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {/* SALE SECTION */}
        <SlideKM />
        {/* ADVICE SECTION - Sửa giống SALE SECTION */}
        <div className="bg-white overflow-hidden hover:text-[#d51921] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.15)] border border-[#d9d9d9] rounded-sm">
          <div className="py-5 px-8 flex items-center gap-5">
            <Image
              alt=""
              width={30}
              height={31}
              className="object-cover"
              src="https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625627-1.svg"
            />
            <span className="text-[24px] text-[#124d9b] font-bold">GÓC TƯ VẤN</span>
          </div>

          <Swiper
            loop={true}
            autoplay={{ delay: 5000 }}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
              el: ".advice-swiper-pagination",
              renderBullet: (_, className) => {
                return `<span class="custom-bullet ${className}"></span>`;
              },
            }}
          >
            {adviceList?.map((item) => (
              <SwiperSlide key={item._id}>
                <Link href={`advice/${item._id}`}>
                  <div>
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
                  <div className="p-8 flex flex-col gap-4 select-none  mt-auto">
                    <div className="text-[22px] font-bold line-clamp-2 h-[66px]">{item.title}</div>
                    <div className="text-[#808080] text-sm">{formatDateToDDMMYYYY(item.created_at.toString())}</div>
                    <div
                      className="font-light line-clamp-3 text-start-css"
                      dangerouslySetInnerHTML={{ __html: stripHtml(item.content) }}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-between px-8 py-3">
            <LinkToIcon strokeColor="black" />
            <div className="advice-swiper-pagination swiper-pagination !static !flex !justify-end pb-[10px]" />
          </div>
        </div>
        {/* <AdviceOtherCard /> */}
      </div>
    </div>
  );
}

export default AdviceSale;
