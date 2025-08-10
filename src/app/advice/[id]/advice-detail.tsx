"use client";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import SlideSaleCard from "@/components/slide-sale-card";
import AdviceOtherCard from "@/components/advice-other-card";
import { blogApi } from "@/api-request/blogApi";
import { formatDateToDDMMYYYY } from "@/lib/utils";
import { Blog } from "@/type/blog";
import { Sale } from "@/type/sale";

function AdviceDetail({ sales, advice }: { sales: Sale[]; advice: Blog }) {
  return (
    <div className="max-w-[1200px] mx-auto  py-[100px] lg:px-4">
      <div className="grid grid-cols-10 lg:gap-10">
        <div className="px-4 max-w-full lg:px-0 pt-16 lg:pt-0 col-span-10 lg:col-span-7">
          <div className="text-[36px] font-light">{advice?.title}</div>
          <div className="text-[14px] flex justify-between font-light my-4">
            <div>{advice?.name}</div>
            <div>{formatDateToDDMMYYYY(advice?.created_at.toString())}</div>
          </div>

          {advice?.content && (
            <div
              className="text-lg max-w-full overflow-hidden font text-wrap"
              dangerouslySetInnerHTML={{
                __html: advice.content,
              }}
            />
          )}
        </div>

        <div className="hidden lg:block col-span-3">
          <SlideSaleCard sales={sales} />
          <AdviceOtherCard />
        </div>
      </div>
    </div>
  );
}

export default AdviceDetail;
