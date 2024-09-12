import { Request, Response } from "express";

export const signUp = async (req: Request, res: Response) => {
    try {
        // Your signup logic will go here
    
        // Test response to ensure the API is working
        res.json({ message: "Hello API" });
    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ error: "Error during sign-up" });
    }
};

export const signIn = async (req: Request, res: Response) => {

};