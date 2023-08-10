import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = { loading: false, users: [], errors: "" };
const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((_) => _.data.map((user: any) => ({ id: user.id, name: user.name })));
});

const initialState: {
  loading: boolean;
  errors: string;
  entities: { id: number; name: string }[];
} = {
  loading: false,
  entities: [],
  errors: "",
};
export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (userId: number) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((_) => {
        const user = _.data;
        return { id: user.id, name: user.name };
      });
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchUsers.pending, (state, action) => {
    //   state.loading = false;
    // });
    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   state.loading = true;
    //   state.users = action.payload;
    //   state.errors = "";
    // });
    // builder.addCase(fetchUsers.rejected, (state, action) => {
    //   state.loading = true;
    //   state.users = [];
    //   state.errors = `${action.error.message}`;
    // });
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.push(action.payload);
      state.errors = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.entities = [];
      state.errors = `${action.error.message}`;
    });
  },
});
