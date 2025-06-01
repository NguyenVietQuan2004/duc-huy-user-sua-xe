"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function AnimationInView() {
  const [image, imageInView] = useInView({
    threshold: 0.1,
  });
  return (
    <div
      ref={image}
      className={` relative duration-500 ${imageInView ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
    >
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
  );
}

export default AnimationInView;
