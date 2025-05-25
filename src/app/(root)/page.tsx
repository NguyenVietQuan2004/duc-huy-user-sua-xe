import ModelBooking from "@/components/model-booking";
import AdviceSale from "./advice-sales";
import Booking from "./booking";
import MyPartner from "./my-partner";
import MyService from "./my-service";
import SixReason from "./six-reason";
import HomePageClient from "./slider";

const sliderData = [
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Hero-01.png",
    text: "10 năm chinh phục <br/> lòng tin khác hàng",
    sub: "Hệ thống 3 trung tâm Michelin Nhật Phát chuyên thay thế lốp xe ô tô chính hãng và cung cấp dịch vụ cân bằng động, cân chỉnh độ chụm",
    subImage: [
      "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625623.png",
      "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625624.png",
    ],
    button: "ĐẶT LỊCH HẸN",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/06/TCG-M.jpg",
    text: "Nhật Phật Thành Thái chuyến đi điểm",
    sub: "Nhật Phật Thành Thái đã được chuyển đến địa điểm mới: 82 Trương Công Giai, Dịch Vọng, Cầu Giấy, Hà Nội (cách địa điểm cũ 50m)",
    subImage: ["https://nhatphatauto.vn/wp-content/uploads/2024/07/NhatPhatAuto-Logo-Hero.png"],
    button: "TÌM ĐƯỜNG",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/06/TCG-D.jpg",
    text: "Lớp MaTraX đã có mặt tại Nhật Phật Auto",
    sub: `Thương hiệu Châu Âu"Em nguồn, em tài, em cả vị!"`,
    subImage: ["https://nhatphatauto.vn/wp-content/uploads/2024/07/MatraX-Logo-White.png"],
    button: "TÌM HIỂU THÊM",
  },
];
function Root() {
  return (
    <div className="">
      <HomePageClient sliderData={sliderData} />
      <Booking />
      <MyService />
      <SixReason />
      <AdviceSale />
      <MyPartner />
    </div>
  );
}

export default Root;
