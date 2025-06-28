import type { ITasks } from "@/interface/tasks.interface/tasks.interface";
import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export interface IInitialState {
  tasks: ITasks[];
  filter: "all";
}
const initialState: IInitialState = {
  tasks: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITasks>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
