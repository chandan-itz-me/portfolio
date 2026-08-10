import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Scroll to top immediately for new route
        window.scrollTo(0, 0);
        
        // Flush any pending animations by forcing a reflow
        document.documentElement.offsetHeight;
    }, [pathname]);

    return null;
}