import { Button } from "@/components/ui/button";
import { MapIcon } from "lucide-react"; // Icon từ lucide-react
import {
  BookingIcon,
  CarSkinIcon,
  FacebookIcon,
  MessIcon,
  PhoneIcon,
  PhoneNew,
  PhoneRedIcon,
  ZaloIcon,
} from "../../public/icon";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      <Link
        className="w-full p-3 rounded-sm relative flex  hover:right-3 right-0 transition-all duration-300 justify-between   text-white "
        style={{ background: "linear-gradient(0deg, #D51921 2.48%, #E45B61 98.71%)" }}
        href="tel:0968807985"
      >
        <span className="block mr-2">Gọi Hotline</span>

        <PhoneIcon />
      </Link>
      <Link
        href="https://zalo.me/0968807985"
        target="_blank"
        className="w-full p-3 rounded-sm relative flex  hover:right-3 right-0 transition-all duration-300 justify-between bg-[#005be0]   text-white "
      >
        <span className="block mr-2">Nhắn Zalo</span>
        <ZaloIcon />
      </Link>
      <Link
        href="https://m.me/chamsocxebmb"
        target="_blank"
        className="w-full p-3 rounded-sm relative flex  hover:right-3 right-0 transition-all duration-300 justify-between  bg-[#008df2]  text-white "
      >
        <span className="block mr-2">Messenger</span>

        <MessIcon />
      </Link>
    </div>
  );
};

export default MenuButtons;
