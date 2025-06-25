import { Category } from "@/type/category";
import { Service } from "@/type/service";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Kiểu dữ liệu của 1 service

// Kiểu dữ liệu trong slice: lưu danh sách các service
type ServiceState = {
  services: Service[];
  categories: Category[];
};

const initialState: ServiceState = {
  services: [],
  categories: [],
};
type payload = {
  services: Service[];
  categories: Category[];
};
export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<payload>) => {
      state.services = action.payload.services;
      state.categories = action.payload.categories;
    },
  },
});

export const { setServices } = serviceSlice.actions;

export default serviceSlice.reducer;
