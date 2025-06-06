"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { contactApi } from "@/api-request/contactAPI";
import { toast } from "sonner";

type FormData = {
  full_name: string;
  phone_number: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Gửi dữ liệu tại đây
    try {
      const response = await contactApi.createContact({ body: data });

      toast.success("Gửi thông tin liên hệ thành công!", {
        style: {
          backgroundColor: "#e6fffa",
          color: "#1c4532",
          border: "1px solid #38b2ac",
        },
        className: "custom-success-toast",
      });
    } catch (error) {
      console.log(error);
      toast.error("Đã có lỗi xảy ra!", {
        style: {
          backgroundColor: "#fff5f5", // nền đỏ nhạt
          color: "#c53030", // chữ đỏ đậm
          border: "1px solid #feb2b2", // viền hồng nhạt
        },
        className: "custom-error-toast",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Họ và tên *" {...register("full_name", { required: "Vui lòng nhập họ tên" })} />
      {errors.full_name && <p className="text-sm text-red-500">{errors.full_name.message}</p>}

      <Input
        placeholder="Số điện thoại liên hệ *"
        {...register("phone_number", { required: "Vui lòng nhập số điện thoại" })}
      />
      {errors.phone_number && <p className="text-sm text-red-500">{errors.phone_number.message}</p>}

      <Input
        placeholder="Email *"
        {...register("email", {
          required: "Vui lòng nhập email",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Email không hợp lệ",
          },
        })}
      />
      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

      <Textarea
        placeholder="Lời nhắn *"
        className="min-h-[120px]"
        {...register("message", { required: "Vui lòng nhập lời nhắn" })}
      />
      {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}

      <Button
        type="submit"
        className="w-full bg-[#124D9B] py-6 hover:bg-white hover:text-[#124d9b] border border-transparent hover:border-[#124d9b] transition-all duration-300 text-white"
      >
        GỬI LỜI NHẮN
      </Button>
    </form>
  );
}
