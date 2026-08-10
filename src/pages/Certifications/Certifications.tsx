/**
 * NOTE: Certifications have been integrated into the Professional page.
 * This file is kept for backwards compatibility but is not registered in the router.
 * Certifications can be viewed on the /professional route.
 */

import Page from "@/components/layout/Page";

export default function Certifications() {
    return (
        <Page>
            <h1>Certifications</h1>
            <p>This page has been merged into the Professional page. Navigate to /professional to view certifications.</p>
        </Page>
    );
}