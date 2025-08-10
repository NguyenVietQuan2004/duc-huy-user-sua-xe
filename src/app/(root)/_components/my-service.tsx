"use client";
import Link from "next/link";
import Image from "next/image";
import { LinkToIcon } from "../../../../public/icon";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "@/store/hook";
import { servicesIcon } from "@/data";

function MyService() {
  const [image, imageInView] = useInView({
    threshold: 0.001,
  });
  const services = useAppSelector((state) => [...state.service.categories]);
  return (
    <div
      ref={image}
      className={`  relative w-full lg:-mt-[180px] duration-300 ${
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
      <div className="relative z-10  p-4 max-w-[1140px] mx-auto pt-[100px] pb-20 lg:pb-[100px] ">
        <div className="text-[#124d9b] text-[36px] font-bold">DỊCH VỤ CỦA CHÚNG TÔI</div>
        <div className="text-[24px] font-light">Trung tâm BMB Car Carecung cấp các dịch vụ với tiêu chuẩn quốc tế</div>
        <div className="grid grid-cols-1 lg:grid-cols-3  mt-20 ">
          {services?.length < 6 &&
            services.map((item, index) => {
              if (index > 2) return null;
              return (
                <Link
                  href={`/service/${item._id}?tag=category`}
                  key={index}
                  className={` group
               py-[15px] hover:text-[#f8ab34] text-center px-10 flex flex-col gap-4 items-center               }
               `}
                >
                  {servicesIcon.length ? (
                    <Image
                      alt=""
                      width={80}
                      height={80}
                      src={servicesIcon[index].image}
                      className="max-w-20 object-contain max-h-[90px] h-[90px] group-hover:animate-shake"
                    />
                  ) : (
                    <div>icon</div>
                  )}
                  <div className="font-bold text-[22px] lg:h-[100px] line-clamp-3">{item.name}</div>
                  {/* <div>{item.content}</div> */}
                  {/* <div
                    className="font-light line-clamp-3 text-start-css"
                    dangerouslySetInnerHTML={{ __html: stripHtml(item.content) }}
                  /> */}

                  <div className="mt-auto">
                    <LinkToIcon strokeColor="#124d9b" />
                  </div>
                </Link>
              );
            })}
        </div>
        {services.length && (
          <Link
            href={`/service/${services[0]._id}?tag=category`}
            className="absolute hover:underline text-[#124d9b] bottom-4 left-1/2 -translate-x-1/2"
          >
            Xem thêm
          </Link>
        )}
      </div>
    </div>
  );
}

export default MyService;
