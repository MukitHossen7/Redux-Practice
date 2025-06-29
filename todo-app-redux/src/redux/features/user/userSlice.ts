import type { IUser } from "@/interface/user.interface/user.interface";
import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IUserInitialState {
  users: IUser[];
}
const initialState: IUserInitialState = {
  users: [
    {
      id: "1223",
      name: "Mukit",
    },
    {
      id: "12233",
      name: "Raju",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
