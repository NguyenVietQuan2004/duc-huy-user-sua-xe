"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { homeApi } from "@/api-request/homeAPI";
import { Banner } from "@/type/banner";

function Slider() {
  const [banner, setBanner] = useState<Banner>();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await homeApi.getBanner();
      const data = response[0];
      setBanner(data);
    };
    fetchAPI();
  }, []);
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {banner?.images?.map((item, index) => {
            return (
              // <CarouselItem
              //   key={index}
              //   className="relative flex flex-col justify-center h-screen lg:h-[680px] pt-24   lg:pt-[130px] pb-20 lg:pb-[240px]"
              // >
              //   <div
              //     className="absolute inset-0 bg-cover bg-center lg:h-[600px] "
              //     style={{ backgroundImage: `url(${item})`, filter: "brightness(0.5)" }}
              //   />

              //   <div className="relative flex flex-col  lg:flex-row px-3 mx-0 lg:mx-[200px] items-center select-none">
              //     <div className="flex-1 flex gap-4 lg:gap-12 flex-col items-center "></div>
              //     <div className="flex-1 text-center lg:text-right"></div>
              //   </div>
              // </CarouselItem>

              <CarouselItem
                key={index}
                className="relative flex flex-col justify-center h-[100vh] lg:h-[680px] pt-24   lg:pt-[130px] pb-20 lg:pb-[240px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center lg:h-[600px] "
                  style={{ backgroundImage: `url(${item})`, filter: "brightness(0.5)" }}
                />

                <div className="relative flex flex-col  lg:flex-row px-3 mx-0 lg:mx-[200px] items-center select-none">
                  <div className="flex-1 flex gap-4 lg:gap-12 flex-col items-center "></div>
                  <div className="flex-1 text-center lg:text-right">
                    {/* {
                      <div
                        className="font-bold text-[54px] text-white text-wrap"
                        dangerouslySetInnerHTML={{ __html: banner.images_name[index] }}
                      />
                    } */}

                    <div className="text-[24px]  line-clamp-6 font-light text-white">{banner.images_name[index]}</div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Slider;
