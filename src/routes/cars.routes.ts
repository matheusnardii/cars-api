import { Router } from "express";
import { isCardValid } from "../middlewares/isCarIdValid";
import { CarsControllers } from "../controllers/cars.controllers";
import { ValidateRequest } from "../middlewares/isRequestValid.middleware";
import { createCarsSchema, updateCarsSchema } from "../schemas/carsSchemas.schemas";

export const carsRoute = Router();

const carController = new CarsControllers();

carsRoute.get("/", carController.getCars);
carsRoute.get("/:id",isCardValid.execute,carController.getOneCar);
carsRoute.post("/", ValidateRequest.execute({body: createCarsSchema}), carController.createCar);
carsRoute.delete("/:id",isCardValid.execute, carController.deleteCar );
carsRoute.patch("/:id", ValidateRequest.execute({body: updateCarsSchema}), isCardValid.execute, carController.updateCar );
