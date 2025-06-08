"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { dataTablePriceArr } from "@/data";
import { CloseIcon } from "../../../public/icon";
import useModalBooking from "@/hooks/use-model-booking";
import { Logo } from "@/type/logo";
import { homeApi } from "@/api-request/homeAPI";

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

  const [logo, setLogo] = useState<Logo>();

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await homeApi.getLogo();
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
        className={`max-w-[650px]  hide-scrollbar overflow-auto 
          max-h-[98vh] bg-white shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]
           rounded-2xl px-10 pt-1 pb-28 lg:pb-10  }  `}
      >
        <div className="flex justify-center relative">
          <div className="relative w-[216px] h-[65px] ">
            {/* <Image
              alt=""
              src="https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/images/bg-logo.png"
              width={216}
              height={300}
              className="absolute z-2 top-0"
            />
            <Image
              alt=""
              src="https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625622.svg"
              width={160}
              height={300}
              className="absolute h-auto z-3 top-[30%] object-cover left-1/2 -translate-x-1/2"
            /> */}

            {logo?.images.length === 2 && (
              <>
                <Image alt="" src={logo.images[0]} width={216} height={300} className="absolute z-2 top-0" />
                <Image
                  alt=""
                  src={logo.images[1]}
                  width={160}
                  height={300}
                  className="absolute h-auto z-3 top-[30%] object-cover left-1/2 -translate-x-1/2"
                />
              </>
            )}
          </div>
          <div
            onClick={onClick}
            className="cursor-pointer hover:opacity-55 transition-all duration-200 absolute top-[10px] -right-[26px]"
          >
            <CloseIcon />
          </div>
        </div>

        <div className="mt-[50px] mb-[24px]">
          <div className="pb-[10px] border-b text-[#d51921] text-center border-[#D51921] text-2xl font-bold">
            BẢNG GIÁ DỊCH VỤ TẠI NHẬT PHÁT AUTO
          </div>
        </div>

        {/* table */}
        <div className="">
          {dataTablePriceArr.map((item, index) => (
            <div key={index} style={{ marginBottom: "40px" }} className="border-b border-[#D51921] pb-[50px]">
              <h2 className="text-lg text-[#124d9b] font-bold flex items-center gap-3">
                <Image alt="" src={item.image} width={24} height={24} />
                {item.key}
              </h2>
              {/* <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}> */}
              <table cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                  <tr className="border-b border-[#212529]">
                    {item.value.length > 0 &&
                      Object.keys(item.value[0]).map((header) => (
                        <th className="text-start" key={header}>
                          {header}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {item.value.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-[#212529] font-light">
                      {Object.values(row).map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
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
          className="w-full bg-[#d51921] text-white hover:bg-white hover:text-[#d51921] border border-transparent hover:border-[#d51921] transition-all duration-300 "
        >
          ĐẶT LỊCH HẸN TỚI NHẬT PHÁT AUTO
        </Button>
      </div>
    </div>
  );
}

export default TablePrice;
