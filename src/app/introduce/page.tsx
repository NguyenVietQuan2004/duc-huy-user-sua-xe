// // import IntroduceClient from "./introduce-client";

// // function Introduce() {
// //   return (
// //     <div>
// //       {" "}
// //       <IntroduceClient />
// //     </div>
// //   );
// // }

// // export default Introduce;

// // Introduce.tsx (server component)
// import IntroduceClient from "./introduce-client";
// import { introApi } from "@/api-request/introAPI";
// import { posterApi } from "@/api-request/posterAPI";

// async function Introduce() {
//   await new Promise((resolve) => setTimeout(resolve, 4000)); // chờ 1 giây

//   const [intro] = await introApi.getIntro();
//   const poster = await posterApi.getPoster();

//   return <IntroduceClient intro={intro} img={poster.images_intro} />;
// }

// export default Introduce;

import { introApi } from "@/api-request/introAPI";
import { posterApi } from "@/api-request/posterAPI";
import IntroduceClient from "./introduce-client";

export default async function Introduce() {
  const [introList, poster] = await Promise.all([introApi.getIntro(), posterApi.getPoster()]);

  const intro = introList[0]; // vì bạn chỉ lấy phần tử đầu

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
}
