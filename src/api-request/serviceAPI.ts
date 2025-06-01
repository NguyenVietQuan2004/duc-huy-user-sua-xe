import httpRequest from "@/lib/http";

export const serviceApi = {
  getAllservices({ limit, page }: { limit?: number; page?: number }) {
    return httpRequest.get<any>(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/services?limit=${limit}&page=${page}`
    );
  },
  getServiceById({ serviceId }: { serviceId: string }) {
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/services/${serviceId}`, {});
  },
};
