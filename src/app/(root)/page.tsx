import Booking from "./_components/booking";
import MyPartner from "./_components/my-partner";
import MyService from "./_components/my-service";
import SixReason from "./_components/six-reason";
import HomePageClient from "./_components/slider";
import AdviceSale from "./_components/advice-sales";
async function Root() {
  return (
    <div>
      <HomePageClient />
      <Booking />
      <MyService />
      <SixReason />
      <AdviceSale />
      <MyPartner />
    </div>
  );
}

export default Root;
