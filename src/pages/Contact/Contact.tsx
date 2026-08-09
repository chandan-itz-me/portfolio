import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";

import Page from "@/components/layout/Page";

export default function Contact() {
    return (
        <Page>
            <ContactHero />

            <ContactMethods />
        </Page>
    );
}