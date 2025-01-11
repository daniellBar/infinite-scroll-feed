import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CLIENT_ROUTES } from "./routes";
import { Feed } from "../features/Feed/Feed";

const router = createBrowserRouter([
  {
    path: CLIENT_ROUTES.Main,
    element: <App />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
    ],
  },
]);

export default router;
