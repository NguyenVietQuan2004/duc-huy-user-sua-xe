"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { homeApi } from "@/api-request/homeAPI";
import { Reason } from "@/type/reason";
import { reasonIcon } from "@/data";

function SixReason() {
  const [hasMounted, setHasMounted] = useState(false);
  const [image, imageInView] = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const showAnimation = hasMounted && imageInView;

  const [reason, setReason] = useState<Reason>();

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await homeApi.getReason();
      setReason(data);
    };
    fetchAPI();
  }, []);

  return (
    <div
      ref={image}
      className="pt-[68px] px-4  gap-10 pb-[110px] max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-7"
    >
      <div
        className={`lg:col-span-3 ${
          showAnimation ? "opacity-100 -left-0 " : "opacity-0  -left-32"
        } duration-300 lg:relative`}
      >
        {reason?.images?.length && (
          <Image alt="" width={500} height={500} src={reason.images[0]} className="w-full h-full" />
        )}
      </div>
      <div
        className={`lg:col-span-4 ${
          imageInView ? "opacity-100 -right-0" : "opacity-0 -right-32"
        } duration-300 lg:relative`}
      >
        <div className="text-[#d51921] font-bold line-clamp-3 text-[36px]">{reason?.title}</div>
        <div className="text-lg font-semibold mb-[25px] line-clamp-3">{reason?.content}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-10">
          {reason?.reason?.map((item, index) => {
            return (
              <div key={index} className="flex gap-2">
                <div>
                  <Image alt="" width={20} height={200} src={reasonIcon} className="min-w-[20px] mt-[5px]" />
                </div>
                <div className="font-light text-base">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SixReason;
