import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <div>
      <h1>This is Task Page</h1>
    </div>
  );
};

export default Task;
