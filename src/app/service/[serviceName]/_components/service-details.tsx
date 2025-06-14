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
    <div className="text-lg  font-light  px-4  lg:-mt-[500px]">
      <div className="space-y-20 ">
        {service?.extra_images?.map((img, index) => {
          const text = service?.extra_images_text?.[index] || "";
          const isEven = index % 2 === 0;

          return (
            <div key={index}>
              {/* Divider Icon, không render cho phần đầu tiên */}
              {index !== 0 && (
                <div className="flex justify-center mb-20">
                  <SeparatorHorizontal className="w-10 h-10 text-gray-400" />
                </div>
              )}

              <div className={`grid grid-cols-8 gap-10 items-center`}>
                {isEven ? (
                  <>
                    <div className="col-span-4">
                      <Image alt="" width={500} height={500} src={img} className="w-full h-full object-cover rounded" />
                    </div>
                    <div className="col-span-4 indent-8">{text}</div>
                  </>
                ) : (
                  <>
                    <div className="col-span-4 indent-8">{text}</div>
                    <div className="col-span-4 h-full">
                      <Image alt="" width={500} height={500} src={img} className="w-full h-full object-cover rounded" />
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-20">
        <SeparatorHorizontal className="w-10 h-10 text-gray-400" />
      </div>
      <div className="mt-6">
        {/* {service?.content && <ClientSafeHTML content={service.content} images={service.images} />} */}

        {service?.content && (
          <div
            className="text-lg"
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{ __html: service?.content }}
          />
        )}

        <Button
          variant={"outline"}
          type="submit"
          onClick={() => setIsShowModelBooking(true)}
          className="w-full mt-6 bg-[#d51921] border border-transparent transition-all duration-500 hover:border-[#d51921]  text-white font-semibold py-5 rounded hover:bg-white hover:text-[#d51921] "
        >
          ĐẶT LỊCH HẸN TỚI NHẬT PHÁT AUTO
        </Button>
      </div>
    </div>
  );
}

export default ServiceDetail;
