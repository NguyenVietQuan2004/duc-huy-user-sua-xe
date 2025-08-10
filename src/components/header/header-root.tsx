import { homeApi } from "@/api-request/homeAPI";
import Header from "./header";
import { serviceApi } from "@/api-request/serviceAPI";
import { categoryApi } from "@/api-request/categoryAPI";

async function HeaderRoot() {
  const listServices = await serviceApi.getAllservices({ limit: 100, page: 1 });
  const listCategories = await categoryApi.getAllcategory({ limit: 100, page: 1 });
  const logo = await homeApi.getLogo();
  return (
    <>
      <Header listCategories={listCategories} listServices={listServices} logo={logo} />
    </>
  );
}

export default HeaderRoot;
