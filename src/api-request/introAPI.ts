// src/api-request/introAPI.ts
import httpRequest from "@/lib/http";

export const introApi = {
  getIntro() {
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/intro/intros`, {});
  },
};
