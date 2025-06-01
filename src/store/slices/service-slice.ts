import { Service } from "@/type/service";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Kiểu dữ liệu của 1 service

// Kiểu dữ liệu trong slice: lưu danh sách các service
type ServiceState = {
  services: Service[];
};

const initialState: ServiceState = {
  services: [],
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<Service[]>) => {
      state.services = action.payload;
    },
  },
});

export const { setServices } = serviceSlice.actions;

export default serviceSlice.reducer;
