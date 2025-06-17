"use client";
import Link from "next/link";
import Image from "next/image";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedIcon, PhoneIcon, XIcon, YoutubeIcon } from "../../public/icon";
import { useAppSelector } from "@/store/hook";
import { useEffect, useState } from "react";
import { Center } from "@/type/center";
import { homeApi } from "@/api-request/homeAPI";
import { Address } from "@/type/address";
import { Logo } from "@/type/logo";

function Footer() {
  const services = useAppSelector((state) => state.service.services);
  const handleOnclick = () => {};

  const [centers, setCenter] = useState<Center[]>();
  const [addresses, setAddresses] = useState<Address[]>();
  const [logo, setLogo] = useState<Logo>();

  useEffect(() => {
    const fetchAPI = async () => {
      const centers = await homeApi.getCenters();
      const addresses = await homeApi.getAddresses();
      const logo = await homeApi.getLogo();
      setLogo(logo);
      setAddresses(addresses);
      setCenter(centers);
    };
    fetchAPI();
  }, []);
  return (
    <div className="bg-[#242424] pt-16 lg:pt-[100px] px-2 lg:px-10 overflow-hidden pb-[64px] text-white ">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid gap-3 px-4   [grid-template-columns:repeat(15,1fr)]">
          <div className="cols-[repeat(15,_1fr)] lg:col-span-5 flex flex-col gap-6">
            <div>
              <Image
                alt=""
                width={164}
                height={80}
                src={
                  "https://res.cloudinary.com/dbuerrrqv/image/upload/v1750091661/moto-automate/banner-images-1750091660869-1.png"
                }
                className="object-cover "
              />
            </div>
            {addresses?.map((item: Address) => {
              return (
                <div className="flex items-center gap-4  hover:opacity-80 cursor-pointer" key={item._id}>
                  {/* <EmailIcon /> */}

                  <span className="line-clamp-1">{item.address}</span>
                </div>
              );
            })}

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
            <div className="font-bold">DỊCH VỤ CỦA TRUNG TÂM BMB CAR CARE</div>
            <ul className="flex flex-col gap-3 mt-4 text-start ml-5 font-light">
              {services?.map((item) => {
                return (
                  <li key={item._id} className="list-disc hover:opacity-70">
                    <Link href={`/service/${item._id}`} className="line-clamp-1">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-6 hidden lg:block">
            <div className="font-bold ">HỆ THỐNG CÁC TRUNG TÂM DỊCH VỤ TRUNG TÂM BMB CAR CARE</div>

            {centers?.map((item) => {
              return (
                <Link key={item._id} href={""} className="flex hover:opacity-70 items-start mt-4 gap-3">
                  <Image
                    alt=""
                    width={20}
                    height={80}
                    src={"https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/map.svg"}
                  />
                  <div className="max-w-full">
                    <span className="font-semibold line-clamp-2 text-wrap break-words max-w-full">{item.name}</span>
                    {/* <span className="font-light">{item.address}</span> */}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* <div className="border-t border-[#f8ab34] px-4  py-4 pt-6 lg:py-0 mt-8 lg:pt-4 flex justify-between items-center">
          <div className="font-light">© 2024 Nhat Phat Auto Co., Ltd. giữ bản quyền.</div>
          <div className="hidden items-center gap-3  lg:flex">
            <Link href={"#"} onClick={handleOnclick} className="hover:text-[#f8ab34] font-light">
              Bảng giá Dịch vụ
            </Link>
            <div>|</div>
            <Link href={"/sale"} className="hover:text-[#f8ab34] font-light">
              {" "}
              Chương trình Khuyến mãi
            </Link>
          </div>
         </div> */}
      </div>
    </div>
  );
}

export default Footer;
