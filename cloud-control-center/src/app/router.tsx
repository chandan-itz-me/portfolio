import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Dashboard from "@/pages/Dashboard/Dashboard";
import Experience from "@/pages/Experience/Experience";
import Projects from "@/pages/Projects/Projects";
import Infrastructure from "@/pages/Infrastructure/Infrastructure";
import Professional from "@/pages/Professional/Professional";
import Terminal from "@/pages/CommandCenter/CommandCenter";
import Contact from "@/pages/Contact/Contact";
import NotFound from "@/pages/NotFound/NotFound";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />,
                },
                {
                    path: "experience",
                    element: <Experience />,
                },
                {
                    path: "projects",
                    element: <Projects />,
                },
                {
                    path: "infrastructure",
                    element: <Infrastructure />,
                },
                {
                    path: "professional",
                    element: <Professional />,
                },
                {
                    path: "terminal",
                    element: <Terminal />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
            ],
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);