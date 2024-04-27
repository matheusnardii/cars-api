import { Request, Response } from "express";
import { CarsServices } from "../services/cars.service";

export class CarsControllers {
  getCars(req: Request, res: Response) {
    const { search, year } = req.query;

    const carsService = new CarsServices();

    const response = carsService.getCars(search as string, year as string);

    return res.status(200).json(response);
  }

  getOneCar(req: Request, res: Response) {
    const { car } = res.locals;
    const carService = new CarsServices();

    const response = carService.getOneCar(car);
    return res.status(200).json(response);
  }

  createCar(req: Request, res: Response) {
    const carService = new CarsServices();
    const response = carService.createCar(req.body);

    return res.status(200).json(response);
  }

  updateCar( req: Request , res: Response){
    const carService = new CarsServices();
    const {id} = req.params;
    const response = carService.updateCar(req.body, id);
  
    return res.status(200).json(response);
  }

  deleteCar(req: Request, res: Response){
    const carService = new CarsServices();
    const {carId} = req.params;

    carService.deleteCar(carId);
    return res.status(204).json();
  }
}
