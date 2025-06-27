import MainLayouts from "@/layouts/MainLayouts";
import Task from "@/pages/task/task";
import User from "@/pages/user/user";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/tasks",
        Component: Task,
      },
      {
        path: "/users",
        Component: User,
      },
    ],
  },
]);

export default router;
