import UserCard from "@/components/user/UserCard";
import type { IUser } from "@/interface/user.interface/user.interface";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectUsers);
  return (
    <div>
      <div className="py-10">
        <div className="flex max-w-2xl mx-auto justify-between"></div>
        <div>
          {users?.map((userData: IUser, idx: number) => {
            return <UserCard userData={userData} key={idx}></UserCard>;
          })}
        </div>
      </div>
    </div>
  );
};
export default User;
