import { lazy, Suspense, type ComponentType, type ReactNode } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import RouteFallback from "@/components/layout/RouteFallback/RouteFallback";
import Home from "@/pages/Home/Home";
import AwsInfrastructureBlueprint from "@/pages/CloudProvider/AwsInfrastructureBlueprint";
import AzureInfrastructureBlueprint from "@/pages/CloudProvider/AzureInfrastructureBlueprint";
import GcpInfrastructureBlueprint from "@/pages/CloudProvider/GcpInfrastructureBlueprint";

const lazyWithRetry = <T extends ComponentType<any>>(
    importer: () => Promise<{ default: T }>,
    key: string,
) =>
    lazy(async () => {
        try {
            const module = await importer();

            if (typeof window !== "undefined") {
                sessionStorage.removeItem(`lazy-retry-${key}`);
            }

            return module;
        } catch (error) {
            if (typeof window !== "undefined") {
                const storageKey = `lazy-retry-${key}`;
                const hasRetried = sessionStorage.getItem(storageKey) === "1";

                if (!hasRetried) {
                    sessionStorage.setItem(storageKey, "1");
                    window.location.reload();

                    // Keep suspense active while the forced reload happens.
                    return new Promise<never>(() => undefined);
                }
            }

            throw error;
        }
    });

// Route-level code splitting: only the active page's chunk (and its
// chart/animation dependencies) downloads on first paint, instead of
// every page's code shipping in one bundle up front.
const ProjectDetails = lazyWithRetry(
    () => import("@/pages/ProjectDetails/ProjectDetails"),
    "project-details",
);
const NotFound = lazyWithRetry(() => import("@/pages/NotFound/NotFound"), "not-found");

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
                    path: "infrastructure",
                    element: <Navigate to="/#infrastructure" replace />,
                },
                {
                    path: "infrastructure/aws",
                    element: <AwsInfrastructureBlueprint />,
                },
                {
                    path: "infrastructure/azure",
                    element: <AzureInfrastructureBlueprint />,
                },
                {
                    path: "infrastructure/gcp",
                    element: <GcpInfrastructureBlueprint />,
                },
                {
                    path: "infrastructure/:provider",
                    element: <Navigate to="/#infrastructure" replace />,
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
