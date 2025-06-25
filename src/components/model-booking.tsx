"use client";
import { useEffect, useRef, useState } from "react";
import Form from "@/app/(root)/_components/form";
import useModalBooking from "@/hooks/use-model-booking";
import { Center } from "@/type/center";
import { homeApi } from "@/api-request/homeAPI";

function ModelBooking() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { isShowModelBooking, setIsShowModelBooking } = useModalBooking();

  const [centers, setcenters] = useState<Center[]>();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  useEffect(() => {
    const fetchAPI = async () => {
      const centers = await homeApi.getCenters();
      setcenters(centers);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    if (isShowModelBooking) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow; // khôi phục khi component bị unmount
      };
    }
  }, [isShowModelBooking]);
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isSelectOpen) return;
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      setIsShowModelBooking(false);
    }
  };

  if (!isShowModelBooking) return;
  return (
    <div
      onClick={handleOverlayClick}
      className="fixed z-[999] inset-0 flex justify-center items-center bg-black bg-opacity-70"
    >
      <div ref={contentRef}>
        <Form hasCloseIcon={true} centers={centers} setIsSelectOpen={setIsSelectOpen} />
      </div>
    </div>
  );
}

export default ModelBooking;
