"use client";

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SearchForm from "./search-input";

const service = [
  {
    key: "Thay thế lốp xe chính hãng",
    value: "/service/thaylop",
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Frame-2.svg",
  },
  {
    key: "Cân bằng động, đảo lốp xe",
    value: "/service/canbang",
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-6.svg",
  },
  {
    key: "Cân chỉnh độ chụm Hunter",
    value: "/service/canchinh",
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_3-1.svg",
  },
  {
    key: "Láng đĩa, thay má phanh",
    value: "/service/langdia",
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-7.svg",
  },
  {
    key: "Thay dầu xe, bảo dưỡng nhanh",
    value: "/service/thaydauxe",
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-1.svg",
  },
  {
    key: "Dịch vụ chăm sóc xe khác",
    value: "/service/chamsoc",
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Clip-path-group-3.svg",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Menu className="h-6 w-6 cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="right" className="w-80 bg-[#212529] text-white flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-white">NhatPhat</SheetTitle>
            <span className="text-gray-400 text-sm block">auto.vn</span>
          </SheetHeader>

          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem value="services">
              <AccordionTrigger className="text-left">DỊCH VỤ</AccordionTrigger>
              <AccordionContent className="pl-4 space-y-2 ">
                {service.map((item) => (
                  <Link key={item.key} href={item.value} className="block py-1" onClick={handleClose}>
                    • {item.key}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-4 space-y-3 text-sm">
            <Link href="/tuvan" className="pt-3 block" onClick={handleClose}>
              GÓC TƯ VẤN
            </Link>
            <Link href="/gioithieu" className="border-t pt-3 block" onClick={handleClose}>
              GIỚI THIỆU
            </Link>
            <Link href="/lienhe" className="border-t pt-3 block" onClick={handleClose}>
              LIÊN HỆ
            </Link>
            <Link href="/chuongtrinhkm" className="border-t pt-3 block" onClick={handleClose}>
              CHƯƠNG TRÌNH KHUYẾN MẠI
            </Link>
          </div>

          <div className="mt-6 relative">
            <SearchForm onClick={handleClose} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
