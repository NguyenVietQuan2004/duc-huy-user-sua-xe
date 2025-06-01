// import { Blog } from "./type/blog";
// import { Service } from "./type/service";
// export const content = `<ul>
// 	<li><strong>Hi chữ n&agrave;y in đậm c&oacute; dấu ở đầu</strong></li>
// </ul>

// <p><strong>TRƯỜNG ĐẠI HỌC C&Ocirc;NG NGHỆ TH&Ocirc;NG TIN</strong><br />
// <strong>KHOA C&Ocirc;NG NGHỆ PHẦN MỀM</strong></p>

// <p>&lt;div style=&quot;text-align: center;&quot;&gt;&lt;h1&gt;B&Aacute;O C&Aacute;O TỔNG HỢP&lt;/h1&gt;&lt;/div&gt;</p>

// <hr />
// <p><strong>Sinh vi&ecirc;n thực hiện</strong>: <em>Nguyễn Văn A</em><br />
// <strong>M&atilde; số sinh vi&ecirc;n</strong>: 12345678<br />
// <strong>Lớp</strong>: SE1501<br />
// <strong>M&ocirc;n học</strong>: Thiết kế v&agrave; ph&aacute;t triển phần mềm<br />
// <strong>GV hướng dẫn</strong>: <strong>ThS. Trần Văn B</strong><br />
// <strong>Ng&agrave;y nộp</strong>: 30/05/2025</p>

// <hr />
// <p><strong>I. Giới thiệu chung</strong></p>

// <p>Trong b&aacute;o c&aacute;o n&agrave;y, ch&uacute;ng t&ocirc;i sẽ tr&igrave;nh b&agrave;y về qu&aacute; tr&igrave;nh <strong>ph&acirc;n t&iacute;ch, thiết kế v&agrave; triển khai</strong> hệ thống <strong>quản l&yacute; b&aacute;n h&agrave;ng trực tuyến</strong>. Dự &aacute;n được ph&aacute;t triển bằng ng&ocirc;n ngữ JavaScript, kết hợp với <strong>Node.js</strong> v&agrave; <strong>React</strong>.</p>

// <p>🔍 <em>Ch&uacute; &yacute;</em>: B&aacute;o c&aacute;o sử dụng dữ liệu giả định, kh&ocirc;ng đại diện cho hệ thống thực tế.</p>

// <hr />
// <p><strong>II. Mục ti&ecirc;u dự &aacute;n</strong></p>

// <ol>
// 	<li>Tạo hệ thống đơn giản, dễ mở rộng.</li>
// 	<li>Hỗ trợ quản l&yacute; sản phẩm, người d&ugrave;ng, đơn h&agrave;ng.</li>
// 	<li>&Aacute;p dụng kiến thức:
// 	<ul style="list-style-type:circle">
// 		<li><strong>Database</strong> (MongoDB)</li>
// 		<li><strong>API</strong> (RESTful)</li>
// 		<li><strong>Frontend</strong> (Next.js)</li>
// 	</ul>
// 	</li>
// </ol>

// <hr />
// <p><strong>III. M&ocirc; tả chức năng ch&iacute;nh</strong></p>

// <table border="1">
// 	<thead>
// 		<tr>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p><strong>STT</strong></p>
// 			</td>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p><strong>Chức năng</strong></p>
// 			</td>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p><strong>M&ocirc; tả</strong></p>
// 			</td>
// 		</tr>
// 	</thead>
// 	<tbody>
// 		<tr>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p>1</p>
// 			</td>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p>Quản l&yacute; sản phẩm</p>
// 			</td>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p>Th&ecirc;m/sửa/x&oacute;a sản phẩm</p>
// 			</td>
// 		</tr>
// 		<tr>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p>2</p>
// 			</td>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p>Quản l&yacute; đơn h&agrave;ng</p>
// 			</td>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p>Theo d&otilde;i, x&aacute;c nhận, huỷ đơn h&agrave;ng</p>
// 			</td>
// 		</tr>
// 		<tr>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p>3</p>
// 			</td>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p>Thống k&ecirc;</p>
// 			</td>
// 			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black">
// 			<p>Doanh thu theo th&aacute;ng</p>
// 			</td>
// 		</tr>
// 	</tbody>
// </table>

// <hr />
// <p><strong>IV. H&igrave;nh ảnh giao diện (minh họa)</strong></p>

// <hr />
// <p><strong>V. Kết luận</strong></p>

// <p>Dự &aacute;n đ&atilde; đạt được <strong>90% y&ecirc;u cầu ban đầu</strong>. Tuy c&ograve;n một số hạn chế về UI, nhưng hệ thống hoạt động ổn định. Chi tiết m&atilde; nguồn xem tại:<br />
// 🔗 <a href="https://github.com/user/project" target="_new">https://github.com/user/project</a></p>

// <hr />
// <p><strong>Từ kh&oacute;a: <em>E-Commerce, Node.js, React, MongoDB</em><br />
// K&yacute; tự đặc biệt thử nghiệm: &copy; &trade; </strong><strong>✓</strong><strong> </strong><strong>★</strong><strong> </strong><strong>&rArr;</strong><br />
// <strong>Highlight v&iacute; dụ: </strong><strong>Hệ thống cần bảo mật &lt;== rất quan trọng!</strong><br />
// <strong>Ngắt trang ở đ&acirc;y để chia file</strong></p>

// <p>&nbsp;</p>
// `;
// export const serviceDetail: Service = {
//   _id: "1",
//   name: "bai-viet-so-1",
//   content,
//   images: [
//     "https://nhatphatauto.vn/wp-content/uploads/2025/04/25T04-05-NhatPhat-Post-BaoDuong-1200x675-02.jpg",
//     "https://nhatphatauto.vn/wp-content/uploads/2025/04/25T04-05-NhatPhat-Post-BaoDuong-1200x675-02.jpg",
//   ],
//   author_id: 1,
//   created_at: new Date("2025-05-25T08:00:00Z"),
//   updated_at: new Date("2025-05-25T12:00:00Z"),
// };
// export const services = [
//   {
//     key: "Thay thế lốp xe chính hãng",
//     text: "THAY THẾ LỐP XE CHÍNH HÃNG",
//     value: "/service/thaylop",
//     image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Frame-2.svg",
//     sub: "Cung cấp và thay thế lốp xe chính hãng chất lượng cao như Michelin, Bridgestone, Matrax...",
//   },
//   {
//     key: "Cân bằng động, đảo lốp xe",
//     value: "/service/canbang",
//     text: "CÂN BĂNG ĐỒNG, ĐẠO LỐP XE",
//     image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-6.svg",
//     sub: "Phát hiện mòn cân bằng xe, xử lý cân bằng trọng lượng lốp, làm lại lớp vỏ cao su.",
//   },
//   {
//     key: "Cân chỉnh độ chụm Hunter",
//     value: "/service/canchinh",
//     text: "CÂN CHỈNH ĐỘ CHÙM HUNTER",
//     image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_3-1.svg",
//     sub: "Kiểm tra & khôi phục nguyên trạng gay lốp mòn không đều, lệch vọ lăng, nhào lái.",
//   },
//   {
//     key: "Láng đĩa, thay má phanh",
//     text: "LÁNG DÍA, THAY MÃ PHANH",
//     value: "/service/langdia",
//     image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-7.svg",
//     sub: "Xử lý tinh trạng khi phanh tao tiếng ồn, rung, hiếu suất kém, đảm bảo an toàn khi di chuyển.",
//   },
//   {
//     key: "Thay dầu xe, bảo dưỡng nhanh",
//     value: "/service/thaydauxe",
//     text: "THAY DẦU XE, BẢO DƯỠNG NHANH",
//     image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-1.svg",
//     sub: "Bảo dưỡng, thay thế cho xe nhur dầu, nhớt, ác quy...bảng sản phẩm chính hãng.",
//   },
//   {
//     key: "Dịch vụ chăm sóc xe khác",
//     value: "/service/chamsoc",
//     text: "DỊCH VỤ CHĂM SÓC XE KHÁC",
//     image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Clip-path-group-3.svg",
//     sub: "Kiểm tra, phát hiện và cung cấp giải pháp chăm sóc xe bảng các sản phẩm chính hãng.",
//   },
// ];
export const sliderData = [
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Hero-01.png",
    text: "10 năm chinh phục <br/> lòng tin khác hàng",
    sub: "Hệ thống 3 trung tâm Michelin Nhật Phát chuyên thay thế lốp xe ô tô chính hãng và cung cấp dịch vụ cân bằng động, cân chỉnh độ chụm",
    subImage: [
      "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625623.png",
      "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group-625624.png",
    ],
    button: "ĐẶT LỊCH HẸN",
    linkTo: "booking",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/06/TCG-M.jpg",
    text: "Nhật Phật Thành Thái chuyến đi điểm",
    sub: "Nhật Phật Thành Thái đã được chuyển đến địa điểm mới: 82 Trương Công Giai, Dịch Vọng, Cầu Giấy, Hà Nội (cách địa điểm cũ 50m)",
    subImage: ["https://nhatphatauto.vn/wp-content/uploads/2024/07/NhatPhatAuto-Logo-Hero.png"],
    button: "TÌM ĐƯỜNG",
    linkTo: "/contact",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/06/TCG-D.jpg",
    text: "Lớp MaTraX đã có mặt tại Nhật Phật Auto",
    sub: `Thương hiệu Châu Âu"Em nguồn, em tài, em cả vị!"`,
    subImage: ["https://nhatphatauto.vn/wp-content/uploads/2024/07/MatraX-Logo-White.png"],
    button: "TÌM HIỂU THÊM",
    linkTo: "/introduce",
  },
];
export const SixReasonData = [
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

// export const blogSample: Blog = {
//   _id: "1",
//   title:
//     "Bài viết số 1 Bài viết số 1 Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1  Bài viết số 1 ",
//   name: "Tin khuyến mãi",
//   content,
//   images: [
//     "https://nhatphatauto.vn/wp-content/uploads/2025/04/25T04-05-NhatPhat-Post-BaoDuong-1200x675-02.jpg",
//     "https://nhatphatauto.vn/wp-content/uploads/2025/04/25T04-05-NhatPhat-Post-BaoDuong-1200x675-02.jpg",
//   ],
//   images_name: ["Đây là ảnh 1", "Đây là ảnh 2"],
//   author_id: 1,
//   created_at: new Date("2025-05-25T08:00:00Z"),
//   updated_at: new Date("2025-05-25T12:00:00Z"),
// };

// export const sampleArrayBlog = Array.from({ length: 23 }).map((_, i) => ({
//   _id: `${i + 1}`,
//   title: `Bài viết số ${i + 1}`,
//   name: `bai-viet-so-${i + 1}`,
//   content,
//   images: ["https://nhatphatauto.vn/wp-content/uploads/2025/05/25T04-01-Brembo-Video-NghiHe-C-D-01-0-00-22-09.jpg"],
//   images_name: [],
//   author_id: 1,
//   created_at: new Date(),
//   updated_at: new Date(),
// }));

export const dataTablePriceArr = [
  {
    key: "CÂN BẰNG ĐỘNG",
    value: [
      { "Kích cỡ mâm": "Mâm 13” – 16”", "Đơn vị tính": "Bánh", "Đơn giá": "50.000đ" },
      { "Kích cỡ mâm": "Mâm 17” – 19”", "Đơn vị tính": "Bánh", "Đơn giá": "70.000đ" },
      { "Kích cỡ mâm": "Mâm 20” – 22”", "Đơn vị tính": "Bánh", "Đơn giá": "100.000đ" },
    ],
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-6.svg",
  },
  {
    key: "CHỈNH ĐỘ CHỤM (GỐC LÁI)",
    value: [
      { "Loại xe": "Xe phổ thông", "Đơn vị tính": "Xe", "Đơn giá": "600.000đ" },
      { "Loại xe": "Crossover, SUV", "Đơn vị tính": "Xe", "Đơn giá": "800.000đ" },
      { "Loại xe": "Xe sang, Xe siêu sang", "Đơn vị tính": "Xe", "Đơn giá": "1.000.000đ – 2.000.000đ" },
    ],
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_3-1.svg",
  },
  {
    key: "CÂN CHỈNH THEO GÓI",
    value: [
      { "Loại xe": "Xe phổ thông", "Đơn vị tính": "Xe", "Đơn giá": "800.000đ" },
      { "Loại xe": "Crossover, SUV", "Đơn vị tính": "Xe", "Đơn giá": "1.000.000đ" },
      { "Loại xe": "Xe sang, Xe siêu sang", "Đơn vị tính": "Xe", "Đơn giá": "1.300.000đ – 2.500.000đ" },
    ],
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Frame-1.svg",
  },
  {
    key: "LÁNG ĐĨA PHANH",
    value: [
      { "Loại xe": "Xe phổ thông", "Đơn vị tính": "Đĩa", "Đơn giá": "300.000đ" },
      { "Loại xe": "Crossover, SUV", "Đơn vị tính": "Đĩa", "Đơn giá": "400.000đ" },
      { "Loại xe": "Xe sang, Xe siêu sang", "Đơn vị tính": "Đĩa", "Đơn giá": "500.000đ – 1.000.000đ" },
    ],
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_2-7.svg",
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Frame-2.svg",
    key: "DỊCH VỤ LỐP XE",
    value: [
      {
        "Dịch vụ": "Vá lốp",
        "Mâm 13” – 15”": "50.000đ",
        "Mâm 16” – 18”": "70.000đ",
        "Mâm 16” – 18”_2": "90.000đ",
      },
      {
        "Dịch vụ": "Vá lốp miếng lớn",
        "Mâm 13” – 15”": "70.000đ",
        "Mâm 16” – 18”": "90.000đ",
        "Mâm 16” – 18”_2": "100.000đ",
      },
      {
        "Dịch vụ": "Đào mặt lốp",
        "Mâm 13” – 15”": "50.000đ",
        "Mâm 16” – 18”": "70.000đ",
        "Mâm 16” – 18”_2": "90.000đ",
      },
      {
        "Dịch vụ": "Lốp chống xịt",
        "Mâm 13” – 15”": "",
        "Mâm 16” – 18”": "100.000đ",
        "Mâm 16” – 18”_2": "120.000đ",
      },
    ],
  },
  {
    image: "https://nhatphatauto.vn/wp-content/uploads/2024/05/Group_3-2.svg",
    key: "BƠM NITƠ",
    value: [
      { "Loại xe": "Bơm lốp mới", "Đơn vị tính": "Xe", "Đơn giá": "100.000đ" },
      { "Loại xe": "Bơm lốp bổ sung", "Đơn vị tính": "Xe", "Đơn giá": "50.000đ" },
      { "Loại xe": "Bơm lốp sơ cua", "Đơn vị tính": "Xe", "Đơn giá": "50.000đ" },
    ],
  },
];
