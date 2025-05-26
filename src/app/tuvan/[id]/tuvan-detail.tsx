"use client";

import { TuVan } from "@/type/tuvan";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkToIcon } from "../../../../public/icon";
import { salesArr, sampleArrayBlog } from "@/data";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SlideKMCard from "@/components/slide-khuyenmai-card";
import TuVanOtherCard from "@/components/tuvan-other-card";
// const tuvanSample: TuVan = {
//   _id: "1",
//   title:
//     "Bài viết số 1 Bài viết số 1 Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1 ",
//   name: "bai-viet-so-1",
//   content: `Thời hạn Chương trình: 15/04/2025 tới hết ngày 15/05/2025 hoặc đến khi hết quà.
// Địa điểm: Tất cả trung tâm thuộc hệ thống Nhật Phát Auto.
// Chương trình giảm giá lốp Michelin hấp dẫn nhất đầu năm 2025.
// Chương trình giảm giá lốp Michelin hấp dẫn nhất đầu năm 2025.
// 1️⃣0️⃣ giây để tìm ra địa chỉ thay lốp Michelin HOT nhất Hà Nội lúc này!!! 🔥
// ———-
// 🕵️ Bác tài cần điều gì khi mua lốp Michelin? 🔜 Nhật Phát Auto có đầy đủ, không thiếu gì!!!
// 𝑮𝒊𝒂́? Mức giá lốp hấp dẫn bậc nhất thị trường lúc này!
// 𝑸𝒖𝒂̀? Tùy chọn 1 trong các quà tặng hữu ích chính hãng Michelin, gồm: Giá đỡ điện thoại kèm sạc không dây, ghế du lịch, tai nghe không dây, máy hút bụi, túi đeo chéo.
// 𝑻𝒊𝒆̣̂𝒏 𝒊́𝒄𝒉? Miễn phí lắp đặt và cân bằng động bằng máy Hunter
// 𝑻𝒂𝒚 𝒏𝒈𝒉𝒆̂̀ 𝒄𝒂𝒐? Thực hiện tại garage đạt tiêu chuẩn Car Service – cao nhất của Michelin.
// 𝑮𝒊𝒂̉𝒎 𝒈𝒊𝒂́ 𝒅𝒊̣𝒄𝒉 𝒗𝒖̣? Giảm ngay 50% phí chỉnh độ chụm bằng máy Hunter.
// ———-
// 🌟️ Lưu ý, chương trình chỉ áp dụng cho khách hàng thay <strong class='font-bold'> 4 lốp Michelin </strong>.
// 🛑 Chỉ có tại Nhật Phát Auto trong thời gian từ 15/4 – 15/5/2025 hoặc đến khi hết quà.
// ↪️ Thời hạn ngắn, quà không nhiều! Vì vậy, hãy nhanh tay đặt lịch ngay tới Nhật Phát Auto
// ———-
// 🔜 Liên hệ ngay với Nhật Phát Auto để được tư vấn đầy đủ và chi tiết nhất!
// Messenger: m.me/490157697746228
// Zalo: https://zalo.me/nhatphatauto

// Hoặc đăng ký theo form thông tin ngay bên dưới bài viết.
// ———-
// 𝗡𝗵𝗮̣̂𝘁 𝗣𝗵𝗮́𝘁 𝗔𝘂𝘁𝗼
// ☑️ Trung tâm Trương Công Giai – 82 Trương Công Giai, Dịch Vọng, Cầu Giấy, Hà Nội.
// ☑️ Trung tâm Trần Kim Xuyến – 22 Trần Kim Xuyến, Yên Hoà, Cầu Giấy, Hà Nội.
// ☑️ Trung tâm Kiêu Kỵ – T53 Làng nghề tập trung Kiêu Kỵ, Gia Lâm, Hà Nội (Cách Vincom Mega Mall Ocean Park chỉ 2km).`,
//   images: [
//     "https://nhatphatauto.vn/wp-content/uploads/2025/04/25T04-05-NhatPhat-Post-BaoDuong-1200x675-02.jpg",
//     "https://nhatphatauto.vn/wp-content/uploads/2025/04/25T04-05-NhatPhat-Post-BaoDuong-1200x675-02.jpg",
//   ],
//   images_name: ["Đây là ảnh 1", "Đây là ảnh 2"],
//   author_id: 1,
//   created_at: new Date("2025-05-25T08:00:00Z"),
//   updated_at: new Date("2025-05-25T12:00:00Z"),
// };

function injectImageRandomly(content: string, images?: string[], imgNames?: string[]) {
  if (!images?.length) return content;

  const lines = content.split("\n");

  if (!imgNames || imgNames.length !== images.length) {
    imgNames = new Array(images.length).fill("");
  }

  const modifiedLines = [...lines];

  images.forEach((imageUrl, i) => {
    const imgName = imgNames[i];

    const insertIndex = Math.floor(Math.random() * (modifiedLines.length + 1));

    const imageTag = `<div class="my-1"><img src="${imageUrl}" alt="image" class="w-full rounded-md shadow-md" /><div class="text-center font-light text-[18px] italic mt-4 ">${imgName}</div></div>`;

    modifiedLines.splice(insertIndex, 0, imageTag);
  });

  return modifiedLines.join("\n");
}

function TuVanDetail({ id }: { id: string }) {
  const [tuvan, setBlogs] = useState<TuVan>();

  useEffect(() => {
    const fetchAPI = async () => {
      setBlogs(() => sampleArrayBlog.find((item) => item._id === id));
    };
    fetchAPI();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-[100px] ">
      <div className="grid grid-cols-10 gap-10">
        <div className="px-4 lg:px-0 pt-20 lg:pt-0 col-span-12 lg:col-span-7">
          <div className="text-[36px] font-light">{tuvan?.title}</div>
          <div className="text-[14px] flex justify-between font-light my-4">
            <div>Tin khuyến mại</div>
            <div>{tuvan?.created_at.toDateString()}</div>
          </div>

          {tuvan?.content && (
            <div
              className="text-lg"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: injectImageRandomly(tuvan.content, tuvan.images, tuvan.images_name),
              }}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block col-span-3">
          <SlideKMCard />
          {/* Bài viết tư vấn */}
          <TuVanOtherCard />
        </div>
      </div>
    </div>
  );
}

export default TuVanDetail;
