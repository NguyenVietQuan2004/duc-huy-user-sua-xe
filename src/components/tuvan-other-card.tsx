import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import Image from "next/image";
import { sampleArrayBlog } from "@/data";
import { LinkToIcon } from "../../public/icon";
function TuVanOtherCard() {
  return (
    <div className="bg-white mt-8 overflow-hidden  shadow-[4px_4px_15px_0px_rgba(0,0,0,0.15)] border border-[#d9d9d9] rounded-sm">
      <div className="py-5 px-8 flex items-center gap-5">
        <Image
          alt=""
          width={30}
          height={31}
          className="object-cover"
          src="https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625627-1.svg"
        />
        <span className="text-[20px] text-[#124d9b] font-bold">BÀI VIẾT TƯ VẤN KHÁC</span>
      </div>

      {sampleArrayBlog.map((item, index) => {
        if (index > 4) return null;
        return (
          <Link
            href={`/tuvan/${item._id}`}
            key={item.title}
            className="block rounded-none border-t  items-start border-transparent border-t-black
                    gap-4 py-3 px-4  shadow-none hover:bg-gray-50 transition-all"
          >
            <div className="flex gap-4">
              <Image
                src={item.images[0]}
                alt={item.title}
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
              <p className="font-semibold text-sm leading-snug text-wrap line-clamp-4">{item.content}</p>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">{item.created_at.toDateString()}</span>
                <LinkToIcon strokeColor="#d51921" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default TuVanOtherCard;
