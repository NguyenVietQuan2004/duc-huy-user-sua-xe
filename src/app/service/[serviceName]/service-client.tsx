"use client";
import Image from "next/image";
import Link from "next/link";
import ButtonClient from "./_components/button-client";
import ServiceDetail from "./_components/service-details";
import { useEffect, useState } from "react";
import { serviceApi } from "@/api-request/serviceAPI";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Service } from "@/type/service";

function ServiceClient({ serviceId }: { serviceId: string }) {
  const [service, setService] = useState<Service>();
  // const listService = useAppDispatch(state => state.service.)
  const listService: Service[] = useAppSelector((state) => state.service.services);
  useEffect(() => {
    const fetchAPI = async () => {
      const service = await serviceApi.getServiceById({ serviceId });
      setService(service);
      console.log(service);
    };
    fetchAPI();
  }, [serviceId]);
  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center h-[500px] "
          style={{
            backgroundImage: "url(https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg)",
          }}
        />
        <div className="relative max-w-[1140px] py-[120px] pt-[160px] h-[500px]  lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[540px]">
            <div className="text-[18px]">CÂN CHỈNH ĐỘ CHỤM (GÓC LÁI) BÁNH XE</div>
            <div className="text-[36px] font-bold">Với tiêu chuẩn an toàn số 1 thế giới từ máy Hunter – USA</div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="max-w-[1140px] mx-auto text-[18px] lg:pt-60 px-4 lg:px-0 py-20 pt-30 flex flex-col gap-8">
        <div
          className="flex flex-row-reverse  justify-between items-start gap-10 relative  z-[8] 
      lg:-top-[300px]"
        >
          <div className="  hidden lg:flex justify-end items-start h-[100vh] border-[#08080808]  bg-[#]">
            <div className="bg-white  rounded-2xl p-8 border min-w-[370px] shadow-md w-full max-w-xs text-nowrap ">
              <h3 className="text-[#d51921] text-lg font-bold mb-4 uppercase">Dịch vụ khác</h3>
              <ul className="flex flex-col divide-y text-[18px] ">
                {listService.map((item) => (
                  <li
                    key={item._id}
                    className={`flex items-center hover:opacity-50 transition-all duration-300 gap-2 py-3 ${
                      serviceId === item._id ? "text-[#d51921]" : ""
                    }`}
                  >
                    <Link href={`/service/${item._id}`} className="flex items-center gap-2">
                      {/* <Image width={100} height={100} src={item.image} alt="icon" className="w-5 h-5" /> */}
                      icon service
                      <span className="line-clamp-1 max-w-full text-wrap">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="h-[1px] bg-[#d51921] my-4" />

              <ButtonClient />
            </div>
          </div>

          <div className="lg:relative z-10  lg:mt-[200px]">
            <div className="text-4xl mb-7 font-semibold text-[#d51921]">{service?.name}</div>
            <div className="font-normal"> {service?.price}</div>
          </div>
        </div>
        <ServiceDetail service={service} />
      </div>
    </div>
  );
}

export default ServiceClient;
