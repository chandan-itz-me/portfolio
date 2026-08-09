import Page from "@/components/layout/Page";
import TerminalHero from "@/components/terminal/TerminalHero";
import TerminalWindow from "@/components/terminal/TerminalWindow";

export default function CommandCenter() {
    return (
        <Page>
            <TerminalHero />

            <TerminalWindow />
        </Page>
    );
}