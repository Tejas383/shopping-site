// base route - /product

import { Request, Response, Router } from "express";
import products from "../data/products.json";

export const productRouter = Router();

// #TODO: /:id
productRouter.get('/:id', (req: Request, res: Response) => {
    const id: string = (req.params.id as string);
    const prod = products.find((prod) => prod.id === id.toLowerCase());
    res.json(prod);
})

productRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json(products);
});
