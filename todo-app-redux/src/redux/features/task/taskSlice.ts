import type { ITasks } from "@/interface/tasks.interface/tasks.interface";
import type { RootState } from "@/redux/store";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

export interface IInitialState {
  tasks: ITasks[];
  filter: PriorityType;
}
const initialState: IInitialState = {
  tasks: [],
  filter: "All",
};

type DraftTask = Pick<
  ITasks,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;
export type PriorityType = "All" | "Low" | "Medium" | "High";

const createTask = (taskData: DraftTask): ITasks => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
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
    toggleTask: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterTask: (state, action: PayloadAction<PriorityType>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "Low" || filter === "Medium" || filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === filter);
  }
  return state.todo.tasks;
};

export const { addTask, toggleTask, deleteTask, filterTask } =
  taskSlice.actions;

export default taskSlice.reducer;
