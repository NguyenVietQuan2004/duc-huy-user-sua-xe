"use client";

import { useEffect, useState } from "react";
import Form from "./form";
import Image from "next/image";
import { ContentAppointmentType } from "@/type/content-appointment";
import { homeApi } from "@/api-request/homeAPI";
import { Center } from "@/type/center";
import useModalBooking from "@/hooks/use-model-booking";

function Booking() {
  const [content, setContent] = useState<ContentAppointmentType>();
  const [centers, setcenters] = useState<Center[]>();
  const { isShowModelBooking } = useModalBooking();
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await homeApi.getContentAppointment();
      const centers = await homeApi.getCenters();
      setcenters(centers);
      setContent(data[0]);
    };
    fetchAPI();
  }, []);

  return (
    <div
      className="flex px-4 flex-col lg:flex-row lg:px-[200px] items-center gap-10 relative  z-[8] 
      lg:-top-[200px] mt-8 lg:mt-0"
    >
      <div className="flex-1   h-[100vh] border-[#08080808]  bg-[#]">
        {!isShowModelBooking && <Form centers={centers} />}
      </div>

      <div className="flex-1 text-lg items-center flex lg:block flex-col font-light mt-16 lg:mt-28">
        {content?.images.length && <Image alt="" src={content?.images[0]} width={255} height={100} className="mb-3" />}
        <div className="text-4xl mb-7 line-clamp-3 font-semibold">{content?.title}</div>
        <div className="mb-4">{content?.content}</div>
      </div>
    </div>
  );
}

export default Booking;
