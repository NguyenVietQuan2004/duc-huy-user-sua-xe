"use client";
import Link from "next/link";
import Image from "next/image";
import { LinkToIcon } from "../../../../public/icon";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "@/store/hook";
import { stripHtml } from "@/lib/utils";

function MyService() {
  const [image, imageInView] = useInView({
    threshold: 0.001,
  });
  const services = useAppSelector((state) => state.service.services);
  return (
    <div
      ref={image}
      className={`  relative w-full lg:-mt-[200px] duration-300 ${
        imageInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center   "
        style={{
          backgroundImage: `url(https://nhatphatauto.vn/wp-content/uploads/2024/05/Mask-group-1-compressed.jpg)`,
        }}
      />
      {/* Thêm nội dung hoặc một div trống để component hợp lệ */}
      <div className="relative z-10  p-4 max-w-[1140px] mx-auto pt-[180px] pb-20 lg:pb-[60px] ">
        <div className="text-[#124d9b] text-[36px] font-bold">DỊCH VỤ CỦA CHÚNG TÔI</div>
        <div className="text-[24px] font-light">Nhật Phát Auto cung cấp các dịch vụ với tiêu chuẩn quốc tế</div>
        <div className="grid grid-cols-1 lg:grid-cols-3  mt-20 ">
          {services?.map((item, index) => {
            return (
              <Link
                href={item._id}
                key={index}
                className={` group
                ${
                  index === 1
                    ? "border border-transparent  border-t-black lg:border-black lg:border-t-transparent lg:border-b-transparent"
                    : ""
                }
                ${index === 2 ? "border-t lg:border-t-transparent lg:border-b" : ""}
                ${index === 3 ? "border-t" : ""}
                ${
                  index === 4 ? "border border-transparent border-t-black lg:border-black  lg:border-b-transparent" : ""
                }
                    ${index === 5 ? "border-t lg:border-t-transparent" : ""}
                border-black py-[15px] hover:text-[#D51921] text-center px-10 flex flex-col gap-4 items-center
              `}
              >
                {/* <Image
                  alt=""
                  width={80}
                  height={80}
                  src={item.image}
                  className="max-w-20 max-h-20 group-hover:animate-shake"
                /> */}
                icon
                <div className="font-bold text-[22px]">{item.name}</div>
                {/* <div>{item.content}</div> */}
                <div
                  className="font-light line-clamp-3 text-start-css"
                  dangerouslySetInnerHTML={{ __html: stripHtml(item.content) }}
                />
                <div className="">
                  <LinkToIcon strokeColor="blue" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyService;
