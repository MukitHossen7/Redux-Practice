import { MdDeleteForever } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITasks } from "@/interface/tasks.interface/tasks.interface";

interface IProps {
  task: ITasks;
}

const TaskCard = ({ task }: IProps) => {
  console.log(task);
  return (
    <div className="border px-5 py-5 rounded-md flex justify-between max-w-2xl mx-auto">
      <div className="">
        <div className="flex gap-2 items-center ">
          <div className="size-3 rounded-full bg-green-500"></div>
          <h1>{task?.title}</h1>
        </div>
        <p className="py-5">{task?.description}</p>
      </div>
      <div className="flex gap-3 items-center">
        <button className="text-red-500 text-xl">
          <MdDeleteForever />
        </button>
        <Checkbox />
      </div>
    </div>
  );
};

export default TaskCard;
