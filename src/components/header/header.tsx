"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenu from "./menu-mobile";
import TablePrice from "./table-price";
import { ClockIcon, SaleIcon, SearchIcon, TablePriceIcon } from "../../../public/icon";
import { Service } from "@/type/service";
import { serviceApi } from "@/api-request/serviceAPI";
import { useAppDispatch } from "@/store/hook";
import { setServices } from "@/store/slices/service-slice";
import { Logo } from "@/type/logo";
import { homeApi } from "@/api-request/homeAPI";
import { Category } from "@/type/category";
import { categoryApi } from "@/api-request/categoryAPI";
import { useRouter } from "next/navigation";

function Header({
  listServices,
  listCategories,
  logo,
}: {
  listServices: Service[];
  listCategories: Category[];
  logo: Logo;
}) {
  const [isShowTablePrice, setIsShowTablePricce] = useState(false);
  // const [listServices, setListServices] = useState<Service[]>();
  const dispatch = useAppDispatch();
  // const [categorys, setCategorys] = useState<Category[]>([]);

  useEffect(() => {
    // const fetchAPI = async () => {
    // const listServices = await serviceApi.getAllservices({ limit: 100, page: 1 });
    // const listCategories = await categoryApi.getAllcategory({ limit: 100, page: 1 });
    dispatch(setServices({ services: listServices, categories: listCategories }));
    // setListServices(listServices);
    // setCategorys(listCategories);
    // };
    // fetchAPI();
  }, []);
  const handleShowTablePrice = () => {
    setIsShowTablePricce((pre) => !pre);
  };

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     const data = await homeApi.getLogo();
  //     setLogo(data);
  //   };
  //   fetchAPI();
  // }, []);
  const router = useRouter();
  const handleClick = (item: Category) => {
    router.push(`/service/${item._id}?tag=category`);
    if (typeof window !== "undefined") {
      window.location.href = `/service/${item._id}?tag=category`;
    }
  };
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
              className="flex gap-3 cursor-pointer hover:text-[#f8ab34] transition-all duration-150"
            >
              <TablePriceIcon />
              <span>Bảng giá dịch vụ</span>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <Link href={"/sale"} className="flex gap-3 cursor-pointer hover:text-[#f8ab34] transition-all duration-150">
              <SaleIcon />
              <span>Chương trình Khuyến mãi</span>
            </Link>
            <div></div>
          </div>
        </div>
      </div>

      <div className="bg-[#242424]  z-20 lg:z-0 top-0 left-0 right-0 fixed lg:static border-b border-white lg:mt-[63px]">
        <div className="max-w-[1400px] flex justify-between mx-auto pl-1">
          <div className=" px-4 w-full justify-between    select-none h-[68px] mx-auto items-center flex font-semibold text-lg ">
            <div
              onClick={handleShowTablePrice}
              className="flex gap-3 lg:hidden px-2 lg:px-0 cursor-pointer hover:text-[#f8ab34] transition-all duration-150"
            >
              <TablePriceIcon />
              <span className="hidden lg:block">Bảng giá dịch vụ</span>
            </div>
            <Link href="/" className="relative w-32 z-10 flex items-center aa  lg:w-[216px] h-[55px] ">
              {logo?.images.length && (
                <>
                  <Image
                    alt=""
                    src={logo.images[0]}
                    width={216}
                    height={300}
                    className="absolute w-32 lg:w-full z-2 h-full lg:h-auto object-contain lg:object-cover   lg:top-0"
                  />
                  {logo?.images.length === 2 && (
                    <Image
                      alt=""
                      src={logo.images[1]}
                      width={160}
                      height={300}
                      // className="absolute  h-auto z-3 object-cover top-[calc(30%+16px)] lg:top-[30%] left-1/2 -translate-x-1/2"
                      className="absolute w-32  z-3 object-cover lg:inset-0 lg:w-full"
                    />
                  )}
                </>
              )}
            </Link>
            <Link
              href={"/introduce"}
              // prefetch={true}
              className=" hover:text-[#FFBE27] font-semibold hidden lg:block cursor-pointer underline-animate
          "
            >
              GIỚI THIỆU{" "}
            </Link>
            {listCategories.map((category: Category, index) => {
              const matchServices = listServices?.filter((service) => service.category_id === category._id);
              return (
                <div
                  onClick={() => handleClick(category)}
                  key={category._id}
                  className="hidden  group font-semibold  lg:flex h-full items-center relative  gap-[7px] hover:text-[#FFBE27] cursor-pointer"
                >
                  {category.name}
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
    text-white shadow-[4px_4px_15px_0px_#00000040] max-h-[500px] overflow-auto"
                  >
                    {matchServices?.map((item: Service) => {
                      return (
                        <div key={item._id} className="py-3">
                          <a
                            onClick={(e) => e.stopPropagation()}
                            className="line-clamp-1 overflow-hidden  max-w-full hover:text-[#f8ab34] transition-all duration-200 font-light border-b border-white last:border-transparent"
                            href={`/service/${item._id}`}
                          >
                            {item.name}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <Link
              href={"/advice"}
              className="font-semibold hover:text-[#FFBE27] hidden lg:block  cursor-pointer underline-animate"
            >
              TIN TỨC{" "}
            </Link>

            <Link
              href={"/contact"}
              className="font-semibold hover:text-[#FFBE27] hidden lg:block cursor-pointer underline-animate"
            >
              LIÊN HỆ
            </Link>

            <div className="lg:hidden">
              <div>
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowTablePrice && <TablePrice isShow={isShowTablePrice} onClick={handleShowTablePrice} />}
    </div>
  );
}

export default Header;
