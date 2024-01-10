import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import appSlice from "../slices/appSlice";
import userDetailsSlice from "../slices/userCrudSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    users: userDetailsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type StoreDispatch = typeof appStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<StoreDispatch>();
