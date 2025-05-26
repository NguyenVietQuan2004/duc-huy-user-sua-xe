import Link from "next/link";
import ServiceDetail from "./service-details";
import { dichvu, services } from "@/data";
import Image from "next/image";
import ButtonClient from "./button-client";
type Params = Promise<{ tendichvu: string }>;

export default async function DichVu({ params }: { params: Params }) {
  const { tendichvu } = await params;
  console.log(tendichvu);
  // goi api lay dich vu theo ten
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
        <div className="relative max-w-[1140px] py-[120px] pt-[160px] lg:pt-[120px] mx-auto px-4 ">
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
              <ul className="flex flex-col divide-y text-[18px]">
                {services.map((item) => (
                  <li
                    key={item.key}
                    className={`flex items-center hover:opacity-50 transition-all duration-300 gap-2 py-3 ${
                      tendichvu === item.value.split("/")[2] ? "text-[#d51921]" : ""
                    }`}
                  >
                    <Link href={item.value} className="flex items-center gap-2">
                      <Image width={100} height={100} src={item.image} alt="icon" className="w-5 h-5" />
                      <span>{item.key}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="h-[1px] bg-[#d51921] my-4" />

              <ButtonClient />
            </div>
          </div>

          <div className="lg:relative z-10  lg:mt-[200px]">
            <div className="text-4xl mb-7 font-semibold text-[#d51921]">
              {"CUNG CẤP LỐP XE CHÍNH HÃNG VỚI DỊCH VỤ TIÊU CHUẨN QUỐC TẾ"}
            </div>
            <div className="font-normal">
              {" "}
              • Chi phí: 2.000.000đ – 10.000.000đ (tùy loại xe/lốp) <br />• Thời gian: 30 phút
            </div>
          </div>
        </div>
        <ServiceDetail dichvu={dichvu} />
      </div>
    </div>
  );
}
