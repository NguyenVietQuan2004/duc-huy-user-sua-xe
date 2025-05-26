import Image from "next/image";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedIcon, PhoneIcon, XIcon, YoutubeIcon } from "../../public/icon";
import Link from "next/link";
import { services } from "@/data";

const centers = [
  {
    name: "Trung tâm Trương Công Giai: ",
    address: "82 Trương Công Giai, Dịch Vọng, Cầu Giấy, Hà Nội.",
  },
  {
    name: "Trung tâm Trần Kim Xuyến: ",
    address: "22 Trần Kim Xuyến, Yên Hoà, Cầu Giấy, Hà Nội.",
  },
  {
    name: "Trung tâm Kiêu Kỵ: ",
    address: "T53 Làng nghề tập trung Kiêu Kỵ, Gia Lâm, Hà Nội (cách TTTM Vincom Mega Mall – Ocean Park 2km)",
  },
];

function Footer() {
  return (
    <div className="bg-[#242424] pt-16 lg:pt-[100px] pb-[64px] text-white ">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid gap-3 px-4   [grid-template-columns:repeat(15,1fr)]">
          <div className="cols-[repeat(15,_1fr)] lg:col-span-5 flex flex-col gap-6">
            <div>
              <Image
                alt=""
                width={164}
                height={80}
                src={"https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625622.svg"}
                className="object-cover "
              />
            </div>
            <div className="flex items-center gap-4 hover:opacity-80 cursor-pointer">
              <PhoneIcon /> 0763948610
            </div>
            <div className="flex items-center gap-4 hover:opacity-80 cursor-pointer">
              <EmailIcon /> hange@gmail.com
            </div>
            <div className="flex gap-6">
              <Link href={""} className="hover:opacity-80">
                {" "}
                <FacebookIcon />
              </Link>
              <Link href={""} className="hover:opacity-80">
                <YoutubeIcon />
              </Link>
              <Link href={""} className="hover:opacity-80">
                <InstagramIcon />
              </Link>
              <Link href={""} className="hover:opacity-80">
                {" "}
                <LinkedIcon />
              </Link>
              <Link href={""} className="hover:opacity-80">
                {" "}
                <XIcon />
              </Link>
            </div>
          </div>
          <div className="col-span-4 hidden lg:block">
            <div className="font-bold">DỊCH VỤ CỦA NHẬT PHÁT AUTO</div>
            <ul className="flex flex-col gap-3 mt-4 text-start ml-5 font-light">
              {services.map((item) => {
                return (
                  <li key={item.key} className="list-disc hover:opacity-70">
                    <Link href={""}>{item.key}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-6 hidden lg:block">
            <div className="font-bold ">HỆ THỐNG CÁC TRUNG TÂM DỊCH VỤ NHẬT PHÁT AUTO</div>

            {centers.map((item) => {
              return (
                <Link key={item.name} href={""} className="flex hover:opacity-70 items-start mt-4 gap-3">
                  <Image
                    alt=""
                    width={20}
                    height={80}
                    src={"https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/map.svg"}
                  />
                  <div>
                    <span className="font-bold">{item.name}</span>
                    <span className="font-light">{item.address}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="border-t border-[#D51921] px-4  py-4 pt-6 lg:py-0 mt-8 lg:pt-4 flex justify-between items-center">
          <div className="font-light">© 2024 Nhat Phat Auto Co., Ltd. giữ bản quyền.</div>
          <div className="hidden items-center gap-3  lg:flex">
            <Link href={""} className="hover:text-[#d51921] font-light">
              Bảng giá Dịch vụ
            </Link>
            <div>|</div>
            <Link href={""} className="hover:text-[#d51921] font-light">
              {" "}
              Chương trình Khuyến mại
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
