"use client";

import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const logos = [
  "https://nhatphatauto.vn/wp-content/uploads/2024/06/Castrol.jpg",
  "https://nhatphatauto.vn/wp-content/uploads/2024/06/TECH.png",
  "https://nhatphatauto.vn/wp-content/uploads/2024/06/ASUKI.png",
  "https://nhatphatauto.vn/wp-content/uploads/2024/06/LiquiMoly.jpg",
  "https://nhatphatauto.vn/wp-content/uploads/2024/05/image-116.png",
  "https://nhatphatauto.vn/wp-content/uploads/2024/06/GERMAN_ADLER.png",
  "https://nhatphatauto.vn/wp-content/uploads/2024/06/GERMAN_ADLER.png",
  "https://nhatphatauto.vn/wp-content/uploads/2024/06/MatraX.svg",
  "https://nhatphatauto.vn/wp-content/uploads/2024/06/varta-batteries.jpg",
  "https://nhatphatauto.vn/wp-content/uploads/2024/06/Bosch.png",
];

function MyPartner() {
  return (
    <div className="pb-16 max-w-[1140px] px-4  mx-auto">
      <div className="text-[36px] font-bold">ĐỐI TÁC CỦA CHÚNG TÔI</div>
      <div className="text-[24px] font-light mb-8">
        Nhật Phát Auto tự hào được cộng tác với nhiều thương hiệu hàng đầu thế giới trong ngành xe hơi
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {logos.map((item, index) => (
          <SwiperSlide key={index} className="select-none mb-10 cursor-pointer   flex items-center  justify-center ">
            <Image alt={`Logo ${index}`} width={192} height={240} className="object-contain min-h-[240px]" src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MyPartner;
