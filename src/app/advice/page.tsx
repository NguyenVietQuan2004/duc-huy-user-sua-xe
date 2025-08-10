import { blogApi } from "@/api-request/blogApi";
import { posterApi } from "@/api-request/posterAPI";
import AdviceClient from "./advice-client";
import { notFound } from "next/navigation";

export default async function Advice() {
  try {
    const [blogs, poster] = await Promise.all([blogApi.getAllBlogs({ limit: 100, page: 1 }), posterApi.getPoster()]);

    const isEmpty =
      (!blogs?.data || blogs.data.length === 0) && (!poster?.images_advise || poster.images_advise.length === 0);

    if (isEmpty) {
      notFound();
    }

    return <AdviceClient adviceList={blogs.data} banner={poster.images_advise} />;
  } catch (error) {
    console.error("Failed to fetch advice data:", error);
    notFound();
  }
}
