import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../services/UserService";

const initialState = [];

export const retrieveUsers = createAsyncThunk(
  "users/retrieve",
  async () => {
    const res = await UserService.getAll();
    return res.data;
  }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
      [retrieveUsers.fulfilled]: (state, action) => {
        return [...action.payload.data];
      },
    },
  });
  
export default userSlice.reducer;
