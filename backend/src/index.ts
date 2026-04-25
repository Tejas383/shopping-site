import express from "express";
import type {Express, Request, Response} from "express";
import { userRouter } from "./routes/userRoutes";
import { productRouter } from "./routes/productsRoute";

const app : Express = express();
const PORT: number = Number(process.env.PORT) || 3000;

// app.get('/', (req: Request, res: Response) => {
//     res.status(200).send("hello");
// })

app.use(express.json());
app.use("/users", userRouter);
app.use("/product", productRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
})