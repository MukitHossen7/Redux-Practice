import Navbar from "@/components/shared/navbar/navbar";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
};

export default MainLayouts;
