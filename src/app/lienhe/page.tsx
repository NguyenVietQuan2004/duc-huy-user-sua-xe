import LienHeForm from "./form";

function GioiThieu() {
  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center h-[500px] "
          style={{
            backgroundImage: "url(https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-LienHe.jpg)",
          }}
        />
        <div className="relative max-w-[1140px] py-[120px] h-[500px] pt-[160px] lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[540px]">
            <div className="text-[18px]">LIÊN HỆ</div>
            <div className="text-[36px] font-bold">Nếu có câu hỏi, đừng ngần ngại liên hệ với Nhật Phát Auto</div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-[1100px] px-4  mx-auto text-[18px]  font-light py-20 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Maps & Addresses */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold">Nhật Phát – Trương Công Giai</h3>
              <p>82 Trương Công Giai, Dịch Vọng, Cầu Giấy, Hà Nội</p>
              <iframe
                className="w-full h-[200px] mt-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.527112333342!2d105.78313931540277!3d21.01117109387771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab43c6fd109f%3A0x69fa285f8a9d4917!2zTmjDoCBQaMOhdCAtIFRyxrDGoW5nIENvbmcgR2lh!5e0!3m2!1svi!2s!4v1686487495243!5m2!1svi!2s"
                loading="lazy"
              ></iframe>
            </div>

            <div>
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
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <h2 className="text-[#124D9B] text-4xl leading-[48px] font-bold mb-6">
              ĐỂ LẠI LỜI NHẮN CHO <br /> NHẬT PHÁT AUTO
            </h2>
            <LienHeForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GioiThieu;
