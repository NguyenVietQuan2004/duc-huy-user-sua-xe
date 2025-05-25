import Image from "next/image";
import { LinkToIcon } from "../../../public/icon";
import Link from "next/link";

const MyServiceData = [
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Frame-2.svg",
    text: "THAY THẾ LỐP XE CHÍNH HÃNG",
    linkTo: "/service/thaylop",
    sub: "Cung cấp và thay thế lốp xe chính hãng chất lượng cao như Michelin, Bridgestone, Matrax...",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-6.svg",
    text: "CÂN BĂNG ĐỒNG, ĐẠO LỐP XE",
    linkTo: "/service/canbang",
    sub: "Phát hiện mòn cân bằng xe, xử lý cân bằng trọng lượng lốp, làm lại lớp vỏ cao su.",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_3-1.svg",
    text: "CÂN CHỈNH ĐỘ CHÙM HUNTER",
    linkTo: "/service/canchinh",
    sub: "Kiểm tra & khôi phục nguyên trạng gay lốp mòn không đều, lệch vọ lăng, nhào lái.",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-7.svg",
    text: "LÁNG DÍA, THAY MÃ PHANH",
    linkTo: "/service/langdia",
    sub: "Xử lý tinh trạng khi phanh tao tiếng ồn, rung, hiếu suất kém, đảm bảo an toàn khi di chuyển.",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-1.svg",
    text: "THAY DẦU XE, BẢO DƯỠNG NHANH",
    linkTo: "/service/thaydauxe",
    sub: "Bảo dưỡng, thay thế cho xe nhur dầu, nhớt, ác quy...bảng sản phẩm chính hãng.",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Clip-path-group-3.svg",
    text: "DỊCH VỤ CHĂM SÓC XE KHÁC",
    linkTo: "/service/chamsoc",
    sub: "Kiểm tra, phát hiện và cung cấp giải pháp chăm sóc xe bảng các sản phẩm chính hãng.",
  },
];
function MyService() {
  return (
    <div className="relative w-full ">
      <div
        className="absolute inset-0 bg-cover bg-center h-[500px]  "
        style={{
          backgroundImage: `url(https://nhatphatauto.vn/wp-content/uploads/2024/05/Mask-group-1-compressed.jpg)`,
        }}
      />
      {/* Thêm nội dung hoặc một div trống để component hợp lệ */}
      <div className="relative z-10  p-4 max-w-[1140px] mx-auto pt-[180px] pb-[250px] ">
        <div className="text-[#124d9b] text-[36px] font-bold">DỊCH VỤ CỦA CHÚNG TÔI</div>
        <div className="text-[24px] font-light">Nhật Phát Auto cung cấp các dịch vụ với tiêu chuẩn quốc tế</div>
        <div className="grid grid-cols-1 lg:grid-cols-3  mt-20 ">
          {MyServiceData.map((item, index) => {
            return (
              <Link
                href={item.linkTo}
                key={index}
                className={`
                ${
                  index === 1
                    ? "border border-transparent border-t-black lg:border-black lg:border-t-transparent lg:border-b-transparent"
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
                <Image alt="" width={80} height={80} src={item.image} className="max-w-20 max-h-20" />
                <div className="font-bold text-[22px]">{item.text}</div>
                <div>{item.sub}</div>
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
