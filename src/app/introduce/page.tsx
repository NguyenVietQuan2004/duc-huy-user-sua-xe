"use client";

import { Button } from "@/components/ui/button";
import useModalBooking from "@/hooks/use-model-booking";
import { IntroType } from "@/type/intro";
import { useEffect, useState } from "react";
import { introApi } from "@/api-request/introAPI";
import { posterApi } from "@/api-request/posterAPI";

function Introduce() {
  const { setIsShowModelBooking } = useModalBooking();

  const [intro, setIntro] = useState<IntroType>();
  const [img, setImg] = useState<string>();
  useEffect(() => {
    const fetchAPI = async () => {
      const intro = await introApi.getIntro();
      const poster = await posterApi.getPoster();
      setIntro(intro[0]);
      setImg(poster.images_intro);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <div className="relative">
        {img && (
          <div
            className="absolute inset-0 bg-cover bg-center h-[500px] "
            style={{
              backgroundImage: `url(${img || "https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg"})`,
            }}
          />
        )}
        <div className="relative max-w-[1140px] py-[120px] pt-[160px] h-[500px] lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[540px] h-[189px]">
            <div className="text-[18px]">GIỚI THIỆU VỀ TRUNG TÂM BMB CAR CARE</div>
            <div className="text-[36px] font-bold">Công nghệ đỉnh cao mang lại uy tín & chất lượng vượt trội</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] px-4  mx-auto text-[18px] font-light py-10 [min-width:500px]:pt-40   flex flex-col gap-6">
        <div className="text-[#ff0000] text-[30px] font-bold line-clamp-3"> {intro?.title}</div>
        <div className="text-[18px] font-bold line-clamp-3">{intro?.name}</div>
        {intro?.content && (
          <div
            className="text-lg overflow-hidden text-wrap"
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{
              __html: intro.content,
            }}
          />
        )}

        <div className="flex justify-center mt-10">
          <Button
            onClick={() => setIsShowModelBooking(true)}
            variant={"outline"}
            type="submit"
            className="w-[460px]  bg-[#d51921] border border-transparent transition-all duration-500 hover:border-[#d51921]  text-white font-semibold py-7 rounded hover:bg-white hover:text-[#d51921] "
          >
            ĐẶT LỊCH HẸN TỚI TRUNG TÂM BMB CAR CARE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
