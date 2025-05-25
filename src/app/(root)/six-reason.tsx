import Image from "next/image";

const SixReasonData = [
  {
    image: "https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/like.svg",
    text: "Dược đảm bảo chất lượng dịch vụ nhơ đội ngũ quan lý trịnh độ cao, giàu kinh nghiệm, voi đàu tàu là anh Vuong Ha (Ha Hunter) – chuyền gia hàng đầu vê lốp va các dich vụ liên quan tại Việt Nam.",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/like.svg",
    text: "Đội ngũ kỹ thuật viên dược đào tao chuyền môn theo tiêu chuẩn quốc tế của hãng đàu như HUNTER (MY) và Michelin (Pháp).",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/like.svg",
    text: "Cơ sở vật chất rồng rãi, hiên đai voi ngày đù dan thiết bị HUNTER nháp khâu chinh hăng, dat tiêu chuẩn cao nhát của Michelin Việt Nam va Hunter Việt Nam.",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/like.svg",
    text: "Tiêu chuẩn dịch vụ đàu ra cao nhát Việt Nam, hưong tới viếc nâng cao trải nghiệm tài xe cho khách hàng.",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/like.svg",
    text: "Các sản phẩm tại Nhật Phát Auto dược đảm bảo tinh hêu qua sư dung, nháp chinh hăng từ các trương hieu hàng đàu the gioi.",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/like.svg",
    text: "Quy trình hoạt động tinh gọn, nhân chong, tiên dung giup qua trinh trai nghiem dich vu hoan hao nhat, tur khâu tư vấn, tiên don va nhac nhó bảo dường định kỳ.",
  },
];

function SixReason() {
  return (
    <div className="pt-[68px] px-4  gap-10 pb-[110px] max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-7">
      <div className="lg:col-span-3">
        <Image
          alt=""
          width={500}
          height={500}
          src={"https://nhatphatauto.vn/wp-content/uploads/2024/06/NhatPhat-10year.jpg"}
          className="w-full h-full"
        />
      </div>
      <div className="lg:col-span-4">
        <div className="text-[#d51921] font-bold text-[36px]">
          6 LÝ DO NHẬT PHÁT AUTO LÀ LỰA CHỌN TỐT NHẤT DÀNH CHO BẠN
        </div>
        <div className="text-lg font-semibold mb-[25px]">
          Hành trình chinh phục khách hàng của Nhật Phát Auto bắt đầu từ năm 2013, chính sự ủng hộ, yêu mến của tất cả
          quý khách hàng là động lực lớn nhất để chúng tôi liên tục hoàn thiện và phát triển trở thành hệ thống trung
          tâm lốp xe hàng đầu tại Việt Nam.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-10">
          {SixReasonData.map((item, index) => {
            return (
              <div key={index} className="flex gap-2">
                <div>
                  <Image alt="" width={20} height={200} src={item.image} className="min-w-[20px] mt-[5px]" />
                </div>
                <div className="font-light text-base">{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SixReason;
