import jwt from "jsonwebtoken";
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
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).user = decoded;
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