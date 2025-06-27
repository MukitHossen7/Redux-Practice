import TaskCard from "@/components/task/TaskCard";
import { TaskModel } from "@/components/task/TaskModel";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  return (
    <div className="py-10">
      <div className="flex max-w-2xl mx-auto justify-between">
        <h1 className="text-center mb-4 text-xl">This is Task Page</h1>
        <TaskModel></TaskModel>
      </div>
      <div>
        {tasks.map((task, idx) => {
          return <TaskCard task={task} key={idx}></TaskCard>;
        })}
      </div>
    </div>
  );
};

export default Task;
