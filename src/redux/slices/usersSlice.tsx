import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// actions
export const fetchUserData = createAsyncThunk(
  "gitHubUsers",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch("https://api.github.com/users");
      const resJson = await response.json();
      return resJson;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

type gitHubUserType = {
  users: {}[];
  status: string;
  error: any;
};

const initialState: gitHubUserType = {
  users: [],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.status = "idle";
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = state.users.concat(action.payload);
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
