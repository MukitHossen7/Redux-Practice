import TaskCard from "@/components/task/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <div className="py-10">
      <h1 className="text-center mb-4 text-xl">This is Task Page</h1>
      <div>
        {tasks.map((task, idx) => {
          return <TaskCard task={task} key={idx}></TaskCard>;
        })}
      </div>
    </div>
  );
};

export default Task;
