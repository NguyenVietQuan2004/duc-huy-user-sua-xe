// "use client";
// import Link from "next/link";
// import ButtonClient from "./_components/button-client";
// import ServiceDetail from "./_components/service-details";
// import { useEffect, useState } from "react";
// import { serviceApi } from "@/api-request/serviceAPI";
// import { useAppSelector } from "@/store/hook";
// import { Service } from "@/type/service";
// import { servicesIcon } from "@/data";
// import Image from "next/image";
// import { posterApi } from "@/api-request/posterAPI";
// import { useSearchParams } from "next/navigation";
// import { categoryApi } from "@/api-request/categoryAPI";
// import { Category } from "@/type/category";

// function ServiceClient({ serviceId }: { serviceId: string }) {
//   const [service, setService] = useState<Service>();
//   const searchParams = useSearchParams();
//   const tag = searchParams.get("tag");
//   const listService: Service[] | Category[] = useAppSelector((state) => {
//     return tag
//       ? state.service.categories
//       : state.service.services.filter((item) => item.category_id === service?.category_id) || [];
//   });

//   const [img, setImg] = useState();

//   useEffect(() => {
//     const fetchAPI = async () => {
//       let service;
//       if (tag) {
//         service = await categoryApi.getCategoryById({ categoryId: serviceId });
//       } else {
//         service = await serviceApi.getServiceById({ serviceId });
//       }
//       const poster = await posterApi.getPoster();
//       setImg(poster.images_service);
//       setService(service);
//     };
//     fetchAPI();
//   }, [serviceId]);
//   return (
//     <div>
//       {/* Banner */}
//       <div className="relative">
//         {img && (
//           <div
//             className="absolute inset-0 bg-cover bg-center h-[500px] "
//             style={{
//               backgroundImage: `url(${img || "https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg"})`,
//             }}
//           />
//         )}
//         <div className="relative max-w-[1140px] py-[120px] pt-[160px] h-[500px]  lg:pt-[120px] mx-auto px-4 ">
//           <div className=" text-white max-w-[540px]">
//             <div className="text-[18px]">CÂN CHỈNH ĐỘ CHỤM (GÓC LÁI) BÁNH XE</div>
//             <div className="text-[36px] font-bold">Với tiêu chuẩn an toàn số 1 thế giới từ máy Hunter – USA</div>
//           </div>
//         </div>
//       </div>

//       {/* List */}
//       <div
//         className={`max-w-[1140px]  mx-auto text-[18px]  px-4 lg:px-2 ${
//           !!tag ? "lg:pt-60 py-20 pt-30" : "pt-6"
//         }  flex flex-col gap-8`}
//       >
//         {tag ? (
//           <div
//             className="flex flex-row-reverse  justify-between items-start gap-10 relative  z-[8]
//       lg:-top-[300px]"
//           >
//             {/*  */}
//             <div className="  hidden lg:flex justify-end items-start  border-[#08080808]  bg-[#]">
//               <div className="bg-white  rounded-2xl p-8 border min-w-[370px] shadow-md w-full max-w-xs text-nowrap ">
//                 <h3 className="text-[#f8ab34] text-lg font-bold mb-4 uppercase">Dịch vụ khác</h3>
//                 <ul className="flex flex-col divide-y text-[18px] ">
//                   {listService.map((item, index) => (
//                     <li
//                       key={item._id}
//                       className={`flex items-center hover:opacity-50 transition-all duration-300 gap-2 py-3 ${
//                         serviceId === item._id ? "text-[#f8ab34]" : ""
//                       }`}
//                     >
//                       <Link href={`/service/${item._id}?tag=category`} className="flex items-center gap-2">
//                         {servicesIcon.length ? (
//                           <Image
//                             alt=""
//                             width={80}
//                             height={80}
//                             src={servicesIcon[index % 6].image}
//                             className="max-w-6 max-h-6 group-hover:animate-shake"
//                           />
//                         ) : (
//                           <div>icon</div>
//                         )}
//                         <span className="line-clamp-1 max-w-full text-wrap">{item.name}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="h-[1px] bg-[#f8ab34] my-4" />

//                 <ButtonClient />
//               </div>
//             </div>
//             {/*  */}
//             <div className="lg:relative z-10  lg:mt-[100px] ">
//               <div className="text-4xl mb-7 font-semibold text-[#f8ab34] line-clamp-5">{service?.name}</div>
//               <div className="font-normal break-words text-wrap "> {service?.price}</div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             {" "}
//             <div className="">
//               <div className="text-4xl mb-7 font-semibold text-[#f8ab34] line-clamp-5">{service?.name}</div>
//               <div className="font-normal break-words text-wrap "> {service?.price}</div>
//             </div>
//             <h3 className="text-center mb-3 italic">Các dịch vụ liên quan khác</h3>
//             <ul className="grid grid-cols-1 overflow-hidden shadow-lg sm:grid-cols-3 border-2 border-[#f8ab34] rounded-md ">
//               {listService.map((item, index) => (
//                 <li
//                   key={item._id}
//                   className={`flex border px-1 justify-center items-center hover:opacity-50 transition-all duration-300 gap-2 py-3 ${
//                     serviceId === item._id ? "text-[#f8ab34]" : ""
//                   }`}
//                 >
//                   <Link href={`/service/${item._id}`} className="flex items-center gap-2">
//                     {servicesIcon.length ? (
//                       <Image
//                         alt=""
//                         width={80}
//                         height={80}
//                         src={servicesIcon[index % 6].image}
//                         className="max-w-6 max-h-6 group-hover:animate-shake"
//                       />
//                     ) : (
//                       <div>icon</div>
//                     )}
//                     <span className="line-clamp-1 max-w-full text-wrap">{item.name}</span>
//                   </Link>
//                 </li>
//               ))}
//               {Array.from({ length: 3 - (listService.length % 3) === 3 ? 0 : 3 - (listService.length % 3) }).map(
//                 (_, index) => (
//                   <li
//                     key={index}
//                     className={`flex border justify-center items-center hover:opacity-50 transition-all duration-300 gap-2 py-3 `}
//                   ></li>
//                 )
//               )}
//             </ul>
//           </div>
//         )}
//         <ServiceDetail isHasTag={!!tag} service={service} />
//       </div>
//     </div>
//   );
// }

// export default ServiceClient;

"use client";
import Link from "next/link";
import ButtonClient from "./_components/button-client";
import ServiceDetail from "./_components/service-details";
import { useEffect, useState } from "react";
import { serviceApi } from "@/api-request/serviceAPI";
import { useAppSelector } from "@/store/hook";
import { Service } from "@/type/service";
import { servicesIcon } from "@/data";
import Image from "next/image";
import { posterApi } from "@/api-request/posterAPI";
import { useSearchParams } from "next/navigation";
import { categoryApi } from "@/api-request/categoryAPI";
import { Category } from "@/type/category";

function ServiceClient({ serviceId }: { serviceId: string }) {
  const [service, setService] = useState<Service>();
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  const listService: Service[] | Category[] = useAppSelector((state) => {
    return tag
      ? state.service.categories
      : state.service.services.filter((item) => item.category_id === service?.category_id) || [];
  });

  const [img, setImg] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      let service;
      if (tag) {
        service = await categoryApi.getCategoryById({ categoryId: serviceId });
      } else {
        service = await serviceApi.getServiceById({ serviceId });
      }
      const poster = await posterApi.getPoster();
      setImg(poster.images_service);
      setService(service);
    };
    fetchAPI();
  }, [serviceId]);

  const titles: any = {
    "6859615ba48d2ab8ec1b38bc": "VỆ SINH & CHĂM SÓC XE TOÀN DIỆN",
    "685a6f5b344a4d51606951ec": "CHĂM SÓC & BẢO DƯỠNG XE",
    "685ba387ca4538a70e622383": "NÂNG CẤP & ĐỘ XE CHUYÊN NGHIỆP",
  };
  const subTitles: any = {
    "6859615ba48d2ab8ec1b38bc": "Làm sạch chuyên sâu – Đảm bảo an toàn, bảo vệ tối ưu từng chi tiết xe",
    "685a6f5b344a4d51606951ec": "Bảo dưỡng định kỳ – Đảm bảo vận hành ổn định, tăng tuổi thọ cho xế yêu",
    "685ba387ca4538a70e622383": "Giải pháp nâng cấp toàn diện – Chuẩn mực an toàn, thẩm mỹ và công nghệ mới",
  };
  return (
    <div>
      {/* Banner */}
      <div className="relative">
        {img && (
          <div
            className="absolute inset-0 bg-cover bg-center h-[500px] "
            style={{
              backgroundImage: `url(${img || "https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg"})`,
              filter: "brightness(50%)",
            }}
          />
        )}
        <div className="relative max-w-[1140px] py-[120px] pt-[160px] h-[500px]  lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[600px]">
            <div className="text-[18px]">{titles?.[serviceId] || "Không có tiêu đề"}</div>
            <div className="text-[36px] font-bold line-clamp-3">{subTitles?.[serviceId] || "Không có mô tả"}</div>
          </div>
        </div>
      </div>

      {/* List */}
      <div
        className={`max-w-[1140px]  mx-auto text-[18px]  px-4 lg:px-2 ${
          !!tag ? "lg:pt-60 py-20 pt-30" : "pt-6"
        }  flex flex-col gap-8`}
      >
        {/* <div className="lg:relative z-10  lg:mt-[100px] ">
          {" "}
          <div className="text-4xl mb-7 font-semibold text-[#f8ab34] line-clamp-5">{service?.name}</div>
          <div className="font-normal break-words text-wrap "> {service?.price}</div>
        </div> */}
        {tag && (
          <div
            className="flex flex-row-reverse  justify-between items-start gap-10 relative  z-[8]
      lg:-top-[300px]"
          >
            {/*  */}

            <div className="  hidden lg:flex justify-end items-start  border-[#08080808]  bg-[#]">
              <div className="bg-white  rounded-2xl p-8 border min-w-[370px] shadow-md w-full max-w-xs text-nowrap ">
                <h3 className="text-[#f8ab34] text-lg font-bold mb-4 uppercase">Dịch vụ khác</h3>
                <ul className="flex flex-col divide-y text-[18px] ">
                  {listService.map((item, index) => (
                    <li
                      key={item._id}
                      className={`flex font-semibold items-center hover:opacity-50 transition-all duration-300 gap-2 py-3 ${
                        serviceId === item._id ? "text-[#f8ab34]" : ""
                      }`}
                    >
                      <Link
                        href={`/service/${item._id}?tag=category`}
                        className="flex font-semibold items-center gap-2"
                      >
                        {servicesIcon.length ? (
                          <Image
                            alt=""
                            width={80}
                            height={80}
                            src={servicesIcon[index % 6].image}
                            className="max-w-6 max-h-6 group-hover:animate-shake"
                          />
                        ) : (
                          <div>icon</div>
                        )}
                        <span className="line-clamp-1 font-normal max-w-full text-wrap">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="h-[1px] bg-[#f8ab34] my-4" />

                <ButtonClient />
              </div>
            </div>
            <div className="lg:relative z-10  lg:mt-[100px] ">
              <div className="text-4xl mb-7 font-semibold text-[#f8ab34] line-clamp-5">{service?.title}</div>
              <div className="font-normal break-words text-wrap mt-4 mb-4 "> {service?.price}</div>
            </div>
            {/*  */}
          </div>
        )}
        {!tag && (
          <div className=" ">
            <div className="text-4xl font-semibold text-[#f8ab34] line-clamp-5">{service?.title}</div>
            <div className="font-normal break-words text-wrap mt-4 mb-4 "> {service?.price}</div>
          </div>
        )}

        <ServiceDetail serviceId={serviceId} listService={listService} isHasTag={!!tag} service={service} />
      </div>
    </div>
  );
}

export default ServiceClient;
