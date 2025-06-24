"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../../public/icon";
import useModalBooking from "@/hooks/use-model-booking";
import { Logo } from "@/type/logo";
import { homeApi } from "@/api-request/homeAPI";
import { priceServiceApi } from "@/api-request/tableAPI";
import { PriceServiceType } from "@/type/tablePrice";

function TablePrice({ onClick, isShow }: { onClick: () => void; isShow: boolean }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { setIsShowModelBooking } = useModalBooking();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      onClick(); // Click ngoài khung nội dung
    }
  };
  // Chặn scroll khi mở overlay

  useEffect(() => {
    if (isShow) {
      // Lưu trạng thái overflow cũ (nếu có)
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow; // khôi phục khi component bị unmount
      };
    }
  }, [isShow]);
  const headers = ["Loại xe", "Đơn vị tính", "Giá"];
  const [logo, setLogo] = useState<Logo>();
  const [table, setTable] = useState<PriceServiceType[]>();
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await homeApi.getLogo();
      const response = await priceServiceApi.getAll();
      setTable(response.data);
      setLogo(data);
    };
    fetchAPI();
  }, []);

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed text-[#212529] z-20  bg-black flex items-center justify-center bg-opacity-70 inset-0"
    >
      <div
        ref={contentRef}
        className={`max-w-[650px] w-full xl:w-auto xl:min-w-[650px]  hide-scrollbar overflow-auto 
          max-h-[98vh] bg-white shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]
           rounded-2xl px-4 lg:px-10 pt-1 pb-28 lg:pb-10  }  `}
      >
        <div className="flex justify-center relative">
          <div className="relative w-[128px] lg:w-[216px] h-[65px] ">
            {logo?.images.length && (
              <>
                <Image
                  alt=""
                  src={logo.images[0]}
                  width={216}
                  height={300}
                  className="absolute w-32 lg:w-full z-2 top-0 lg:top-0"
                />
                {logo?.images.length === 2 && (
                  <Image
                    alt=""
                    src={logo.images[1]}
                    width={160}
                    height={300}
                    // className="absolute  h-auto z-3 object-cover top-[calc(30%+16px)] lg:top-[30%] left-1/2 -translate-x-1/2"
                    className="absolute w-32  z-3 object-cover inset-0 lg:w-full"
                  />
                )}
              </>
            )}
          </div>
          <div
            onClick={onClick}
            className="cursor-pointer  hover:opacity-55 transition-all duration-200 absolute top-[10px] -right-[0] lg:-right-[26px]"
          >
            <CloseIcon />
          </div>
        </div>

        <div className="mt-[50px] mb-[24px]">
          <div className="pb-[10px] border-b text-[#f8ab34] text-center border-[#f8ab34] text-2xl font-bold">
            BẢNG GIÁ DỊCH VỤ
          </div>
        </div>

        {/* table */}
        <div className="">
          {table?.map((item: PriceServiceType, index) => (
            <div key={index} style={{ marginBottom: "40px" }} className="border-b border-[#f8ab34] pb-[50px]">
              <h2 className="text-lg text-[#124d9b] font-bold flex items-center gap-3">
                {/* <Image alt="" src={item.image} width={24} height={24} /> */}
                <span className="text-wrap break-words max-w-full"> {item.name_service}</span>
              </h2>
              {/* <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}> */}
              <table cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                  <tr className="border-b border-[#212529]">
                    {headers.map((header) => (
                      <th className="text-start" key={header}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.vehicle_type.map((vehicle, index) => (
                    <tr key={index} className="border-b border-[#212529] font-light">
                      <td className="max-w-[100px] overflow-hidden break-words whitespace-normal">{vehicle}</td>
                      <td className="max-w-[100px] overflow-hidden break-words whitespace-normal">
                        {item.unit[index] || "-"}
                      </td>
                      <td className="max-w-[100px] overflow-hidden break-words whitespace-normal">
                        {item.price[index] || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <Button
          onClick={() => setIsShowModelBooking(true)}
          variant={"outline"}
          className="w-full bg-[#f8ab34] text-white hover:bg-white hover:text-[#f8ab34] border border-transparent hover:border-[#f8ab34] transition-all duration-300 "
        >
          ĐẶT LỊCH HẸN TỚI TRUNG TÂM BMB CAR CARE
        </Button>
      </div>
    </div>
  );
}

export default TablePrice;
