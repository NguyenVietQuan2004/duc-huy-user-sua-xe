"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import useModalBooking from "@/hooks/use-model-booking";
import { Button, buttonVariants } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { sliderData } from "@/data";
import { useEffect, useState } from "react";
import { homeApi } from "@/api-request/homeAPI";
import { Banner } from "@/type/banner";
type SlideItem = {
  image: string;
  text: string;
  sub: string;
  subImage: string[];
  button: string;
  linkTo: string;
};

function Slider() {
  const { setIsShowModelBooking } = useModalBooking();
  const router = useRouter();

  const [banner, setBanner] = useState<Banner>();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await homeApi.getBanner();
      const data = response[0];
      console.log("slide", response);
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
              <CarouselItem
                key={index}
                className="relative flex flex-col justify-center  lg:h-[680px] pt-24   lg:pt-[130px] pb-20 lg:pb-[240px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center lg:h-[600px] "
                  style={{ backgroundImage: `url(${item})`, filter: "brightness(0.5)" }}
                />

                <div className="relative flex flex-col  lg:flex-row px-3 mx-0 lg:mx-[200px] items-center select-none">
                  {/* <div className="flex-1 flex gap-4 lg:gap-12 flex-col items-center ">
                    {item.subImage.map((img, idx) => {
                      return <Image key={idx} alt="" src={img} width={200} height={300} />;
                    })}
                  </div> */}
                  <div className="flex-1 flex gap-4 lg:gap-12 flex-col items-center "></div>
                  <div className="flex-1 text-center lg:text-right">
                    {/* {
                      <div
                        className="font-bold text-[54px] text-white text-wrap"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    }

                    <div className="text-[24px] font-light text-white">{item.sub}</div> */}
                    {/* <Button
                      onClick={() => {
                        if (item.linkTo === "booking") {
                          setIsShowModelBooking(true);
                        } else {
                          router.push(item.linkTo);
                        }
                      }}
                      className={buttonVariants({
                        className:
                          "text-lg mt-7 min-w-[300px] transition-all duration-500 hover:bg-[#D51921] hover:text-white h-[51px] text-black border border-[#d9d9d9] bg-[#FFBE27] ",
                        variant: "outline",
                      })}
                    >
                      {item.button}
                    </Button> */}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* <CarouselPrevious className="left-1/2" /> */}
        {/* <CarouselNext className="right-1/2" /> */}
      </Carousel>
    </div>
  );
}

export default Slider;
