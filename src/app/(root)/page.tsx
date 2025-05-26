import { sliderData } from "@/data";
import AdviceSale from "./advice-sales";
import Booking from "./booking";
import MyPartner from "./my-partner";
import MyService from "./my-service";
import SixReason from "./six-reason";
import HomePageClient from "./slider";

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
