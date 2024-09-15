import jwt from "jsonwebtoken";
import { verifyRefreshToken, verifyAccessToken } from "../libs/utils/token.util";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = async (
    req: Request, res: Response, next: NextFunction
) => {
    const token = req.headers['authorization']?.split('')[1];

    if(!token) {
        return res.status(401).json({
            message: "No token is provided",
        });
    }

    try {
        const user = verifyAccessToken(token);
        (req as any).user = user;
        next();
    } catch (error: any) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }
};

export const adminMiddleware = async (
    req: Request, res: Response, next: NextFunction
) => {
    const user = (req as any).user;
    if(user.role !== "ADMIN") {
        return res.status(403).json({
            message: "Access Denied"
        })
    }
    next();
};