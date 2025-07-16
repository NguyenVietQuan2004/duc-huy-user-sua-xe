// "use client";
// import { useEffect, useState } from "react";
// import ContactForm from "./form";
// import { posterApi } from "@/api-request/posterAPI";
// import { homeApi } from "@/api-request/homeAPI";
// import { Address } from "@/type/address";

// function ContactClient() {
//   const [img, setImg] = useState<string>();
//   const [address, setAddress] = useState<Address[]>();
//   useEffect(() => {
//     const fetchAPI = async () => {
//       const poster = await posterApi.getPoster();
//       const addresses = await homeApi.getAddresses();
//       setAddress(addresses);
//       setImg(poster.images_contact);
//     };
//     fetchAPI();
//   }, []);

//   return (
//     <div>
//       {/* Banner */}
//       <div className="relative">
//         {img && (
//           <div
//             className="absolute inset-0 bg-cover bg-center h-[500px] "
//             style={{
//               backgroundImage: `url(${img || "https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg"})`,
//               filter: "brightness(50%)",
//             }}
//           />
//         )}
//         <div className="relative max-w-[1140px] py-[120px] h-[500px] pt-[160px] lg:pt-[120px] mx-auto px-4 ">
//           <div className=" text-white max-w-[540px]">
//             <div className="text-[18px]">LIÊN HỆ</div>
//             <div className="text-[36px] font-bold">
//               Nếu có câu hỏi, đừng ngần ngại liên hệ với Trung tâm BMB Car Care
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1100px] px-4  mx-auto text-[18px]  font-light py-20 flex flex-col gap-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="flex flex-col gap-8">
//             <div>
//               <h3 className="font-bold">BMB Garage – Trung Tâm Chăm Sóc Xe</h3>
//               <p>21 Đường Phú Thuận, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh</p>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.056640960699!2d106.73078149999999!3d10.7301149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175254fc81ab34d%3A0xc416f38314923c3a!2sBMB%20Garage!5e0!3m2!1svi!2s!4v1750091279481!5m2!1svi!2s"
//                 className="w-full h-[200px] mt-2"
//                 loading="lazy"
//               ></iframe>
//               {address
//                 ?.filter((add) => add.name === "Số điện thoại")
//                 ?.map((item) => (
//                   <div key={item._id} className="mt-4 text-base">
//                     <span className="font-semibold ">SĐT liên hệ:</span> {item.address}
//                   </div>
//                 ))}
//             </div>
//           </div>

//           {/* Right - Contact Form */}
//           <div>
//             <h2 className="text-[#124D9B] text-4xl leading-[48px] font-bold mb-6">
//               ĐỂ LẠI LỜI NHẮN CHO <br /> TRUNG TÂM BMB CAR CARE
//             </h2>
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactClient;

"use client";

import ContactForm from "./form";
import { Address } from "@/type/address";

interface Props {
  img?: string;
  address: Address[];
}

function ContactClient({ img, address }: Props) {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-[500px]">
        {img && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{
              backgroundImage: `url(${img})`,
              filter: "brightness(50%)",
            }}
          />
        )}
        <div className="relative max-w-[1140px] py-[120px] h-full pt-[160px] lg:pt-[120px] mx-auto px-4">
          <div className="text-white max-w-[540px]">
            <div className="text-[18px]">LIÊN HỆ</div>
            <div className="text-[36px] font-bold">
              Nếu có câu hỏi, đừng ngần ngại liên hệ với Trung tâm BMB Car Care
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] px-4 mx-auto text-[18px] font-light py-20 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Thông tin liên hệ */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold">BMB Garage – Trung Tâm Chăm Sóc Xe</h3>
              <p>21 Đường Phú Thuận, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh</p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.056640960699!2d106.73078149999999!3d10.7301149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175254fc81ab34d%3A0xc416f38314923c3a!2sBMB%20Garage!5e0!3m2!1svi!2s!4v1750091279481!5m2!1svi!2s"
                className="w-full h-[200px] mt-2"
                loading="lazy"
              ></iframe>

              {address
                ?.filter((add) => add.name === "Số điện thoại")
                ?.map((item) => (
                  <div key={item._id} className="mt-4 text-base">
                    <span className="font-semibold">SĐT liên hệ:</span> {item.address}
                  </div>
                ))}
            </div>
          </div>

          {/* Form liên hệ */}
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

export default ContactClient;
