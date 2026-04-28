import express from "express";
import type {Express, Request, Response} from "express";
import { productRouter } from "./routes/productsRoute";

const app : Express = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("hello");
})

app.use(express.json());

// importing the routes
app.use("/product", productRouter);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})