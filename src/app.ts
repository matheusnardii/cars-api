import express, { json } from "express";
import "express-async-errors";
import { carsRoute } from "./routes/cars.routes";
import { HandleError } from "./errors/handleErrors";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/cars",carsRoute);

app.use(HandleError.execute);