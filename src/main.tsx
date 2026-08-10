import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/share-tech-mono/400.css";
import "@fontsource/oxanium/500.css";
import "@fontsource/orbitron/500.css";

import App from "./app/App";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);