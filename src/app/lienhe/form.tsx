"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function LienHeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Gửi dữ liệu tại đây
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Họ và tên *" {...register("name", { required: "Vui lòng nhập họ tên" })} />
      {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

      <Input
        placeholder="Số điện thoại liên hệ *"
        {...register("phone", { required: "Vui lòng nhập số điện thoại" })}
      />
      {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}

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
