import { career } from "@/data/career";

export default career.map(
    (job) =>
        `${job.company} • ${job.position}`
);