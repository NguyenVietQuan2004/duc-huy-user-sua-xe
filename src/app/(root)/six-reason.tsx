import { SixReasonData } from "@/data";
import Image from "next/image";

function SixReason() {
  return (
    <div className="pt-[68px] px-4  gap-10 pb-[110px] max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-7">
      <div className="lg:col-span-3">
        <Image
          alt=""
          width={500}
          height={500}
          src={"https://nhatphatauto.vn/wp-content/uploads/2024/06/NhatPhat-10year.jpg"}
          className="w-full h-full"
        />
      </div>
      <div className="lg:col-span-4">
        <div className="text-[#d51921] font-bold text-[36px]">
          6 LÝ DO NHẬT PHÁT AUTO LÀ LỰA CHỌN TỐT NHẤT DÀNH CHO BẠN
        </div>
        <div className="text-lg font-semibold mb-[25px]">
          Hành trình chinh phục khách hàng của Nhật Phát Auto bắt đầu từ năm 2013, chính sự ủng hộ, yêu mến của tất cả
          quý khách hàng là động lực lớn nhất để chúng tôi liên tục hoàn thiện và phát triển trở thành hệ thống trung
          tâm lốp xe hàng đầu tại Việt Nam.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-10">
          {SixReasonData.map((item, index) => {
            return (
              <div key={index} className="flex gap-2">
                <div>
                  <Image alt="" width={20} height={200} src={item.image} className="min-w-[20px] mt-[5px]" />
                </div>
                <div className="font-light text-base">{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SixReason;
