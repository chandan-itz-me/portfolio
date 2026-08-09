import type { Profile } from "@/types/profile";

export const profile = {
    name: "Chandan Padal",

    title: "DevOps & Multi-Cloud Engineer",

    tagline: "Cloud Platform & DevOps Engineer",

    location: "Bhubaneswar, Odisha, India",

    github: "https://github.com/chandan-itz-me",

    linkedin: "https://www.linkedin.com/in/chandan-itz-me/",

    email: "chandan.itzme@gmail.com",

    phone: "+91 8093323137",

    resume: "/resume.pdf",
} as const satisfies Profile;