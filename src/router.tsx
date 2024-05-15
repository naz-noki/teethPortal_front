import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./page/MainPage/MainPage";
import ErrorPage from "./page/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />,
            }
        ],
    },
    {
        path: "/error",
        element: <ErrorPage />,
    },
]);

export default router;
