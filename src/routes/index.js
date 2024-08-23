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
import Videos from "../modules/videosMarvel";
import LogIn from "../modules/loginPage";
import Unlimited from "../modules/unlimited";
import Agreement from "../modules/agreement";
import Insider from "../modules/insider";
import LifeStyle from "../modules/lifestyle";
import Roleplaying from "../modules/roleplaying";
import Books from "../modules/books";
import Help from "../modules/help";
import AnnualPlus from "../modules/annualPlus";

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
            {
                path: "/videos",
                element: <Videos />
            },
            {
                path: "/agreement",
                element: <Agreement />
            },
            {
                path: "/insider",
                element: <Insider />
            },
            {
                path: "/lifestyle",
                element: <LifeStyle />
            },
            {
                path: "/roleplaying",
                element: <Roleplaying />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/annualplus",
                element: <AnnualPlus />
            },
        ]
    },

    {
        path: "/login",
        element: <LogIn />
    },

    {
        path: "/unlimited",
        element: <Unlimited />
    },

    {
        path: "/help",
        element: <Help />
    },

    {
        path: "*",
        element: <Error />
    },
]
)

export default router;