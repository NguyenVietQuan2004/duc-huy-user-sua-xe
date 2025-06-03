"use client";
import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import Image from "next/image";
import SlideKM from "@/components/slide-sale-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { formatDateToDDMMYYYY, stripHtml } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Blog } from "@/type/blog";
import { blogApi } from "@/api-request/blogApi";
import { BookingIcon, CarSkinIcon, MapIcon, MessIcon, PhoneRedIcon, ZaloIcon } from "../../public/icon";
import MenuButtons from "./social-detail";

const socials = [BookingIcon, ZaloIcon, MessIcon, PhoneRedIcon, MapIcon];
function Social() {
  const [isShowDetail, setIsShowDetail] = useState(false);
  return (
    <div className="fixed  !w-10 !h-10 bottom-2 bg-white border right-2 aspect-square z-10 flex justify-center items-center border-blue-500 rounded-md ">
      <div className="relative" onClick={() => setIsShowDetail(!isShowDetail)}>
        <Swiper
          className="!w-10 !h-10 !flex aspect-square !justify-center !items-center"
          autoplay={{ delay: 500 }}
          loop={true}
          modules={[Autoplay]}
        >
          {socials?.map((Icon, index) => (
            <SwiperSlide key={index} className="!flex justify-center items-center">
              <div className="w-10 h-10 !flex justify-center items-center">
                <Icon />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {isShowDetail && <MenuButtons />}
      </div>
    </div>
  );
}

export default Social;
