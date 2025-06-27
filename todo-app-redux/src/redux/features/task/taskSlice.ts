import type { ITasks } from "@/interface/tasks.interface/tasks.interface";
import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  tasks: ITasks[];
}
const initialState: IInitialState = {
  tasks: [
    {
      id: "123365",
      title: "Initialize frontend",
      description: "Create Home page, and routing",
      dueDate: "06/27/2025",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "123365",
      title: "Initialize Backend",
      description: "Create Backend Repo",
      dueDate: "06/27/2025",
      isCompleted: false,
      priority: "Low",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
