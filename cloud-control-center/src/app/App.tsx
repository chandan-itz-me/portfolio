import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import AppInitializer from "./AppInitializer";
import { router } from "./router";

export default function App() {
    return (
        <HelmetProvider>
            <AppInitializer>
                <RouterProvider router={router} />
            </AppInitializer>
        </HelmetProvider>
    );
}