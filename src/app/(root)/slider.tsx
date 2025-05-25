"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button, buttonVariants } from "@/components/ui/button";
type SlideItem = {
  image: string;
  text: string;
  sub: string;
  subImage: string[];
  button: string;
};

function Slider({ sliderData }: { sliderData: SlideItem[] }) {
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
          {sliderData.map((item, index) => {
            return (
              <CarouselItem key={index} className="relative h-[680px] pt-24  lg:pt-[130px] pb-0 lg:pb-[240px]">
                <div
                  className="absolute inset-0 bg-cover bg-center h-[500px] "
                  style={{ backgroundImage: `url(${item.image})`, filter: "brightness(0.5)" }}
                />

                <div className="relative flex flex-col lg:flex-row px-3 mx-0 lg:mx-[200px] items-center select-none">
                  <div className="flex-1 flex gap-4 lg:gap-12 flex-col items-center ">
                    {item.subImage.map((img, idx) => {
                      return <Image key={idx} alt="" src={img} width={200} height={300} />;
                    })}
                  </div>
                  <div className="flex-1 text-center lg:text-right">
                    {
                      <div
                        className="font-bold text-[54px] text-white"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    }

                    <div className="text-[24px] font-light text-white">{item.sub}</div>
                    <Button
                      className={buttonVariants({
                        className:
                          "text-lg mt-7 min-w-[300px] transition-all duration-500 hover:bg-[#D51921] hover:text-white h-[51px] text-black border border-[#d9d9d9] bg-[#FFBE27] ",
                        variant: "outline",
                      })}
                    >
                      {item.button}
                    </Button>
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
