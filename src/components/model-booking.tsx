"use client";
import { useEffect, useRef } from "react";
import Form from "@/app/(root)/_components/form";
import useModalBooking from "@/hooks/use-model-booking";

function ModelBooking() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { isShowModelBooking, setIsShowModelBooking } = useModalBooking();

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
        <Form hasCloseIcon={true} />
      </div>
    </div>
  );
}

export default ModelBooking;
