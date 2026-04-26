import { Request, Response, Router } from "express";
import products from "../data/products.json";

export const productRouter = Router();

productRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json(products);
});

// #TODO: /:id