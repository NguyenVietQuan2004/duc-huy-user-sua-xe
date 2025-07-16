// import { blogApi } from "@/api-request/blogApi";
// import AdviceClient from "./advice-client";

// function Advice() {
//   return (
//     <div>
//       <AdviceClient />
//     </div>
//   );
// }

// export default Advice;

import { blogApi } from "@/api-request/blogApi";
import { posterApi } from "@/api-request/posterAPI";
import AdviceClient from "./advice-client";

export default async function Advice() {
  const [blogs, poster] = await Promise.all([blogApi.getAllBlogs({ limit: 100, page: 1 }), posterApi.getPoster()]);

  return <AdviceClient adviceList={blogs.data} banner={poster.images_advise} />;
}
