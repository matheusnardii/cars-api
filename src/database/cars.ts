import { ICar } from "../interface/cars.interface";

export const carsDatabase: ICar[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}

export const resetCarsDatabase = () => {
    carsDatabase.length = 0;
}