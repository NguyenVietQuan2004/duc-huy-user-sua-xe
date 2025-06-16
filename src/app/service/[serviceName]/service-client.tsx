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

function ServiceClient({ serviceId }: { serviceId: string }) {
  const [service, setService] = useState<Service>();
  const listService: Service[] = useAppSelector((state) => state.service.services);

  const [img, setImg] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const service = await serviceApi.getServiceById({ serviceId });
      const poster = await posterApi.getPoster();
      setImg(poster.images_service);
      setService(service);
    };
    fetchAPI();
  }, [serviceId]);
  return (
    <div>
      {/* Banner */}
      <div className="relative">
        {img && (
          <div
            className="absolute inset-0 bg-cover bg-center h-[500px] "
            style={{
              backgroundImage: `url(${img || "https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg"})`,
            }}
          />
        )}
        <div className="relative max-w-[1140px] py-[120px] pt-[160px] h-[500px]  lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[540px]">
            <div className="text-[18px]">CÂN CHỈNH ĐỘ CHỤM (GÓC LÁI) BÁNH XE</div>
            <div className="text-[36px] font-bold">Với tiêu chuẩn an toàn số 1 thế giới từ máy Hunter – USA</div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="max-w-[1140px]  mx-auto text-[18px] lg:pt-60 px-4 lg:px-0 py-20 pt-30 flex flex-col gap-8">
        <div
          className="flex flex-row-reverse  justify-between items-start gap-10 relative  z-[8] 
      lg:-top-[300px]"
        >
          <div className="  hidden lg:flex justify-end items-start  border-[#08080808]  bg-[#]">
            <div className="bg-white  rounded-2xl p-8 border min-w-[370px] shadow-md w-full max-w-xs text-nowrap ">
              <h3 className="text-[#f6ab35] text-lg font-bold mb-4 uppercase">Dịch vụ khác</h3>
              <ul className="flex flex-col divide-y text-[18px] ">
                {listService.map((item, index) => (
                  <li
                    key={item._id}
                    className={`flex items-center hover:opacity-50 transition-all duration-300 gap-2 py-3 ${
                      serviceId === item._id ? "text-[#f6ab35]" : ""
                    }`}
                  >
                    <Link href={`/service/${item._id}`} className="flex items-center gap-2">
                      {/* <Image width={100} height={100} src={item.image} alt="icon" className="w-5 h-5" /> */}
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
                      <span className="line-clamp-1 max-w-full text-wrap">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="h-[1px] bg-[#f6ab35] my-4" />

              <ButtonClient />
            </div>
          </div>

          <div className="lg:relative z-10  lg:mt-[100px] ">
            <div className="text-4xl mb-7 font-semibold text-[#f6ab35] line-clamp-5">{service?.name}</div>
            <div className="font-normal break-words text-wrap "> {service?.price}</div>
          </div>
        </div>
        <ServiceDetail service={service} />
      </div>
    </div>
  );
}

export default ServiceClient;
