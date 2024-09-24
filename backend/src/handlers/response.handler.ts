interface responseData {
    res: any;
    statusCode: number;
    data?: any;
    message?: string;
};

const responseWithData = ({res, statusCode, data, message}: responseData) => {
    if(data) return res.status(statusCode).json(data);
    return res.status(statusCode).json({message});
};

export const ok = (res: any, data: any) => responseWithData({
    res,
    statusCode: 200,
    data,
});

export const created = (res: any, data: any) => responseWithData({
    res,
    statusCode: 201,
    data,
});

export const badRequest = (res: any) => responseWithData({
    res,
    statusCode: 400,
    message: 'Bad Request',
});

export const unauthorized = (res: any) => responseWithData({
    res,
    statusCode: 401,
    message: 'Unauthorized',
});

export const forbidden = (res: any) => responseWithData({
    res,
    statusCode: 403,
    message: 'Forbidden',
});

export const notFound = (res: any) => responseWithData({
    res,
    statusCode: 404,
    message: 'Not Found',
});

export const conflict = (res: any) => responseWithData({
    res,
    statusCode: 409,
    message: 'Conflict',
});

export const internalServerError = (res: any) => responseWithData({
    res,
    statusCode: 500,
    message: 'Internal Server Error',
});

export const notImplemented = (res: any) => responseWithData({
    res,
    statusCode: 501,
    message: 'Not Implemented',
});

export const serviceUnavailable = (res: any) => responseWithData({
    res,
    statusCode: 503,
    message: 'Service Unavailable',
});

export const gatewayTimeout = (res: any) => responseWithData({
    res,
    statusCode: 504,
    message: 'Gateway Timeout',
});

export const httpVersionNotSupported = (res: any) => responseWithData({
    res,
    statusCode: 505,
    message: 'HTTP Version Not Supported',
});

