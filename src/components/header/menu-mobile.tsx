"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import SearchForm from "./search-input";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Service } from "@/type/service";
import { useAppSelector } from "@/store/hook";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const services = useAppSelector((state) => state.service.services);
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
                {services?.map((item) => (
                  <Link
                    key={item._id}
                    href={`/service/${item._id}`}
                    className="line-clamp-1 py-1"
                    onClick={handleClose}
                  >
                    • {item.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-4 space-y-3 text-sm">
            <Link href="/advice" className="pt-3 block" onClick={handleClose}>
              GÓC TƯ VẤN
            </Link>
            <Link href="/introduce" className="border-t pt-3 block" onClick={handleClose}>
              GIỚI THIỆU
            </Link>
            <Link href="/contact" className="border-t pt-3 block" onClick={handleClose}>
              LIÊN HỆ
            </Link>
            <Link href="/sale" className="border-t pt-3 block" onClick={handleClose}>
              CHƯƠNG TRÌNH KHUYẾN MẠI
            </Link>
          </div>

          {/* <div className="mt-6 relative">
            <SearchForm onClick={handleClose} />
          </div> */}
        </SheetContent>
      </Sheet>
    </div>
  );
}
