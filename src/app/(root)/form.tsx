"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { format, isToday, parseISO } from "date-fns";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CloseIcon, XIcon } from "../../../public/icon";
import useModalBooking from "@/hooks/use-model-booking";

type FormValues = {
  name: string;
  phone: string;
  licensePlate: string;
  date: string;
  time: string;
  carType: string;
  services: string[];
  center: string;
};

const servicesOptions = [
  { label: "Thay thế lốp xe", value: "tire_replacement" },
  { label: "Cân bằng động, đảo lốp", value: "dynamic_balancing" },
  { label: "Cân chỉnh độ chụm Hunter", value: "hunter_alignment" },
  { label: "Láng đĩa, thay má phanh", value: "brake_service" },
  { label: "Thay dầu, bảo dưỡng nhanh", value: "oil_change" },
  { label: "Dịch vụ chăm sóc xe khác", value: "other_service" },
];

const centerOptions = ["Trung tâm 1", "Trung tâm 2", "Trung tâm 3", "Trung tâm 4"];

export default function Form({ hasCloseIcon }: { hasCloseIcon?: boolean }) {
  const { setIsShowModelBooking } = useModalBooking();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      services: [],
      date: format(new Date(), "yyyy-MM-dd"),
      time: "08:00",
    },
  });

  const today = format(new Date(), "yyyy-MM-dd");
  const selectedDate = useWatch({ control, name: "date" });
  const now = new Date();
  const currentHour = now.getHours();

  // Sinh giờ từ 8 đến 17, với ngày hôm nay thì chỉ hiện giờ >= giờ hiện tại
  const generateHourOptions = () => {
    const hours = [];
    for (let hour = 8; hour <= 17; hour++) {
      if (isToday(parseISO(selectedDate)) && hour < currentHour) continue;
      hours.push(hour);
    }
    return hours;
  };

  const onSubmit = (data: FormValues) => {
    const dateTime = new Date(`${data.date}T${data.time}:00`);
    if (dateTime < new Date()) {
      alert("Vui lòng chọn ngày giờ lớn hơn hiện tại.");
      return;
    }
    console.log("Form data:", data);
    alert("Đặt lịch thành công!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[540px] relative  overflow-auto mx-auto bg-[#F4F6F7] p-10 rounded-lg shadow-md"
    >
      {hasCloseIcon && (
        <button className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsShowModelBooking(false)}>
          <CloseIcon />
        </button>
      )}
      <h2 className="text-red-700 font-bold text-xl mb-4 border-b border-red-700 pb-2">ĐẶT LỊCH HẸN NGAY</h2>

      {/* Họ và tên */}
      <div className="mb-4">
        <Label htmlFor="name">Họ và tên:</Label>
        <Input
          id="name"
          placeholder="Họ và tên người lái xe *"
          {...register("name", { required: "Vui lòng nhập họ tên" })}
          className={`bg-white ${errors.name ? "border-red-500" : ""}`}
        />
        {/* {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name.message}</p>} */}
      </div>

      {/* Số điện thoại và Biển số xe */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <Label htmlFor="phone">Số điện thoại:</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Số điện thoại liên hệ *"
            {...register("phone", { required: "Vui lòng nhập số điện thoại" })}
            className={`bg-white ${errors.phone ? "border-red-500" : ""}`}
          />
          {/* {errors.phone && <p className="text-red-600 mt-1 text-sm">{errors.phone.message}</p>} */}
        </div>
        <div className="flex-1">
          <Label htmlFor="licensePlate">Biển số xe:</Label>
          <Input
            id="licensePlate"
            placeholder="Biển số xe sử dụng DV *"
            {...register("licensePlate", {
              required: "Vui lòng nhập biển số xe",
            })}
            className={`bg-white ${errors.licensePlate ? "border-red-500" : ""}`}
          />
          {/* {errors.licensePlate && <p className="text-red-600 mt-1 text-sm">{errors.licensePlate.message}</p>} */}
        </div>
      </div>

      {/* Ngày và Giờ */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <Label htmlFor="date">Ngày dự kiến:</Label>
          <Input
            id="date"
            type="date"
            {...register("date", { required: "Vui lòng chọn ngày dự kiến" })}
            min={today}
            className={`bg-white ${errors.date ? "border-red-500" : ""}`}
          />
          {/* {errors.date && <p className="text-red-600 mt-1 text-sm">{errors.date.message}</p>} */}
        </div>
        <div className="flex-1">
          <Label htmlFor="time">Giờ dự kiến:</Label>
          <Controller
            control={control}
            name="time"
            rules={{ required: "Vui lòng chọn giờ dự kiến" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value} aria-label="Giờ dự kiến">
                <SelectTrigger className={`w-full bg-white ${errors.time ? "border-red-500" : ""}`}>
                  <SelectValue placeholder="Chọn giờ" />
                </SelectTrigger>
                <SelectContent>
                  {generateHourOptions().map((hour) => {
                    const timeStr = hour.toString().padStart(2, "0") + ":00";
                    return (
                      <SelectItem key={timeStr} value={timeStr}>
                        {timeStr}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            )}
          />
          {/* {errors.time && <p className="text-red-600 mt-1 text-sm">{errors.time.message}</p>} */}
        </div>
      </div>

      {/* Loại xe */}
      <div className="mb-4">
        <Label htmlFor="carType">Loại xe:</Label>
        <Input
          id="carType"
          placeholder="VD: Sedan, SUV, MPV, ..."
          {...register("carType", { required: "Vui lòng nhập loại xe" })}
          className={`bg-white ${errors.carType ? "border-red-500" : ""}`}
        />
        {/* {errors.carType && <p className="text-red-600 mt-1 text-sm">{errors.carType.message}</p>} */}
      </div>

      {/* Dịch vụ */}
      <fieldset className="mb-4">
        <legend className="font-semibold mb-2">Lựa chọn dịch vụ:</legend>
        <Controller
          control={control}
          name="services"
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-2">
              {servicesOptions.map(({ label, value }) => (
                <label key={value} className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox
                    checked={field.value.includes(value)}
                    onCheckedChange={(checked) => {
                      const newValue = checked ? [...field.value, value] : field.value.filter((v) => v !== value);
                      field.onChange(newValue);
                    }}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          )}
        />
      </fieldset>

      {/* Trung tâm */}
      <div className="mb-6">
        <Label htmlFor="center">Lựa chọn Trung tâm Nhật Phát Auto:</Label>
        <Controller
          control={control}
          name="center"
          rules={{ required: "Vui lòng chọn trung tâm" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value} aria-label="Trung tâm">
              <SelectTrigger className={`w-full bg-white ${errors.center ? "border-red-500" : ""}`}>
                <SelectValue placeholder="Chọn trung tâm" />
              </SelectTrigger>
              <SelectContent>
                {centerOptions.map((center) => (
                  <SelectItem key={center} value={center}>
                    {center}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {/* {errors.center && <p className="text-red-600 mt-1 text-sm">{errors.center.message}</p>} */}
      </div>

      <Button
        variant={"outline"}
        type="submit"
        className="w-full bg-[#d51921] border border-transparent transition-all duration-500 hover:border-[#d51921]  text-white font-semibold py-5 rounded hover:bg-white hover:text-[#d51921] "
      >
        ĐẶT LỊCH HẸN TỚI NHẬT PHÁT AUTO
      </Button>
    </form>
  );
}
