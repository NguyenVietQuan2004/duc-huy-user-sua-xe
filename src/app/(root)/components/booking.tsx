import Form from "./form";
import Image from "next/image";

function Booking() {
  return (
    <div
      className="flex px-4 flex-col lg:flex-row lg:px-[200px] items-center gap-10 relative  z-[8] 
      lg:-top-[240px] mt-8 lg:mt-0"
    >
      <div className="flex-1 border  h-[100vh] border-[#08080808]  bg-[#]">
        <Form />
      </div>

      <div className="flex-1 text-lg font-light mt-16 lg:mt-28">
        <Image
          alt=""
          src={"https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625622-1.svg"}
          width={255}
          height={100}
          className="mb-3"
        />
        <div className="text-4xl mb-7 font-semibold">Tới để cảm nhận sự thỏa mãn từ phía sau vô-lăng!</div>
        <div className="mb-4">
          Hệ thống 3 trung tâm Michelin Nhật Phát chuyên thay thế lốp xe ô tô chính hãng và cung cấp dịch vụ cân bằng
          động, cân chỉnh độ chụm bánh xe bằng máy HUNTER USA, láng đĩa phanh, thay dầu, ắc quy… theo tiêu chuẩn quốc
          tế.
        </div>
        <div>Hơn 50.000 khách hàng đã được phục vụ và hoàn toàn hài lòng phía sau vô-lăng cùng Nhật Phát Auto.</div>
      </div>
    </div>
  );
}

export default Booking;
