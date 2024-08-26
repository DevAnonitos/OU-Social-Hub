import morgan, { StreamOptions } from "morgan";
import logger from "../loggers/winston.log";

const stream: StreamOptions = {
    write: (message) => logger.http(message),
};

const skip = () => {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3351209228.
    const env = process.env.NODE_ENV || 'development';
    return env !== 'development';
};

const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream,
        skip,
    },
);

export default morganMiddleware;