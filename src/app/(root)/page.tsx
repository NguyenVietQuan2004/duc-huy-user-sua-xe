import Booking from "./_components/booking";
import MyPartner from "./_components/my-partner";
import MyService from "./_components/my-service";
import SixReason from "./_components/six-reason";
import HomePageClient from "./_components/slider";
import AdviceSale from "./_components/advice-sales";
import { homeApi } from "@/api-request/homeAPI";
import { blogApi } from "@/api-request/blogApi";
import { saleApi } from "@/api-request/saleAPI";
import { notFound } from "next/navigation";

async function Root() {
  try {
    const [data, response, listAdvices, centers, sales, reason] = await Promise.all([
      homeApi.getContentAppointment(),
      homeApi.getBanner(),
      blogApi.getAllBlogs({ limit: 5, page: 1 }),
      homeApi.getCenters(),
      saleApi.getAllSales({ limit: 8, page: 1 }),
      homeApi.getReason(),
    ]);

    const isEmpty =
      (!data || data.length === 0) &&
      (!response || response.length === 0) &&
      (!listAdvices?.data || listAdvices.data.length === 0) &&
      (!centers || centers.length === 0) &&
      (!sales?.data || sales.data.length === 0) &&
      (!reason || reason.length === 0);

    if (isEmpty) {
      notFound();
    }

    return (
      <div>
        <HomePageClient banner={response[0]} />
        <Booking content={data[0]} centers={centers} />
        <MyService />
        <SixReason reason={reason} />
        <AdviceSale adviceList={listAdvices.data} sales={sales.data} />
        <MyPartner />
      </div>
    );
  } catch (error) {
    // Xử lý lỗi ở đây (vd: log lỗi, hoặc trả 404)
    console.error("Failed to fetch data:", error);
    notFound();
  }
}

export default Root;
