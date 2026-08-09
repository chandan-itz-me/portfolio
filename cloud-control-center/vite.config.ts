import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    // GitHub Pages serves this project from /cloud-control-center/, not the
    // domain root, so every asset URL and route needs that prefix baked in.
    base: "/cloud-control-center/",

    plugins: [react()],

    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});