import { blogApi } from "@/api-request/blogApi";
import AdviceDetail from "./advice-detail";
import { saleApi } from "@/api-request/saleAPI";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

async function Search({ params }: { params: Params }) {
  try {
    const { id } = await params;
    const [sales, advice] = await Promise.all([
      saleApi.getAllSales({ limit: 8, page: 1 }),
      blogApi.getBlogById({ blogId: id }),
    ]);

    const isEmpty = (!advice || Object.keys(advice).length === 0) && (!sales?.data || sales.data.length === 0);

    if (isEmpty) {
      notFound();
    }

    return (
      <div>
        <AdviceDetail advice={advice} sales={sales.data} />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch data in Search:", error);
    notFound();
  }
}

export default Search;
