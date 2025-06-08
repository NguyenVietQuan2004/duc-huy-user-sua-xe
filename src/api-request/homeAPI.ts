import httpRequest from "@/lib/http";

export const homeApi = {
  getAddresses() {
    // doone
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/addresses`, {
      cache: "no-store",
    });
  },
  getBanner() {
    //doone
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/banners`, {
      cache: "no-store",
    });
  },
  getCenters() {
    //doone
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/repair-centers`, {
      cache: "no-store",
    });
  },
  getContentAppointment() {
    //done
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/content-appointment`, {
      cache: "no-store",
    });
  },

  getLogo() {
    //
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/logo`, {
      cache: "no-store",
    });
  },

  getReason() {
    //done
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/home/reason`, {
      cache: "no-store",
    });
  },
};
