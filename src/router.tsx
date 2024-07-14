import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./page/MainPage/MainPage";
import ErrorPage from "./page/ErrorPage/ErrorPage";
import LibraryPage from "./page/LibraryPage/LibraryPage";
import AuthorPage from "./page/AuthorPage/AuthorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />,
            },
            {
                path: "library",
                element: <LibraryPage />,
            },
            {
                path: "author/:id",
                element: <AuthorPage />,
            },
        ],
    },
    {
        path: "/error",
        element: <ErrorPage />,
    },
]);

export default router;
