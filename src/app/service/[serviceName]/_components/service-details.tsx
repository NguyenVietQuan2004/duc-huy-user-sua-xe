"use client";
import dynamic from "next/dynamic";
import { Service } from "@/type/service";
import { Button } from "@/components/ui/button";
import useModalBooking from "@/hooks/use-model-booking";
import Image from "next/image";
import { SeparatorHorizontal } from "lucide-react";
import { servicesIcon } from "@/data";
import Link from "next/link";
import { Category } from "@/type/category";

const ClientSafeHTML = dynamic(() => import("./client-safe-html"), { ssr: false });

function ServiceDetail({
  service,
  isHasTag,
  listService,
  serviceId,
}: {
  service: Service | undefined;
  isHasTag?: boolean;
  listService: Service[] | Category[];
  serviceId: string;
}) {
  const { setIsShowModelBooking } = useModalBooking();
  console.log(service?.content);
  return (
    <div className={`text-lg  font-light  px-4 lg:px-0  ${isHasTag && "lg:-mt-[300px]"}`}>
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

        {service?.content && (
          <div className="text-lg no-tailwind" dangerouslySetInnerHTML={{ __html: service?.content }} />
        )}

        {!isHasTag && (
          <div className=" pt-4 rounded-md  mt-8">
            <h3 className="text-center mb-3 italic">Các dịch vụ liên quan khác</h3>
            <ul className="grid grid-cols-1 shadow-lg sm:grid-cols-3  border-2 overflow-hidden rounded-sm border-gray-300  ">
              {listService.map((item, index) => (
                <li
                  key={item._id}
                  className={`flex border px-1 justify-start pl-16 sm:pl-10 items-center hover:opacity-50 transition-all duration-300 gap-2 py-3 ${
                    serviceId === item._id ? "text-[#f8ab34]" : ""
                  }`}
                >
                  <Link href={`/service/${item._id}`} className="flex items-center gap-2">
                    {servicesIcon.length ? (
                      <Image
                        alt=""
                        width={80}
                        height={80}
                        src={servicesIcon[index % 6].image}
                        className="max-w-6 max-h-6 group-hover:animate-shake"
                      />
                    ) : (
                      <div>icon</div>
                    )}
                    <span className="line-clamp-1 max-w-full text-wrap">{item.name}</span>
                  </Link>
                </li>
              ))}
              {Array.from({ length: 3 - (listService.length % 3) === 3 ? 0 : 3 - (listService.length % 3) }).map(
                (_, index) => (
                  <li
                    key={index}
                    className={`flex border justify-center items-center hover:opacity-50 transition-all duration-300 gap-2 py-3 `}
                  ></li>
                )
              )}
            </ul>
          </div>
        )}

        <Button
          variant={"outline"}
          type="submit"
          onClick={() => setIsShowModelBooking(true)}
          className="w-full mb-2 mt-6 bg-[#f8ab34] border border-transparent transition-all duration-500 hover:border-[#f8ab34]  text-white font-semibold py-5 rounded hover:bg-white hover:text-[#f8ab34] "
        >
          ĐẶT LỊCH HẸN TỚI TRUNG TÂM
        </Button>
      </div>
    </div>
  );
}

export default ServiceDetail;
