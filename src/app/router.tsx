import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import RouteFallback from "@/components/layout/RouteFallback/RouteFallback";

// Route-level code splitting: only the active page's chunk (and its
// chart/animation dependencies) downloads on first paint, instead of
// every page's code shipping in one bundle up front.
const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));
const Experience = lazy(() => import("@/pages/Experience/Experience"));
const Projects = lazy(() => import("@/pages/Projects/Projects"));
const Infrastructure = lazy(() => import("@/pages/Infrastructure/Infrastructure"));
const Professional = lazy(() => import("@/pages/Professional/Professional"));
const Terminal = lazy(() => import("@/pages/CommandCenter/CommandCenter"));
const Contact = lazy(() => import("@/pages/Contact/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));

const withSuspense = (element: ReactNode) => (
    <Suspense fallback={<RouteFallback />}>{element}</Suspense>
);

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: withSuspense(<Dashboard />),
                },
                {
                    path: "experience",
                    element: withSuspense(<Experience />),
                },
                {
                    path: "projects",
                    element: withSuspense(<Projects />),
                },
                {
                    path: "infrastructure",
                    element: withSuspense(<Infrastructure />),
                },
                {
                    path: "professional",
                    element: withSuspense(<Professional />),
                },
                {
                    path: "terminal",
                    element: withSuspense(<Terminal />),
                },
                {
                    path: "contact",
                    element: withSuspense(<Contact />),
                },
            ],
        },
        {
            path: "*",
            element: withSuspense(<NotFound />),
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);
