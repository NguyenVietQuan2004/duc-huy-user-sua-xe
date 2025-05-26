import { sliderData } from "@/data";
import Booking from "./components/booking";
import MyPartner from "./components/my-partner";
import MyService from "./components/my-service";
import SixReason from "./components/six-reason";
import HomePageClient from "./components/slider";
import AdviceSale from "./components/advice-sales";

function Root() {
  return (
    <div>
      <HomePageClient sliderData={sliderData} />
      <Booking />
      <MyService />
      <SixReason />
      <AdviceSale />
      <MyPartner />
    </div>
  );
}

export default Root;
