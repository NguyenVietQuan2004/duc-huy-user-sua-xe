"use client";
import { Button } from "@/components/ui/button";
import useModalBooking from "@/hooks/use-model-booking";
import { Dichvu } from "@/type/dichvu";
import dynamic from "next/dynamic";

const ClientSafeHTML = dynamic(() => import("./client-safe-html"), { ssr: false });

// function injectImageRandomly(content: string, images?: string[], imgNames?: string[]) {
//   if (!images?.length) return content;

//   const lines = content.split("\n");

//   if (!imgNames || imgNames.length !== images.length) {
//     imgNames = new Array(images.length).fill("");
//   }

//   let modifiedLines = [...lines];

//   images.forEach((imageUrl, i) => {
//     const imgName = imgNames[i];

//     const insertIndex = Math.floor(Math.random() * (modifiedLines.length + 1));

//     const imageTag = `<div class="my-1"><img src="${imageUrl}" alt="image" class="w-full rounded-md shadow-md" /><div class="text-center font-light text-[18px] italic mt-4 ">${imgName}</div></div>`;

//     modifiedLines.splice(insertIndex, 0, imageTag);
//   });

//   return modifiedLines.join("\n");
// }
function ServiceDetail({ dichvu }: { dichvu: Dichvu }) {
  const { isShowModelBooking, setIsShowModelBooking } = useModalBooking();
  return (
    <div className="text-lg  font-light  px-4  -mt-[500px]">
      {/* <Image
        alt=""
        src={"https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625622-1.svg"}
        width={255}
        height={100}
        className="mb-3"
      />
      <div className="text-4xl mb-7 font-semibold">{dichvu.name}</div> */}

      {/* {dichvu?.content && (
        <div
          className="text-lg"
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{
            __html: injectImageRandomly(dichvu.content, dichvu.images),
          }}
        />
      )} */}
      {dichvu?.content && <ClientSafeHTML content={dichvu.content} images={dichvu.images} />}

      <Button
        variant={"outline"}
        type="submit"
        onClick={() => setIsShowModelBooking(true)}
        className="w-full mt-6 bg-[#d51921] border border-transparent transition-all duration-500 hover:border-[#d51921]  text-white font-semibold py-5 rounded hover:bg-white hover:text-[#d51921] "
      >
        ĐẶT LỊCH HẸN TỚI NHẬT PHÁT AUTO
      </Button>
    </div>
  );
}

export default ServiceDetail;
