"use client";

import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function MyPartner() {
  const imageCount = 9;
  const images = Array.from({ length: imageCount }, (_, i) => `/images/${i + 1}.png`);

  return (
    <div className="pb-16 max-w-[1140px] px-4  mx-auto">
      <div className="text-[24px] lg:text-[36px] font-bold">ĐỐI TÁC CỦA CHÚNG TÔI</div>
      <div className="text-[20px] lg:text-[24px] font-light mb-8">
        Trung tâm BMB Car Care tự hào được cộng tác với nhiều thương hiệu hàng đầu thế giới
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
        {images?.map((item, index) => (
          <SwiperSlide key={index} className="select-none mb-10 cursor-pointer   flex items-center  justify-center ">
            <Image
              alt={`Logo ${index}`}
              width={192}
              height={240}
              className="object-contain min-h-[240px]"
              // src={item}
              src={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MyPartner;
