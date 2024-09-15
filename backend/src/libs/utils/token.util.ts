import jwt from "jsonwebtoken";

export const generateAccessToken = (payload: object): string => 
  jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
  });

export const generateRefreshToken = (payload: object): string =>
  jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  });

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET!);
  } catch (error) {
    throw new Error("Invalid Access Token");
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET!);
  } catch (error) {
    throw new Error("Invalid Refresh Token");
  }
};