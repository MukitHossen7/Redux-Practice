import type { IUser } from "@/interface/user.interface/user.interface";
import type { RootState } from "@/redux/store";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface IUserInitialState {
  users: IUser[];
}
const initialState: IUserInitialState = {
  users: [
    {
      id: "msQsaTk1yZUuWnPF_d0sg",
      name: "Cr7",
    },
    {
      id: "_AhKWNoNbhmUZxzs7w1xY",
      name: "Mim",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const userData = {
        ...action.payload,
        id: nanoid(),
      };
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
