import { createSlice } from "@reduxjs/toolkit";

type appSliceType = {
  greetText: string;
};

const initialState: appSliceType = {
  greetText: "Hello World",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setGreetText: (state, action) => {
      state.greetText = action.payload;
    },
  },
});

export const { setGreetText } = appSlice.actions;
export default appSlice.reducer;
