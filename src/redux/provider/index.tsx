"use client";

import { Provider } from "react-redux";
import appStore from "../store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={appStore}>{children}</Provider>;
}
