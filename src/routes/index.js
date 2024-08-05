import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";
import Error from "../error";
import News from "../modules/news";
import Comics from "../modules/comics";
import Characters from "../modules/characters";
import Movies from "../modules/movies";
import TvShows from "../modules/tvShows";
import Games from "../modules/games";

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
            {
                path: "/movies",
                element: <Movies />
            },
            {
                path: "/tvshows",
                element: <TvShows />
            },
            {
                path: "/games",
                element: <Games />
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