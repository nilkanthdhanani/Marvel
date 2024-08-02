import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";
import Error from "../error";
import News from "../modules/news";
import Comics from "../modules/comics";
import Characters from "../modules/characters";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/news",
                element: <News />
            },
            {
                path: "/comics",
                element: <Comics />
            },
            {
                path: "/characters",
                element: <Characters />
            },
        ]
    },

    {
        path: "*",
        element: <Error />
    }
]
)

export default router;