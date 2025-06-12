"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "../../../../public/icon";
import { Checkbox } from "@/components/ui/checkbox";
import { format, isToday } from "date-fns";
import useModalBooking from "@/hooks/use-model-booking";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormValues } from "@/type/appointment";
import { appointmentApi } from "@/api-request/appointmentAPI";
import { useAppSelector } from "@/store/hook";
import { toast } from "sonner";
import { Center } from "@/type/center";

export default function Form({ hasCloseIcon, centers }: { hasCloseIcon?: boolean; centers: Center[] | undefined }) {
  const { setIsShowModelBooking } = useModalBooking();
  const servicesOptions = useAppSelector((state) => state.service.services);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      full_name: "",
      phone_number: "",
      license_plate: "",
      expected_date: new Date(),
      expected_time: "08:00",
      car_type: "",
      services: [],
      center: "",
      status: "pending",
    },
  });

  const selectedDate = useWatch({ control, name: "expected_date" });
  const now = new Date();
  const currentHour = now.getHours();

  const generateHourOptions = () => {
    const hours = [];
    for (let hour = 8; hour <= 17; hour++) {
      if (isToday(selectedDate) && hour < currentHour) continue;
      hours.push(hour);
    }
    return hours;
  };

  const onSubmit = async (data: FormValues) => {
    const dateTime = new Date(`${data.expected_date.toISOString().split("T")[0]}T${data.expected_time}:00`);
    if (dateTime < new Date()) {
      alert("Vui lòng chọn ngày giờ lớn hơn hiện tại.");
      return;
    }
    setIsLoading(true);
    try {
      const payload = { ...data, status: "pending" };
      const res = await appointmentApi.createAppointment({ body: payload });

      toast.success("Đặt lịch thành công!", {
        style: {
          backgroundColor: "#e6fffa",
          color: "#1c4532",
          border: "1px solid #38b2ac",
        },
        className: "custom-success-toast",
      });
    } catch (error) {
      console.error(error);
      toast.error("Đã có lỗi xảy ra!", {
        style: {
          backgroundColor: "#fff5f5", // nền đỏ nhạt
          color: "#c53030", // chữ đỏ đậm
          border: "1px solid #feb2b2", // viền hồng nhạt
        },
        className: "custom-error-toast",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`max-w-[510px] relative ${
        hasCloseIcon && "max-h-[100vh]"
      } lg:max-h-[3000px] overflow-auto mx-auto bg-[#F4F6F7] p-10 px-6 lg:px-10 rounded-xl shadow-md`}
    >
      {hasCloseIcon && (
        <button
          type="button"
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsShowModelBooking(false)}
        >
          <CloseIcon />
        </button>
      )}

      <h2 className="text-red-700 font-bold text-xl mb-4 border-b border-red-700 pb-2">ĐẶT LỊCH HẸN NGAY</h2>

      <div className="mb-4">
        <Label htmlFor="full_name">Họ và tên:</Label>
        <Input
          id="full_name"
          placeholder="Họ và tên người lái xe *"
          {...register("full_name", { required: true })}
          className="bg-white"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <Label htmlFor="phone_number">Số điện thoại:</Label>
          <Input
            id="phone_number"
            type="tel"
            placeholder="Số điện thoại liên hệ *"
            {...register("phone_number", { required: true })}
            className="bg-white"
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="license_plate">Biển số xe:</Label>
          <Input
            id="license_plate"
            placeholder="Biển số xe sử dụng DV *"
            {...register("license_plate", { required: true })}
            className="bg-white"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <Label htmlFor="expected_date">Ngày dự kiến:</Label>
          <Controller
            control={control}
            name="expected_date"
            render={({ field }) => (
              <Input
                type="date"
                value={format(field.value, "yyyy-MM-dd")}
                min={format(new Date(), "yyyy-MM-dd")}
                onChange={(e) => field.onChange(new Date(e.target.value))}
                className="bg-white"
              />
            )}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="expected_time">Giờ dự kiến:</Label>
          <Controller
            control={control}
            name="expected_time"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full bg-white">
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
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="car_type">Loại xe:</Label>
        <Input
          id="car_type"
          placeholder="VD: Sedan, SUV, MPV, ..."
          {...register("car_type", { required: true })}
          className="bg-white"
        />
      </div>

      <fieldset className="mb-4">
        <legend className="font-semibold mb-2">Lựa chọn dịch vụ:</legend>
        <Controller
          control={control}
          name="services"
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-2">
              {servicesOptions?.map(({ name: label, _id: value }) => (
                <label key={value} className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox
                    checked={field.value.includes(value)}
                    onCheckedChange={(checked) => {
                      const newValue = checked ? [...field.value, value] : field.value.filter((v) => v !== value);
                      field.onChange(newValue);
                    }}
                  />
                  <span className="line-clamp-2">{label}</span>
                </label>
              ))}
            </div>
          )}
        />
      </fieldset>

      <div className="mb-6">
        <Label htmlFor="center">Lựa chọn Trung tâm Nhật Phát Auto:</Label>
        <Controller
          control={control}
          name="center"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Chọn trung tâm" />
              </SelectTrigger>
              <SelectContent>
                {centers?.map((center: Center) => (
                  <SelectItem key={center._id} value={center.name}>
                    {center.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#d51921] text-white font-semibold py-5 rounded hover:bg-white hover:text-[#d51921] border border-transparent hover:border-[#d51921]"
      >
        {isLoading ? "ĐANG GỬI..." : "ĐẶT LỊCH HẸN TỚI NHẬT PHÁT AUTO"}
      </Button>
    </form>
  );
}
