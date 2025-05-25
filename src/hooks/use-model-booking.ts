import { create } from "zustand";

interface ModalCreateProps {
  isShowModelBooking: boolean;
  setIsShowModelBooking: (isShowModelBooking: boolean) => void;
}

const useModalBooking = create<ModalCreateProps>()((set) => ({
  isShowModelBooking: false,
  setIsShowModelBooking: (isShowModelBooking: boolean) => set({ isShowModelBooking }),
}));
export default useModalBooking;
