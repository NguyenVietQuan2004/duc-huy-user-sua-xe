import Booking from "./_components/booking";
import MyPartner from "./_components/my-partner";
import MyService from "./_components/my-service";
import SixReason from "./_components/six-reason";
import HomePageClient from "./_components/slider";
import AdviceSale from "./_components/advice-sales";
import { categoryApi } from "@/api-request/categoryAPI";
import A from "./_components/a";
import B from "./_components/b";
import C from "./_components/c";
async function Root() {
  return (
    <div>
      <HomePageClient />
      <Booking />
      <MyService />
      <SixReason />
      <AdviceSale />
      <MyPartner />
      <A></A>
      <B></B>
      <C></C>
    </div>
  );
}

export default Root;
