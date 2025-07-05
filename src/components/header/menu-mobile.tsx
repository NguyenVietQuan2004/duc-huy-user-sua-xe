"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import SearchForm from "./search-input";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Service } from "@/type/service";
import { useAppSelector } from "@/store/hook";
import { Category } from "@/type/category";
import { useRouter } from "next/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const services = useAppSelector((state) => ({
    services: state.service.services,
    categories: state.service.categories,
  }));
  const router = useRouter();

  const handleClose = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setOpen(false);
    e.stopPropagation();
  };

  const handleClick = (item: Category) => {
    router.push(`/service/${item._id}?tag=category`);
    setOpen(false);
  };
  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Menu className="h-6 w-6 cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="right" className="w-80 bg-[#212529] text-white flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-white">BMB Car</SheetTitle>
            {/* <span className="text-gray-400 text-sm block">auto.vn</span> */}
          </SheetHeader>

          <Accordion type="single" collapsible className="w-full mt-4">
            {services.categories.map((category) => {
              const matchServices = services.services.filter((item) => item.category_id === category._id);
              return (
                <AccordionItem key={category._id} value="services">
                  <AccordionTrigger className="text-left">
                    <div onClick={() => handleClick(category)}>{category.name}</div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 space-y-2 ">
                    {matchServices.map((item) => (
                      <a
                        key={item._id}
                        href={`/service/${item._id}`}
                        className="line-clamp-1 py-1"
                        onClick={handleClose}
                      >
                        • {item.name}
                      </a>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="mt-4 space-y-3 text-sm">
            <Link href="/advice" className="pt-3 block" onClick={handleClose}>
              TIN TỨC
            </Link>
            <a href="/introduce" className="border-t pt-3 block" onClick={handleClose}>
              GIỚI THIỆU
            </a>
            <a href="/contact" className="border-t pt-3 block" onClick={handleClose}>
              LIÊN HỆ
            </a>
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
