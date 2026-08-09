import { career } from "@/data/career";

export default career.flatMap((job) => [
    `${job.company}`,
    `Role      : ${job.role}`,
    `Duration  : ${job.duration}`,
    "",
]);