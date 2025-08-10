import { homeApi } from "@/api-request/homeAPI";
import ModelBooking from "./model-booking";

async function ModelBookingRoot() {
  const centers = await homeApi.getCenters();

  return <ModelBooking centers={centers} />;
}

export default ModelBookingRoot;
