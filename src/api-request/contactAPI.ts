import httpRequest from "@/lib/http";

export const contactApi = {
  // patch
  createContact({ body }: any) {
    return httpRequest.post<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/contact`, {
      body,
    });
  },
};
