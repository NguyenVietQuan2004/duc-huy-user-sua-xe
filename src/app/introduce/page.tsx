import { introApi } from "@/api-request/introAPI";
import { posterApi } from "@/api-request/posterAPI";
import IntroduceClient from "./introduce-client";
import { notFound } from "next/navigation";

export default async function Introduce() {
  try {
    const [introList, poster] = await Promise.all([introApi.getIntro(), posterApi.getPoster()]);

    if (!introList || introList.length === 0 || !poster) {
      notFound();
    }

    const intro = introList[0]; // lấy phần tử đầu tiên

    return (
      <div className="text-justify">
        <div className="relative">
          {poster.images_intro && (
            <div
              className="absolute inset-0 bg-cover bg-center h-[500px]"
              style={{
                backgroundImage: `url(${poster.images_intro})`,
                filter: "brightness(50%)",
              }}
            />
          )}
          <div className="relative max-w-[1140px] py-[120px] pt-[160px] h-[500px] lg:pt-[120px] mx-auto px-4">
            <div className="text-white max-w-[540px] h-[189px]">
              <div className="text-[18px]">GIỚI THIỆU VỀ TRUNG TÂM BMB CAR CARE</div>
              <div className="text-[36px] font-bold">Trung tâm chăm sóc xe chuyên nghiệp, uy tín và tận tâm</div>
            </div>
          </div>
        </div>

        <div className="max-w-[1140px] px-4 mx-auto text-[18px] font-light py-10 [min-width:500px]:pt-40 flex flex-col gap-6">
          <div className="text-[#f8ab34] text-[30px] font-bold line-clamp-3">{intro.title}</div>
          <div className="text-[18px] font-bold line-clamp-3">{intro.name}</div>
          <div className="text-lg overflow-hidden text-wrap" dangerouslySetInnerHTML={{ __html: intro.content }} />

          <div className="flex justify-center mt-10">
            <IntroduceClient /> {/* 👈 chỉ có nút là client */}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch introduce data:", error);
    notFound();
  }
}
