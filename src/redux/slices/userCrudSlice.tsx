import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// actions - Create USer

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6525949e67cfb1e59ce77b6d.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const resJson = await response.json();
      return resJson;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// actions - Read User

export const readUser = createAsyncThunk(
  "readUserData",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://6525949e67cfb1e59ce77b6d.mockapi.io/crud"
    );
    try {
      const resJson = response.json();
      return resJson;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// actions - update USer

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://6525949e67cfb1e59ce77b6d.mockapi.io/crud/${data?.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const resJson = await response.json();
      return resJson;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://6525949e67cfb1e59ce77b6d.mockapi.io/crud/${data.id}`,
      {
        method: "DELETE",
      }
    );
    try {
      const resJson = response.json();
      return resJson;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); 

type UsersDetailsType = {
  users: {}[];
  status: string;
  error: any;
  searchText: '';
};

const initialState: UsersDetailsType = {
  users: [],
  status: "idle",
  error: null,
  searchText : ''
};

const usersDetailsSlice = createSlice({
  name: "usersDetails",
  initialState,
  reducers: {
    searchUser: (state,action) => {
    state.searchText = action.payload
  }},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "idle";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.concat(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(readUser.pending, (state) => {
        state.status = "idle";
      })
      .addCase(readUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(readUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(deleteUser.pending, (state) => {
        state.status = "idle";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { id } = action.payload; 
        if (id) {
          state.users= state.users.filter(item=> item?.id !== id)
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = "idle";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.concat(action.payload);
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {searchUser} = usersDetailsSlice.actions
export default usersDetailsSlice.reducer;
