type BrandIconProps = {
    size?: number;
};

// lucide-react dropped brand/logo glyphs (Github, Linkedin, ...) from
// its icon set, so these two small local marks fill that gap. They
// use currentColor so they inherit hover states the same way the
// lucide icons around them do (see Footer.module.css .socialLink).
export function GithubIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

export function LinkedinIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

export function AwsIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M18.6 40.2c7.8 5.7 19 8.7 28.6 8.7 6.7 0 14.1-1.3 20.9-3.8 1-.5 1.9.6.9 1.5-6.2 4.9-15.2 7.9-25.9 7.9-11.3 0-21.5-4.2-29.2-11.1-.6-.6-.1-1.5.7-1.1z"
                fill="currentColor"
            />
            <path
                d="M57.5 35.7c-1-.8-6.4-.4-8.9-.1-.8.1-.9-.6-.2-1.1 4.4-3.1 11.7-2.2 12.5-1.2.8 1 .2 8.2-4 11.6-.7.5-1.3.2-1-.5 1-2.5 2.6-8 .6-8.7z"
                fill="currentColor"
            />
            <path
                d="M47.7 22.8v-1.9c0-.3.2-.5.5-.5h8.4c.3 0 .5.2.5.5v1.6c0 .3-.2.7-.5 1.1l-4.4 6.2c1.6 0 3.2.2 4.6 1 .3.2.4.5.4.8v2c0 .3-.3.7-.6.5-2.5-1.3-5.9-1.5-8.6 0-.3.2-.6-.2-.6-.5v-1.9c0-.3 0-.8.3-1.2l5.1-7.3h-4.5c-.3 0-.5-.2-.5-.5zm-30.9 11.9h-2.6c-.2 0-.4-.2-.4-.4V21c0-.3.2-.5.5-.5h2.4c.3 0 .4.2.4.4v1.7h.1c.6-1.5 1.8-2.2 3.2-2.2 1.4 0 2.3.7 2.9 2.2.6-1.5 2-2.2 3.3-2.2.9 0 1.9.4 2.5 1.2.7.9.6 2.1.6 3.5v9.1c0 .3-.2.5-.5.5h-2.6c-.3 0-.5-.2-.5-.5V27c0-.6.1-2.2-.1-2.8-.2-.6-.6-.8-1.1-.8-.5 0-1.1.4-1.3 1-.2.6-.2 1.7-.2 2.6v7.2c0 .3-.2.5-.5.5h-2.6c-.3 0-.5-.2-.5-.5V27c0-1.5.2-3.8-1.2-3.8-1.4 0-1.5 2.3-1.5 3.8v7.2c0 .3-.2.5-.5.5zm44.3-14.2h.8v-1.7h.6v1.7h.8v.6h-.8v2.2h-.6v-2.2h-.8v-.6zm3.8 2.8h-.6v-4.5h.6v4.5zm-3.1 11.4c0 .1 0 .2-.1.2h-.8c-.1 0-.2-.1-.2-.2v-8.2c0-.1.1-.2.2-.2h.7c.1 0 .2.1.2.2v1.2h.1c.3-.9.9-1.4 1.7-1.4.8 0 1.4.4 1.7 1.4h.1c.3-.9 1-1.4 1.8-1.4.5 0 1 .2 1.4.7.4.5.4 1.2.4 1.9v5.9c0 .1-.1.2-.2.2h-.8c-.1 0-.2-.1-.2-.2v-4.9c0-.4 0-1.3-.1-1.6-.1-.3-.4-.5-.8-.5-.4 0-.7.3-.8.6-.1.4-.1.9-.1 1.5v4.9c0 .1-.1.2-.2.2h-.8c-.1 0-.2-.1-.2-.2v-4.9c0-1 .2-2.3-.8-2.3-1 0-1 1.3-1 2.3v4.9z"
                fill="currentColor"
            />
        </svg>
    );
}

export function AzureIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M33.6 8 14.8 42.8h15L42.6 8H33.6z"
                fill="currentColor"
            />
            <path
                d="M44.6 56 31.2 33.4h-8.1L37.4 56h7.2z"
                fill="currentColor"
                opacity="0.86"
            />
            <path
                d="M50 56H37.2L23.7 33.4h13.1L50 56z"
                fill="currentColor"
                opacity="0.66"
            />
        </svg>
    );
}

export function GcpIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M18 33.2c0-7.5 6.1-13.6 13.6-13.6 3.1 0 5.9 1 8.2 2.8l4.3-4.3c-3.4-3-7.8-4.9-12.6-4.9-10.8 0-19.6 8.8-19.6 19.6S20.7 52.4 31.5 52.4c8.7 0 16.1-5.7 18.6-13.6H43.7c-2 4.3-6.3 7.2-12.2 7.2-7.5 0-13.5-6.1-13.5-13.6z"
                fill="currentColor"
            />
            <path
                d="M52.3 32.8c0-1.2-.1-2.1-.3-3h-20v6.1h11.5c-.3 1.6-1.2 3.9-3.3 5.5l5.1 4c3-2.8 7-7.8 7-12.6z"
                fill="currentColor"
                opacity="0.82"
            />
        </svg>
    );
}

export function TerraformIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M8 10.5 28.2 22v23.5L8 33.9V10.5z" fill="currentColor" opacity="0.86" />
            <path d="M30.8 22 51 10.5v23.4L30.8 45.5V22z" fill="currentColor" />
            <path d="M30.8 48.4 51 37v16.5L30.8 64V48.4z" fill="currentColor" opacity="0.7" />
        </svg>
    );
}

export function KubernetesIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path
                d="m32 6.5 18.5 10.7v21.6L32 49.5 13.5 38.8V17.2L32 6.5Z"
                stroke="currentColor"
                strokeWidth="4.4"
            />
            <circle cx="32" cy="28" r="6.8" fill="currentColor" />
            <path d="M32 13.5v8.8M45 21.1l-7.7 4.4M45 35l-7.7-4.4M19 35l7.7-4.4M19 21.1l7.7 4.4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

export function DockerIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <rect x="12" y="24" width="8" height="8" fill="currentColor" />
            <rect x="22" y="24" width="8" height="8" fill="currentColor" />
            <rect x="32" y="24" width="8" height="8" fill="currentColor" />
            <rect x="22" y="14" width="8" height="8" fill="currentColor" opacity="0.86" />
            <rect x="32" y="14" width="8" height="8" fill="currentColor" opacity="0.86" />
            <path d="M50.5 29.5c-.9-.5-2.3-.8-3.7-.5.1 4.6-2 8.6-7.9 8.6H17.5c.8 5.3 5.8 9.9 11.5 9.9h9.1c10.4 0 14.3-8 14.8-13.3 1.9-.4 3.5-1.6 4.7-3.3-2-1-4.5-1.4-7.1-1.4z" fill="currentColor" />
        </svg>
    );
}

export function JenkinsIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <circle cx="32" cy="22" r="9" fill="currentColor" />
            <path d="M21 45.5c0-6.9 5.1-12.5 11.4-12.5S43.8 38.6 43.8 45.5v8.1H21v-8.1z" fill="currentColor" opacity="0.9" />
            <path d="M25.8 42.6h13.6l-1.5 11H27.3l-1.5-11z" fill="currentColor" opacity="0.66" />
            <circle cx="28.9" cy="21.6" r="1.1" fill="#0b1220" />
            <circle cx="35.1" cy="21.6" r="1.1" fill="#0b1220" />
            <path d="M29.2 25.8c1.6 1.2 4 1.2 5.6 0" stroke="#0b1220" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

export function GithubActionsIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M11 12h16l26 40H37L11 12z" fill="currentColor" opacity="0.86" />
            <path d="M27 12h26L37 36H11L27 12z" fill="currentColor" />
            <circle cx="38" cy="45" r="7" fill="currentColor" opacity="0.72" />
        </svg>
    );
}

export function PrometheusIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="4" />
            <circle cx="32" cy="32" r="7" fill="currentColor" />
            <path d="M32 8v6M32 50v6M8 32h6M50 32h6M15.1 15.1l4.2 4.2M44.7 44.7l4.2 4.2M48.9 15.1l-4.2 4.2M19.3 44.7l-4.2 4.2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

export function GrafanaIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M30 15c8.5-2.8 18.4 1.8 21.4 10.4 2.9 8.5-2.1 17.6-11.1 20.3-7.3 2.2-15-1.1-18.3-7.5-2.3-4.5-2.2-9.5.1-13.7 1.4-2.6 4.2-4.7 7.9-9.5z" fill="currentColor" />
            <circle cx="37.5" cy="31.5" r="5.4" fill="#0b1220" />
        </svg>
    );
}

export function AnsibleIcon({ size = 18 }: BrandIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <circle cx="32" cy="32" r="23" stroke="currentColor" strokeWidth="4" />
            <path d="m35.4 19.5 10.1 25.1h-6.3l-2-5.5H27.1l-2.1 5.5h-6.4L29 19.5h6.4zm-3.3 7.5-2.8 7.2h5.5L32.1 27z" fill="currentColor" />
        </svg>
    );
}
