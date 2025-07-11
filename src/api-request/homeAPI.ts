import httpRequest from "@/lib/http";

export const homeApi = {
  getAddresses() {
    // doone
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/addresses`, {});
  },
  getBanner() {
    //doone
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/banners`, {});
  },
  getCenters() {
    //doone
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/repair-centers`, {});
  },
  getContentAppointment() {
    //done
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/content-appointment`, {});
  },

  getLogo() {
    //
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/logo`, {});
  },

  getReason() {
    //done
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/reason`, {});
  },
};
