import type { IUser } from "@/interface/user.interface/user.interface";
import { createSlice } from "@reduxjs/toolkit";

export interface IUserInitialState {
  users: IUser[];
}
const initialState: IUserInitialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
