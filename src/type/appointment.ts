export type Service = {
  _id: string;
  name: string;
};

export type Center = {
  _id: string;
  name: string;
  address: string;
};

export type Appointment = {
  _id: string;
  full_name: string;
  phone_number: string;
  license_plate: string;
  expected_date: Date;
  expected_time: string;
  car_type: string;
  services: Service[];
  center: Center;
  created_at: Date;
  updated_at: Date;
  status: "pending" | "done" | "cancelled";
};

export type FormValues = {
  full_name: string;
  phone_number: string;
  license_plate: string;
  expected_date: Date;
  expected_time: string;
  car_type: string;
  services: string[]; // giả định là ObjectId string[]
  center: string;
  status: "pending" | "done" | "cancelled"; // nếu không cho user chọn, có thể để mặc định là 'pending'
};
