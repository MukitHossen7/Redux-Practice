import { MdDeleteForever } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITasks } from "@/interface/tasks.interface/tasks.interface";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { deleteTask, toggleTask } from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";

interface IProps {
  task: ITasks;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const addTaskUser = users.find((user) => user.id === task.assignedTo);
  return (
    <div className="border px-5 py-5 rounded-md flex justify-between max-w-2xl mx-auto">
      <div className="">
        <div className="flex gap-2 items-center ">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500 ": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task?.title}
          </h1>
        </div>
        <p>AssignedTo : {addTaskUser ? addTaskUser.name : "No user"}</p>
        <p className="py-5">{task?.description}</p>
      </div>
      <div className="flex gap-3 items-center">
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-500 text-xl"
        >
          <MdDeleteForever />
        </button>
        <Checkbox onClick={() => dispatch(toggleTask(task.id))} />
      </div>
    </div>
  );
};

export default TaskCard;
