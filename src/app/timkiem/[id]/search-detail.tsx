"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Blog } from "@/type/blog";
import { useEffect, useState } from "react";
import SlideKM from "@/components/slide-khuyenmai-card";
import TuVanOtherCard from "@/components/tuvan-other-card";

const blogSample: Blog = {
  _id: "1",
  title:
    "Bài viết số 1 Bài viết số 1 Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1 ",
  name: "bai-viet-so-1",
  content: `Thời hạn Chương trình: 15/04/2025 tới hết ngày 15/05/2025 hoặc đến khi hết quà.
Địa điểm: Tất cả trung tâm thuộc hệ thống Nhật Phát Auto.
Chương trình giảm giá lốp Michelin hấp dẫn nhất đầu năm 2025.
Chương trình giảm giá lốp Michelin hấp dẫn nhất đầu năm 2025.
1️⃣0️⃣ giây để tìm ra địa chỉ thay lốp Michelin HOT nhất Hà Nội lúc này!!! 🔥
———-
🕵️ Bác tài cần điều gì khi mua lốp Michelin? 🔜 Nhật Phát Auto có đầy đủ, không thiếu gì!!!
𝑮𝒊𝒂́? Mức giá lốp hấp dẫn bậc nhất thị trường lúc này!
𝑸𝒖𝒂̀? Tùy chọn 1 trong các quà tặng hữu ích chính hãng Michelin, gồm: Giá đỡ điện thoại kèm sạc không dây, ghế du lịch, tai nghe không dây, máy hút bụi, túi đeo chéo.
𝑻𝒊𝒆̣̂𝒏 𝒊́𝒄𝒉? Miễn phí lắp đặt và cân bằng động bằng máy Hunter
𝑻𝒂𝒚 𝒏𝒈𝒉𝒆̂̀ 𝒄𝒂𝒐? Thực hiện tại garage đạt tiêu chuẩn Car Service – cao nhất của Michelin.
𝑮𝒊𝒂̉𝒎 𝒈𝒊𝒂́ 𝒅𝒊̣𝒄𝒉 𝒗𝒖̣? Giảm ngay 50% phí chỉnh độ chụm bằng máy Hunter.
———-
🌟️ Lưu ý, chương trình chỉ áp dụng cho khách hàng thay <strong class='font-bold'> 4 lốp Michelin </strong>.
🛑 Chỉ có tại Nhật Phát Auto trong thời gian từ 15/4 – 15/5/2025 hoặc đến khi hết quà.
↪️ Thời hạn ngắn, quà không nhiều! Vì vậy, hãy nhanh tay đặt lịch ngay tới Nhật Phát Auto
———-
🔜 Liên hệ ngay với Nhật Phát Auto để được tư vấn đầy đủ và chi tiết nhất!
Messenger: m.me/490157697746228
Zalo: https://zalo.me/nhatphatauto

Hoặc đăng ký theo form thông tin ngay bên dưới bài viết.
———-
𝗡𝗵𝗮̣̂𝘁 𝗣𝗵𝗮́𝘁 𝗔𝘂𝘁𝗼
☑️ Trung tâm Trương Công Giai – 82 Trương Công Giai, Dịch Vọng, Cầu Giấy, Hà Nội.
☑️ Trung tâm Trần Kim Xuyến – 22 Trần Kim Xuyến, Yên Hoà, Cầu Giấy, Hà Nội.
☑️ Trung tâm Kiêu Kỵ – T53 Làng nghề tập trung Kiêu Kỵ, Gia Lâm, Hà Nội (Cách Vincom Mega Mall Ocean Park chỉ 2km).`,
  images: [
    "https://nhatphatauto.vn/wp-content/uploads/2025/04/25T04-05-NhatPhat-Post-BaoDuong-1200x675-02.jpg",
    "https://nhatphatauto.vn/wp-content/uploads/2025/04/25T04-05-NhatPhat-Post-BaoDuong-1200x675-02.jpg",
  ],
  images_name: ["Đây là ảnh 1", "Đây là ảnh 2"],
  author_id: 1,
  created_at: new Date("2025-05-25T08:00:00Z"),
  updated_at: new Date("2025-05-25T12:00:00Z"),
};

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

function SearchDetails({}: { id: string }) {
  const [blog, setBlogs] = useState<Blog>();

  useEffect(() => {
    const fetchAPI = async () => {
      setBlogs(blogSample);
    };
    fetchAPI();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-[100px] px-4 ">
      <div className="grid grid-cols-12 gap-10">
        <div className="px-4 lg:px-0 pt-20 lg:pt-0 col-span-12 lg:col-span-8">
          <div className="text-[36px] font-light">{blog?.title}</div>
          <div className="text-[14px] flex justify-between font-light my-4">
            <div>Tin khuyến mại</div>
            <div>{blog?.created_at.toDateString()}</div>
          </div>

          {blog?.content && (
            <div
              className="text-lg"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: injectImageRandomly(blog.content, blog.images, blog.images_name),
              }}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block col-span-4">
          {/* <div className="bg-white overflow-hidden hover:text-[#d51921] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.15)] border border-[#d9d9d9] rounded-sm">
            <div className="py-5 px-8 flex items-center gap-5">
              <Image
                alt=""
                width={30}
                height={31}
                className="object-cover"
                src="https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625627.svg"
              />
              <span className="text-[24px] text-[#d51921] font-bold">TIN KHUYẾN MẠI</span>
            </div>

            <Swiper
              loop={true}
              autoplay={{ delay: 5000 }}
              slidesPerView={1}
              modules={[Autoplay, Pagination]}
              pagination={{
                clickable: true,
                el: ".sale-swiper-pagination",
                renderBullet: (index, className) => {
                  return `<span class="custom-bullet ${className}"></span>`;
                },
              }}
            >
              {salesArr.map((item) => (
                <SwiperSlide key={item.title}>
                  <Link href="">
                    <div className="">
                      <Image
                        alt=""
                        width={700}
                        height={700}
                        className="object-cover w-full hover:scale-105 transition-all duration-500 aspect-square"
                        src={item.img}
                      />
                    </div>
                    <div className="p-8 flex flex-col gap-4 select-none z-10 relative ">
                      <div className="text-[22px] font-bold line-clamp-2 h-[66px]">{item.title}</div>
                      <div className="text-[#808080] text-sm">{item.date}</div>
                      <div className="font-light line-clamp-3">{item.subtitle}</div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-between px-8 py-3">
              <LinkToIcon strokeColor="black" />
              <div className="sale-swiper-pagination swiper-pagination !static !flex !justify-end pb-[10px]" />
            </div>
          </div> */}
          <SlideKM />
          {/* Bài viết tư vấn */}
          {/* <div className="bg-white mt-8 overflow-hidden hover:text-[#d51921] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.15)] border border-[#d9d9d9] rounded-sm">
            <div className="py-5 px-8 flex items-center gap-5">
              <Image
                alt=""
                width={30}
                height={31}
                className="object-cover"
                src="https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625627-1.svg"
              />
              <span className="text-[24px] text-[#124d9b] font-bold">BÀI VIẾT TƯ VẤN KHÁC</span>
            </div>

            <Swiper
              loop={true}
              autoplay={{ delay: 5000 }}
              modules={[Autoplay, Pagination]}
              pagination={{
                clickable: true,
                el: ".advice-swiper-pagination",
                renderBullet: (index, className) => {
                  return `<span class="custom-bullet ${className}"></span>`;
                },
              }}
            >
              {advicesArr.map((item) => (
                <SwiperSlide key={item.title}>
                  <Link href="">
                    <div>
                      <Image
                        alt=""
                        width={700}
                        height={700}
                        className="object-cover w-full hover:scale-105 transition-all duration-500 aspect-square"
                        src={item.img}
                      />
                    </div>
                    <div className="p-8 flex flex-col gap-4 select-none">
                      <div className="text-[22px] font-bold line-clamp-2 h-[66px]">{item.title}</div>
                      <div className="text-[#808080] text-sm">{item.date}</div>
                      <div className="font-light line-clamp-3">{item.subtitle}</div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-between px-8 py-3">
              <LinkToIcon strokeColor="black" />
              <div className="advice-swiper-pagination swiper-pagination !static !flex !justify-end pb-[10px]" />
            </div>
          </div> */}

          <TuVanOtherCard />
        </div>
      </div>
    </div>
  );
}

export default SearchDetails;
