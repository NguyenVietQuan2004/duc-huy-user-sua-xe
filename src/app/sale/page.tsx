import { posterApi } from "@/api-request/posterAPI";
import SaleClient from "./sale-client";
import { notFound } from "next/navigation";

export default async function Introduce() {
  let poster;

  try {
    poster = await posterApi.getPoster();
  } catch (error) {
    console.error("Failed to fetch poster:", error);
    notFound(); // hoặc trả về fallback UI nếu muốn
  }

  if (!poster) {
    notFound();
  }

  return (
    <div>
      <SaleClient img={poster.images_promotion} />
    </div>
  );
}
