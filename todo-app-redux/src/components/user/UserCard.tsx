import type { IUser } from "@/interface/user.interface/user.interface";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { MdDeleteForever } from "react-icons/md";

interface IProps {
  userData: IUser;
}
const UserCard = ({ userData }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="border px-5 py-5 rounded-md flex justify-between max-w-2xl mx-auto">
        <h2>{userData?.name}</h2>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => dispatch(removeUser(userData.id))}
            className="text-red-500 text-xl"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
