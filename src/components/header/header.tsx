"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenu from "./menu-mobile";
import TablePrice from "./table-price";
import SearchForm from "./search-input";
import { ClockIcon, SaleIcon, SearchIcon, TablePriceIcon } from "../../../public/icon";
import { Service } from "@/type/service";
import { serviceApi } from "@/api-request/serviceAPI";
import { useAppDispatch } from "@/store/hook";
import { setServices } from "@/store/slices/service-slice";
import { Logo } from "@/type/logo";
import { homeApi } from "@/api-request/homeAPI";
// const service = [
//   { key: "Thay thế lốp xe chính hãng", value: "/service/thaylop" },
//   { key: "Cân bằng động, đảo lốp xe", value: "/service/canbang" },
//   { key: "Cân chỉnh độ chụm Hunter", value: "/service/canchinh" },
//   { key: "Láng đĩa, thay má phanh", value: "/service/langdia" },
//   { key: "Thay dầu xe, bảo dưỡng nhanh", value: "/service/thaydauxe" },
//   { key: "Dịch vụ chăm sóc xe khác", value: "/service/chamsoc" },
// ];

function Header() {
  const [isShowTablePrice, setIsShowTablePricce] = useState(false);
  const [isShowSearchInput, setIsShowSearchInput] = useState(false);
  const [listServices, setListServices] = useState<Service[]>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchAPI = async () => {
      const listServices = await serviceApi.getAllservices({ limit: 100, page: 1 });
      dispatch(setServices(listServices));
      setListServices(listServices);
    };
    fetchAPI();
  }, []);
  const handleShowTablePrice = () => {
    setIsShowTablePricce((pre) => !pre);
  };
  const handleOpenSearchInput = () => {
    setIsShowSearchInput((pre) => !pre);
  };

  const [logo, setLogo] = useState<Logo>();

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await homeApi.getLogo();
      setLogo(data);
    };
    fetchAPI();
  }, []);

  return (
    <div className="text-white">
      {/*  */}
      <div className="bg-black hidden lg:block py-4 fixed top-0 left-0 right-0 z-20">
        <div
          className=" flex
       text-white justify-between items-center max-w-[1100px] px-3  mx-auto font-light"
        >
          <div className="flex items-center gap-7 ">
            <div className="flex gap-3">
              <ClockIcon />
              8h00 - 18h00
            </div>
            <div className="w-[0.5px] h-[20px] bg-white"></div>
            <div
              onClick={handleShowTablePrice}
              className="flex gap-3 cursor-pointer hover:text-[#D51921] transition-all duration-150"
            >
              <TablePriceIcon />
              <span>Bảng giá dịch vụ</span>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <Link href={"/sale"} className="flex gap-3 cursor-pointer hover:text-[#D51921] transition-all duration-150">
              <SaleIcon />
              <span>Chương trình Khuyến mãi</span>
            </Link>
            {/* <div className="w-[0.5px] h-[20px] bg-white"></div> */}
            <div></div>
            {/* <div className="flex gap-3 relative cursor-pointer hover:text-[#D51921] transition-all duration-150">
              <SearchIcon />
              <span onClick={handleOpenSearchInput} className="select-none">
                Tìm kiếm
              </span>
              {isShowSearchInput && <SearchForm onClick={handleOpenSearchInput} />}
            </div> */}
          </div>
        </div>
      </div>

      <div className="bg-[#242424] z-20 lg:z-0 top-0 left-0 right-0 fixed lg:static border-b border-white lg:mt-[57px]">
        <div className="max-w-[900px] px-4  select-none h-[65px] items-center flex justify-between font-semibold text-lg mx-auto">
          <div
            onClick={handleShowTablePrice}
            className="flex gap-3 lg:hidden px-2 lg:px-0 cursor-pointer hover:text-[#D51921] transition-all duration-150"
          >
            <TablePriceIcon />
            <span className="hidden lg:block">Bảng giá dịch vụ</span>
          </div>

          <div className="hidden  group  lg:flex h-full items-center relative  gap-[7px] hover:text-[#FFBE27] cursor-pointer">
            DỊCH VỤ
            <Image
              alt=""
              src={"https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/down.svg"}
              width={10}
              height={10}
              className="mt-1"
            />
            <div
              className="absolute hidden lg:block bg-[#242424] min-w-[310px] text-lg z-10 px-6 
    py-3 top-[95%] opacity-0 scale-95 invisible group-hover:opacity-100 
    group-hover:scale-100 group-hover:visible transition-all duration-200 
    text-white shadow-[4px_4px_15px_0px_#00000040]"
            >
              {listServices?.map((item) => {
                return (
                  <div key={item._id} className="py-3">
                    <Link
                      className="line-clamp-1 overflow-hidden  max-w-full hover:text-[#D51921] transition-all duration-200 font-light border-b border-white last:border-transparent"
                      href={`/service/${item._id}`}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <Link href={"/advice"} className=" hover:text-[#FFBE27] hidden lg:block  cursor-pointer underline-animate">
            TIN TỨC{" "}
          </Link>
          <Link href="/" className="relative w-32 z-10  lg:w-[216px] h-[65px] ">
            {/* o day */}
            {logo?.images.length === 2 && (
              <>
                <Image
                  alt=""
                  src={logo.images[0]}
                  width={216}
                  height={300}
                  className="absolute w-32 lg:w-full z-2 top-0 lg:top-0"
                />
                <Image
                  alt=""
                  src={logo.images[1]}
                  width={160}
                  height={300}
                  // className="absolute  h-auto z-3 object-cover top-[calc(30%+16px)] lg:top-[30%] left-1/2 -translate-x-1/2"
                  className="absolute w-32  z-3 object-cover inset-0 lg:w-full"
                />
              </>
            )}
          </Link>

          <Link
            href={"/introduce"}
            className=" hover:text-[#FFBE27] hidden lg:block cursor-pointer underline-animate
          "
          >
            GIỚI THIỆU{" "}
          </Link>
          <Link href={"/contact"} className=" hover:text-[#FFBE27] hidden lg:block cursor-pointer underline-animate">
            LIÊN HỆ
          </Link>

          <div className="lg:hidden">
            <div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
      {isShowTablePrice && <TablePrice isShow={isShowTablePrice} onClick={handleShowTablePrice} />}
    </div>
  );
}

export default Header;
