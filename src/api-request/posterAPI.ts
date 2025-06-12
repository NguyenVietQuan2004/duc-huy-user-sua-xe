import httpRequest from "@/lib/http";

export const posterApi = {
  // GET /api/admin/posters
  getPoster() {
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/poster`, {});
  },
};
