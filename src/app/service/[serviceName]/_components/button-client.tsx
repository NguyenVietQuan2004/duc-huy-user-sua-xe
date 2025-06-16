"use client";
import useModalBooking from "@/hooks/use-model-booking";

function ButtonClient() {
  const { setIsShowModelBooking } = useModalBooking();

  return (
    <button
      onClick={() => setIsShowModelBooking(true)}
      className="bg-[#f6ab35] text-white transition-all duration-300 border border-transparent hover:border-[#f6ab35] hover:bg-white hover:text-[#f6ab35] text-sm font-bold w-full py-3 rounded-md uppercase"
    >
      Đặt lịch hẹn
    </button>
  );
}

export default ButtonClient;
