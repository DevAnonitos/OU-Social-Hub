import { createClient } from "redis";

const redisClient = createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
    },
    password: process.env.REDIS_PASSWORD || undefined,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));
( 
    async () => {
        await redisClient.connect();
        console.log('Redis Client Connected');
    }
);

export default redisClient;
