import { homeApi } from "@/api-request/homeAPI";
import Footer from "./footer";

async function FooterRoot() {
  const centers = await homeApi.getCenters();
  const addresses = await homeApi.getAddresses();
  return (
    <>
      <Footer centers={centers} addresses={addresses} />
    </>
  );
}

export default FooterRoot;
