import jwt from "jsonwebtoken";
import { verifyRefreshToken, verifyAccessToken } from "../libs/utils/token.util";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = async (
    req: Request, res: Response, next: NextFunction
) => {
    try {
    const authHeader = req.headers.authorization;

    console.log(authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token missing or invalid' });
    }

    const token = authHeader.split(' ')[1];
    
    console.log(token);

    const decodedUser = verifyAccessToken(token); 

    console.log(decodedUser);

    if (!decodedUser) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    (req as any).user = decodedUser;
    next(); 
  } catch (error) {
    return res.status(403).json({ message: 'Authorization failed' });
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