"use client";
import dynamic from "next/dynamic";
import { Service } from "@/type/service";
import { Button } from "@/components/ui/button";
import useModalBooking from "@/hooks/use-model-booking";
import Image from "next/image";
import { SeparatorHorizontal } from "lucide-react";

const ClientSafeHTML = dynamic(() => import("./client-safe-html"), { ssr: false });

function ServiceDetail({ service }: { service: Service | undefined }) {
  const { setIsShowModelBooking } = useModalBooking();
  return (
    <div className="text-lg  font-light mt-12 px-4  lg:-mt-[300px]">
      <div className="space-y-8 ">
        {service?.extra_images?.map((img, index) => {
          const text = service?.extra_images_text?.[index] || "";
          const isEven = index % 2 === 0;

          return (
            <div key={index}>
              {/* Divider Icon, không render cho phần đầu tiên */}
              {/* {index !== 0 && (
                <div className="flex justify-center mb-8">
                  <SeparatorHorizontal className="w-10 h-10 text-gray-400" />
                </div>
              )} */}

              <div className={`grid grid-cols-1 lg:grid-cols-8 gap-6 items-center`}>
                {isEven ? (
                  <>
                    <div className="lg:col-span-4">
                      <Image
                        alt=""
                        width={500}
                        height={500}
                        src={img}
                        className="w-full  h-[290px] object-cover rounded"
                      />
                    </div>
                    <div className="lg:col-span-4 line-clamp-[11]  ">{text}</div>
                  </>
                ) : (
                  <>
                    <div className="lg:col-span-4  line-clamp-[11] ">{text}</div>
                    <div className="lg:col-span-4 h-full">
                      <Image
                        alt=""
                        width={500}
                        height={500}
                        src={img}
                        className="w-full h-[290px] object-cover rounded"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex justify-center my-8">
        <SeparatorHorizontal className="w-10 h-10 text-gray-400" />
      </div> */}
      <div className="mt-6">
        {/* {service?.content && <ClientSafeHTML content={service.content} images={service.images} />} */}

        {service?.content && <div className="text-lg" dangerouslySetInnerHTML={{ __html: service?.content }} />}

        <Button
          variant={"outline"}
          type="submit"
          onClick={() => setIsShowModelBooking(true)}
          className="w-full mt-6 bg-[#f8ab34] border border-transparent transition-all duration-500 hover:border-[#f8ab34]  text-white font-semibold py-5 rounded hover:bg-white hover:text-[#f8ab34] "
        >
          ĐẶT LỊCH HẸN TỚI TRUNG TÂM BMB CAR CARE
        </Button>
      </div>
    </div>
  );
}

export default ServiceDetail;
