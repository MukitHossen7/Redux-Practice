import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <h2>Todo App</h2>
      <div>
        <Link to="/tasks">Task</Link>
        <Link to="/users">User</Link>
      </div>
    </>
  );
};

export default Navbar;
