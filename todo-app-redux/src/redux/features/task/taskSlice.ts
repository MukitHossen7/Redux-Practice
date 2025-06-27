import type { ITasks } from "@/interface/tasks.interface/tasks.interface";
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
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
