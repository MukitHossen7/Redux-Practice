import { ModeToggle } from "@/components/mode-toggle/mode-toggle";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around py-10">
      <h2>Todo App</h2>
      <div className="flex gap-5">
        <Link to="/tasks">Task</Link>
        <Link to="/users">User</Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Navbar;
