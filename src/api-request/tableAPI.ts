import httpRequest from "@/lib/http";

export const priceServiceApi = {
  // GET /api/admin/table
  getAll() {
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/table`);
  },
};
