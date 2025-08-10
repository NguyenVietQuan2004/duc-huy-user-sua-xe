import { categoryApi } from "@/api-request/categoryAPI";
import ServiceClient from "./service-client";
import { serviceApi } from "@/api-request/serviceAPI";
import { posterApi } from "@/api-request/posterAPI";
import { PosterType } from "@/type/poster";
import { Service } from "@/type/service";

type Params = Promise<{ serviceName: string }>;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ServiceRoot({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  let service: Service | undefined = undefined;
  let poster: any | undefined = undefined;
  const { serviceName } = await params;
  const { tag } = await searchParams;
  try {
    if (tag) {
      service = await categoryApi.getCategoryById({ categoryId: serviceName });
    } else {
      service = await serviceApi.getServiceById({ serviceId: serviceName });
    }
    poster = await posterApi.getPoster();
  } catch (error) {}

  return (
    <div className="custom-img ">
      <ServiceClient tag={tag?.toString()} service={service} img={poster?.images_service} />
    </div>
  );
}
