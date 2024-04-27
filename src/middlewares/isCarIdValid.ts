import { NextFunction, Request, Response } from "express";
import { carsDatabase } from "../database/cars";
import { AppError } from "../errors/appError";

export class isCardValid{
    static execute(req:Request, res:Response, next:NextFunction){
        const {id} = req.params;       
                
        const existingCar = carsDatabase.find((car)=>car.id===Number(id));
        if(!existingCar){
            throw new AppError("Car not found",404);
        }

        res.locals.car=existingCar;

        next();

    }
}