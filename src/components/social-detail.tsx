import { Button } from "@/components/ui/button";
import { Car, Calendar, MessageSquare, MessagesSquare, Phone, MapPin, MapIcon } from "lucide-react"; // Icon từ lucide-react
import { BookingIcon, CarSkinIcon, MessIcon, PhoneRedIcon, ZaloIcon } from "../../public/icon";
import { useEffect, useState } from "react";

const MenuButtons = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  // Khi component mount thì bật animation
  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div
      className={`flex flex-col gap-3 absolute bottom-full right-0 p-4 max-w-md mx-auto
        transform transition-all duration-300 ease-in-out
        ${showAnimation ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
      style={{ pointerEvents: showAnimation ? "auto" : "none" }}
    >
      <Button className="w-full relative hover:right-3 right-0 transition-all duration-300 justify-between bg-[#1f5eb2]  text-white py-6">
        Hỏi đáp xe
        {/* <Car className="h-5 w-5" /> */}
        <CarSkinIcon />
      </Button>
      <Button className="w-full relative hover:right-3 right-0 transition-all duration-300 justify-between bg-[#e0e0e0]  text-red-500 py-6">
        Đặt lịch hẹn
        {/* <Calendar className="h-5 w-5" /> */}
        <BookingIcon />
      </Button>
      <Button className="w-full relative hover:right-3 right-0 transition-all duration-300 justify-between bg-[#005be0]   text-white py-6">
        Nhắn Zalo
        {/* <MessageSquare className="h-5 w-5" /> */}
        <ZaloIcon />
      </Button>
      <Button className="w-full relative hover:right-3 right-0 transition-all duration-300 justify-between  bg-[#008df2]  text-white py-6">
        Messenger
        {/* <MessagesSquare className="h-5 w-5" /> */}
        <MessIcon />
      </Button>
      <Button className="w-full relative hover:right-3 right-0 transition-all duration-300 justify-between bg-[#dc3a41]  text-white py-6">
        Gọi Hotline
        {/* <Phone className="h-5 w-5" /> */}
        <PhoneRedIcon />
      </Button>
      <Button className="w-full relative hover:right-3 right-0 transition-all duration-300 justify-between bg-[#cee3ff]  text-[#1A73E8] py-6">
        Tìm đường
        {/* <MapPin className="h-5 w-5" /> */}
        <MapIcon />
      </Button>
    </div>
  );
};

export default MenuButtons;
