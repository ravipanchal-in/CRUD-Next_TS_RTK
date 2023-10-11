import { createSlice } from "@reduxjs/toolkit";

type UsersDetailsType = {
  users: {}[];
  status: string;
  error: any;
};

const initialState: UsersDetailsType = {
  users: [],
  status: "idle",
  error: null,
};

const usersDetailsSlice = createSlice({
  name: "usersDetails",
  initialState,
  reducers: {},
});

export default usersDetailsSlice.reducer;
