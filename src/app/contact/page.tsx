"use client";
import { useEffect, useState } from "react";
import ContactForm from "./form";
import { posterApi } from "@/api-request/posterAPI";
import { homeApi } from "@/api-request/homeAPI";
import { Address } from "@/type/address";

function Introduce() {
  const [img, setImg] = useState<string>();
  const [address, setAddress] = useState<Address[]>();
  useEffect(() => {
    const fetchAPI = async () => {
      const poster = await posterApi.getPoster();
      const addresses = await homeApi.getAddresses();
      setAddress(addresses);
      setImg(poster.images_contact);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="relative">
        {img && (
          <div
            className="absolute inset-0 bg-cover bg-center h-[500px] "
            style={{
              backgroundImage: `url(${img || "https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg"})`,
              filter: "brightness(50%)",
            }}
          />
        )}
        <div className="relative max-w-[1140px] py-[120px] h-[500px] pt-[160px] lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[540px]">
            <div className="text-[18px]">LIÊN HỆ</div>
            <div className="text-[36px] font-bold">
              Nếu có câu hỏi, đừng ngần ngại liên hệ với Trung tâm BMB Car Care
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-[1100px] px-4  mx-auto text-[18px]  font-light py-20 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Maps & Addresses */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold">BMB Garage – Trung Tâm Chăm Sóc Xe</h3>
              <p>21 Đường Phú Thuận, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh</p>
              {/* <iframe
                className="w-full h-[200px] mt-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.527112333342!2d105.78313931540277!3d21.01117109387771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab43c6fd109f%3A0x69fa285f8a9d4917!2zTmjDoCBQaMOhdCAtIFRyxrDGoW5nIENvbmcgR2lh!5e0!3m2!1svi!2s!4v1686487495243!5m2!1svi!2s"
                loading="lazy"
              ></iframe> */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.056640960699!2d106.73078149999999!3d10.7301149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175254fc81ab34d%3A0xc416f38314923c3a!2sBMB%20Garage!5e0!3m2!1svi!2s!4v1750091279481!5m2!1svi!2s"
                className="w-full h-[200px] mt-2"
                loading="lazy"
              ></iframe>
              {address
                ?.filter((add) => add.name === "Số điện thoại")
                ?.map((item) => (
                  <div key={item._id} className="mt-4 text-base">
                    <span className="font-semibold ">SĐT liên hệ:</span> {item.address}
                  </div>
                ))}
            </div>

            {/* <div>
              <h3 className="font-bold">Nhật Phát – Trần Kim Xuyến</h3>
              <p>22 Trần Kim Xuyến, Yên Hoà, Cầu Giấy, Hà Nội</p>
              <iframe
                className="w-full h-[200px] mt-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.987770058114!2d105.79417341540246!3d21.001921993887825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab44888e1e4b%3A0xbc61e8ed7a996b66!2zTWljaGVsaW4gTmjDoCBQaMOhdCAtIFRy4bqnbiBLaW0gWHV54buBbg!5e0!3m2!1svi!2s!4v1686487562560!5m2!1svi!2s"
                loading="lazy"
              ></iframe>
            </div>

            <div>
              <h3 className="font-bold">Nhật Phát – Kiêu Kỵ</h3>
              <p>
                T53 Làng nghề tập trung Kiêu Kỵ, Gia Lâm, Hà Nội <br />
                <em>(cách Vincom Mega Mall – Ocean Park 2km)</em>
              </p>
              <iframe
                className="w-full h-[200px] mt-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.839243365009!2d105.9646932154019!3d20.96279399431756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b14dd10a189f%3A0x58901ec98fa367ab!2zTmjDoCBQaMOhdCAtIEtpw6p1IEvDrQ!5e0!3m2!1svi!2s!4v1686487596895!5m2!1svi!2s"
                loading="lazy"
              ></iframe>
            </div> */}
          </div>

          {/* Right - Contact Form */}
          <div>
            <h2 className="text-[#124D9B] text-4xl leading-[48px] font-bold mb-6">
              ĐỂ LẠI LỜI NHẮN CHO <br /> TRUNG TÂM BMB CAR CARE
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
