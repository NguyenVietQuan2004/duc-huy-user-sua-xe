"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import useModalBooking from "@/hooks/use-model-booking";

function GioiThieu() {
  const { setIsShowModelBooking } = useModalBooking();
  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center h-[500px]  lg:pt-0 "
          style={{
            backgroundImage: "url(https://nhatphatauto.vn/wp-content/uploads/2024/06/Hero-GioiThieu.jpg)",
          }}
        />
        <div className="relative max-w-[1140px] py-[120px] pt-[160px] h-[500px] lg:pt-[120px] mx-auto px-4 ">
          <div className=" text-white max-w-[540px] h-[189px]">
            <div className="text-[18px]">GIỚI THIỆU VỀ NHẬT PHÁT AUTO</div>
            <div className="text-[36px] font-bold">Công nghệ đỉnh cao mang lại uy tín & chất lượng vượt trội</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] px-4  mx-auto text-[18px] font-light py-10 [min-width:500px]:pt-40   flex flex-col gap-6">
        <div className="text-[#ff0000] text-[30px] font-bold">
          {" "}
          Uy tín của Nhật Phát Auto là sự kết hợp tổng hòa của thiết bị công nghệ hiện đại, quy trình chuẩn mực và kiến
          thức chuyên sâu.
        </div>
        <div className="text-[18px] font-bold">Hơn 10 năm hình thành và phát triển.</div>
        <div className="font-light text-[18px]">
          Nhật Phát Auto được thành lập từ năm 2013, và đã có hơn 10 năm hoạt động và phát triển, trở thành một trong
          những hệ thống trung tâm dịch vụ lốp xe hàng đầu tại Việt Nam. Chúng tôi cam kết mang đến cho khách hàng những
          sản phẩm và dịch vụ tốt nhất, đáp ứng các nhu cầu về lốp xe ô tô và dịch vụ liên quan.
        </div>
        <div className="font-light text-[18px]">
          Tại Nhật Phát Auto, chúng tôi tự hào cung cấp các sản phẩm chính hãng từ các thương hiệu uy tín nhất trên thế
          giới với đầy đủ các chính sách bảo hành từ nhà sản xuất. Sự đa dạng và chất lượng của sản phẩm hàng đầu giúp
          khách hàng yên tâm khi trao niềm tin nơi Nhật Phát.
        </div>

        <div>
          {" "}
          <Image
            alt=""
            width={1000}
            height={700}
            className="object-cover w-full"
            src={
              "https://nhatphatauto.vn/wp-content/uploads/2024/05/23-T09-NhatPhat-10year-PostGiaiThuong-1200x675-01-1.jpg"
            }
          />
        </div>
        <div className="font-light text-[18px]">
          Sự an toàn và cảm nhận của khách hàng là ưu tiên hàng đầu của Nhật Phát Auto. Chúng tôi xây dựng quy trình
          hoạt động dựa theo tiêu chuẩn của Michelin Việt Nam và Hunter Việt Nam, đảm bảo mỗi dịch vụ đều đạt chất lượng
          cao nhất.
        </div>
        <div>
          <Image
            alt=""
            width={34}
            height={70}
            src={"https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/quotation-red.svg"}
          />
        </div>
        <div className="font-light text-[36px] text-center">
          Hơn <span className="font-bold">50.000</span> khách hàng đã cảm nhận sự thỏa mãn hoàn hảo phía sau tay lái
          cùng Nhật Phát Auto
        </div>
        <div className="flex justify-end">
          {" "}
          <Image
            alt=""
            width={34}
            height={70}
            src={"https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/quotation-red.svg"}
          />
        </div>
        <div>
          Để có thể làm khách hàng hài lòng, chúng tôi luôn muốn nâng tầm dịch vụ đạt tới cấp độ cao nhất. Nhật Phát
          Auto có hệ thống trung tâm lốp xe được trang bị dàn thiết bị Hunter như máy cân chỉnh độ chụm Hunter HawkEye
          Elite®, máy ra vào lốp Hunter TCX59, máy cân bằng động lốp xe Hunter Road Force® Elite, máy láng đĩa phanh
          Hunter AutoComp Elite®. Tất cả được nhập khẩu chính hãng từ Hunter Engineering (Mỹ). Thiết bị công nghệ cao,
          hiện đại chính là nền tảng cho tiêu chuẩn chất lượng dịch vụ của Nhật Phát.
        </div>
        <div>
          Tuy nhiên, nếu chỉ thiết bị thì không đủ mà còn cần kiến thức vững vàng và đôi bàn tay kinh nghiệm. Dưới sự
          đào tạo bài bản của Hunter Việt Nam về kiến thức chuyển động bánh xe, cũng như sự hướng dẫn “thực chiến” của
          anh Vương Hà – chuyên gia hàng đầu Việt Nam, Nhật Phát Auto thành công chinh phục lòng tin của rất nhiều khách
          hàng, xây dựng được chỗ đứng vững chắc trong lòng cộng đồng tài xế lớn như OTOFUN.
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="">
              <div className="z-0 relative flex justify-center">
                <Image
                  alt=""
                  width={460}
                  height={460}
                  src={"https://nhatphatauto.vn/wp-content/uploads/2024/05/ds.png"}
                  className="aspect-square z-0 rounded-xl object-cover "
                />
              </div>
              <div className="bg-[#124D9B] text-center rounded-xl relative z-10 p-8 -mt-10 max-w-[400px] mx-auto shadow-[2px_2px_2px_0px_rgba(0,0,0,0.25)] ">
                <h3 className="text-white text-lg font-bold">
                  ÔNG VƯƠNG THÁI HÀ <br /> (Hà Hunter){" "}
                </h3>
                <p className="text-white font-light ">
                  Được đào tạo về cân chỉnh Hunter tại Mỹ cùng với hơn 15 năm kinh nghiệm, anh Hà được cộng đồng đặt
                  biệt danh "Hà Hunter" như sự công nhận là chuyên gia hàng đầu tại Việt Nam.
                </p>
              </div>
            </div>

            <div className="">
              <div className="z-0 relative flex justify-center">
                <Image
                  alt=""
                  width={460}
                  height={460}
                  src={"https://nhatphatauto.vn/wp-content/uploads/2024/05/uads.png"}
                  className="aspect-square z-0 rounded-xl object-cover "
                />
              </div>
              <div className="bg-[#124D9B] text-center rounded-xl relative z-10 p-8 -mt-10 max-w-[400px] mx-auto shadow-[2px_2px_2px_0px_rgba(0,0,0,0.25)] ">
                <h3 className="text-white text-lg font-bold">
                  ĐỘI NGŨ KỸ THUẬT VIÊN <br /> CHUYÊN NGHIỆP
                </h3>
                <p className="text-white font-light ">
                  Đội ngũ kỹ thuật viên tại Nhật Phát Auto được đào tạo theo tiêu chuẩn hai thương hiệu hàng đầu thế
                  giới là Hunter (Mỹ) và Michelin (Pháp). Kết hợp với quy trình hoạt động tiêu chuẩn Quốc tế.
                </p>
              </div>
            </div>

            <div></div>
          </div>
        </div>
        <div>
          Chúng tôi hiểu rằng sự an toàn và hiệu suất của xe bạn là quan trọng nhất. Vì vậy, mỗi lần bạn đến với Nhật
          Phát Auto, chúng tôi đều nỗ lực hết mình để đảm bảo xe của bạn luôn đạt được trạng thái tốt nhất, trước khi
          rời khỏi trung tâm. Chính sự háo hức và thỏa mãn của khách hàng khi trở lại ghế ngồi phía sau vô-lăng là nguồn
          cảm hứng công hiến vô tận để Nhật Phát Auto tiếp tục nâng cấp, đổi mới và cung cấp tiêu chuẩn dịch vụ cao
          nhất!
        </div>
        <div>
          <div className="">
            <Image
              src="https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625656.png"
              alt="Ảnh 1"
              width={800}
              height={800}
              className=" rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          {" "}
          <Image
            alt=""
            width={34}
            height={70}
            src={"https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/quotation-red.svg"}
          />
        </div>
        <div className="font-light text-[36px] text-center">Tới để cảm nhận sự thỏa mãn từ phía sau vô-lăng!</div>
        <div className="flex justify-end">
          {" "}
          <Image
            alt=""
            width={34}
            height={70}
            src={"https://nhatphatauto.vn/wp-content/themes/AvantDG/assets/svg/quotation-red.svg"}
          />
        </div>

        <div>Hãy gửi niềm tin cho Nhật Phát Auto, chúng tôi sẽ không làm bạn thất vọng.</div>

        <div className="flex justify-center mt-10">
          <Button
            onClick={() => setIsShowModelBooking(true)}
            variant={"outline"}
            type="submit"
            className="w-[460px]  bg-[#d51921] border border-transparent transition-all duration-500 hover:border-[#d51921]  text-white font-semibold py-7 rounded hover:bg-white hover:text-[#d51921] "
          >
            ĐẶT LỊCH HẸN TỚI NHẬT PHÁT AUTO
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GioiThieu;
