"use client";
import dynamic from "next/dynamic";
import { Dichvu } from "@/type/dichvu";
import { Button } from "@/components/ui/button";
import useModalBooking from "@/hooks/use-model-booking";

const ClientSafeHTML = dynamic(() => import("./client-safe-html"), { ssr: false });

function ServiceDetail({ dichvu }: { dichvu: Dichvu }) {
  const { setIsShowModelBooking } = useModalBooking();
  return (
    <div className="text-lg  font-light  px-4  lg:-mt-[500px]">
      {dichvu?.content && <ClientSafeHTML content={dichvu.content} images={dichvu.images} />}

      <Button
        variant={"outline"}
        type="submit"
        onClick={() => setIsShowModelBooking(true)}
        className="w-full mt-6 bg-[#d51921] border border-transparent transition-all duration-500 hover:border-[#d51921]  text-white font-semibold py-5 rounded hover:bg-white hover:text-[#d51921] "
      >
        ĐẶT LỊCH HẸN TỚI NHẬT PHÁT AUTO
      </Button>
    </div>
  );
}

export default ServiceDetail;
