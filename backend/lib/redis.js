import Redis from "ioredis";

const redisUrl = process.env.UPSTASH_REDIS_URL;

console.log(
  "Redis URL:",
  redisUrl ? redisUrl.replace(/\/\/.*?:.*?@/, "//***:***@") : "NOT FOUND",
);

export const redis = new Redis(redisUrl);
