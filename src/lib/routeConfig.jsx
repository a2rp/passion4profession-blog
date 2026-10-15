import React, { lazy } from "react";
import { blogRegistry } from "./blogRegistry";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../components/about"));
const NotFound = lazy(() => import("../pages/notFound"));

export const routeConfig = [
    ...blogRegistry.map((blog) => ({
        path: blog.path,
        element: blog.component,
    })),
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
];

export const fallbackRoute = {
    path: "*",
    element: <NotFound />,
};
