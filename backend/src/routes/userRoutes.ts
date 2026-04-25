import { Request, Response, Router } from "express";

export const userRouter = Router();

userRouter.get('/', (req:Request, res:Response) => {
    res.status(200).send('hellooo');
});