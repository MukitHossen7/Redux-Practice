import MainLayouts from "@/layouts/MainLayouts";
import Task from "@/pages/task/Task";
import User from "@/pages/user/User";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        // path: "/tasks",
        Component: Task,
      },
      {
        path: "tasks",
        Component: Task,
      },
      {
        path: "users",
        Component: User,
      },
    ],
  },
]);

export default router;
