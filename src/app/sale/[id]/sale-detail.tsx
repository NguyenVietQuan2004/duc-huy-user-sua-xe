"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Sale } from "@/type/sale";
import { useEffect, useState } from "react";
import AdviceOtherCard from "@/components/advice-other-card";
import { formatDateToDDMMYYYY, injectImageRandomly } from "@/lib/utils";
import { saleApi } from "@/api-request/saleAPI";

function ChuongtrinhKMDetail({ id }: { id: string }) {
  const [sale, setSale] = useState<Sale>();

  useEffect(() => {
    const fetchAPI = async () => {
      const sale = await saleApi.getSaleById({ saleId: id });
      setSale(sale);
    };
    fetchAPI();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-[100px] px-4  ">
      <div className="grid grid-cols-10 gap-10">
        <div className="px-4 lg:px-0 pt-20 lg:pt-0 col-span-12 lg:col-span-7">
          <div className="text-[36px] font-light">{sale?.title}</div>
          <div className="text-[14px] flex justify-between font-light my-4">
            <div>{sale?.name}</div>
            <div>{formatDateToDDMMYYYY(sale?.created_at.toString())}</div>
          </div>

          {sale?.content && (
            <div
              className="text-lg overflow-hidden text-wrap"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: sale.content,
              }}
            />
          )}
        </div>

        <div className="hidden lg:block col-span-3">
          <AdviceOtherCard />
        </div>
      </div>
    </div>
  );
}

export default ChuongtrinhKMDetail;
