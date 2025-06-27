import { MdDeleteForever } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
const TaskCard = () => {
  return (
    <div className="border px-5 py-5 rounded-md flex justify-between max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <div className=" flex gap-2, items-center">
          <div className="size-3 rounded-full bg-green-500"></div>
          <h1>Hello Task</h1>
        </div>
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
