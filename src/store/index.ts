import { combineReducers } from "redux";
import serviceReducer from "./slices/service-slice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["service"],
// };
// file cấu hình persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["service"],
  version: 2, // Tăng version lên
  migrate: async (state: any) => {
    if (state?.service && !state.service.categories) {
      return {
        ...state,
        service: {
          ...state.service,
          categories: [], // Thêm categories mặc định nếu chưa có
        },
      };
    }
    return state;
  },
};

// Combine reducer trước
const rootReducer = combineReducers({
  service: serviceReducer,
});

// Dùng persistReducer với rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // đây là persisted root reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
