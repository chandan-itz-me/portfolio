import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import RouteFallback from "@/components/layout/RouteFallback/RouteFallback";

// Route-level code splitting: only the active page's chunk (and its
// chart/animation dependencies) downloads on first paint, instead of
// every page's code shipping in one bundle up front.
const Home = lazy(() => import("@/pages/Home/Home"));
const ProjectDetails = lazy(() => import("@/pages/ProjectDetails/ProjectDetails"));
const CloudProvider = lazy(() => import("@/pages/CloudProvider/CloudProvider"));
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
                    element: withSuspense(<Home />),
                },
                {
                    path: "projects/:slug",
                    element: withSuspense(<ProjectDetails />),
                },
                {
                    path: "infrastructure/:provider",
                    element: withSuspense(<CloudProvider />),
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
