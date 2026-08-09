import { RouterProvider } from "react-router-dom";

import Providers from "./providers";
import AppInitializer from "./AppInitializer";
import { router } from "./router";

export default function App() {
    return (
        <Providers>
            <AppInitializer>
                <RouterProvider router={router} />
            </AppInitializer>
        </Providers>
    );
}
