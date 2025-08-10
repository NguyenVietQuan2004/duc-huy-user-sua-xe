"use client";
import Link from "next/link";
import Image from "next/image";
import { EmailIcon, FacebookIcon, PhoneIcon, YoutubeIcon } from "../../public/icon";
import { useAppSelector } from "@/store/hook";
import { useEffect, useState } from "react";
import { Center } from "@/type/center";
import { homeApi } from "@/api-request/homeAPI";
import { Address } from "@/type/address";

function Footer({ centers, addresses }: { centers: Center[]; addresses: Address[] }) {
  const services = useAppSelector((state) => state.service.categories);

  // const [centers, setCenter] = useState<Center[]>();
  // const [addresses, setAddresses] = useState<Address[]>();

  useEffect(() => {
    const fetchAPI = async () => {
      // const centers = await homeApi.getCenters();
      // const addresses = await homeApi.getAddresses();
      // setAddresses(addresses);
      // setCenter(centers);
    };
    fetchAPI();
  }, []);
  return (
    <div className="bg-[#242424] pt-16 lg:pt-[100px] px-2 lg:px-10 overflow-hidden pb-[64px] text-white ">
      <div className="max-w-[1240px] mx-auto">
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
                  {item.name === "Email" ? <EmailIcon /> : <PhoneIcon />}

                  <span className="line-clamp-1">{item.address}</span>
                </div>
              );
            })}

            <div className="flex gap-6">
              <Link target="_blank" href={"https://www.facebook.com/chamsocxebmb"} className="hover:opacity-80">
                {" "}
                <FacebookIcon />
              </Link>
              <Link
                target="_blank"
                href={"https://www.youtube.com/@bmbbmb8979?si=j3WnpjN6GoW7Q3l0"}
                className="hover:opacity-80"
              >
                <YoutubeIcon />
              </Link>
              <Link
                target="_blank"
                href={"https://www.tiktok.com/@bmbcar?_t=ZS-8y3A17sfsRt&_r=1"}
                className="hover:opacity-80"
              >
                <svg height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                  <path
                    fill="white"
                    d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-span-5 hidden lg:block">
            <div className="font-bold">DỊCH VỤ CỦA CHÚNG TÔI</div>
            <ul className="flex flex-col gap-3 mt-4 text-start ml-5 font-light">
              {services?.map((item) => {
                return (
                  <li key={item._id} className="list-disc hover:opacity-70">
                    <Link href={`/service/${item._id}?tag=category`} className="line-clamp-1">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-5 hidden lg:block">
            <div className="font-bold ">TRUNG TÂM CHĂM SÓC XE BMB CAR CARE</div>

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
