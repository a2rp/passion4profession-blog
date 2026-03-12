import React, { lazy } from "react";
import { blogRegistry } from "./blogRegistry";

const About = lazy(() => import("../components/about"));
const NotFound = lazy(() => import("../pages/notFound"));

export const routeConfig = [
    ...blogRegistry.map((blog) => ({
        path: blog.path,
        element: blog.component,
    })),
    {
        path: "/",
        element: <About />,
    },
    {
        path: "/home",
        element: <About />,
    },
];

export const fallbackRoute = {
    path: "*",
    element: <NotFound />,
};
