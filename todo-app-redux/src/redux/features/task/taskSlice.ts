import type { ITasks } from "@/interface/tasks.interface/tasks.interface";
import type { RootState } from "@/redux/store";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  tasks: ITasks[];
  filter: "all";
}
const initialState: IInitialState = {
  tasks: [],
  filter: "all",
};
type DraftTask = Pick<ITasks, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITasks => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      // const id = uuidv4();
      // const taskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false,
      // };

      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
