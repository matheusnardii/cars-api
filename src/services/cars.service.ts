import { carsDatabase, generateId } from "../database/cars";
import { ICar, TCreateBody, TUpdateBody } from "../interface/cars.interface";

export class CarsServices {

    getCars(search?: string, year?: string) {
        const carlist = carsDatabase.filter((car) => {
            const searchCar = search 
            ? car.model.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            : true;
            const yearCar = year ? car.year === Number(year) : true;

            return searchCar && yearCar;
        });

        return carlist;
    };

    getOneCar(car: ICar) {
        
        return car;
    };

    createCar(body: TCreateBody): ICar {
        const date = new Date();

        const newCar: ICar = {
            id: generateId(),
            model: body.model,
            year: body.year,
            km: body.km,
            brand: body.brand,
            price: body.price,
            createdAt: date,
            updatedAt: date,
        }
        carsDatabase.push(newCar);
        return newCar;
    };

    deleteCar(id: string) {
        const index = carsDatabase.findIndex(car => car.id === Number(id));

        carsDatabase.splice(index, 1);
    };

    updateCar(body: TUpdateBody, id: string): ICar{
        const current = carsDatabase.find(car => car.id === Number(id)) as ICar;

        const date = new Date();

        const newCar: ICar = {...current, ...body, updatedAt: date};

        const index = carsDatabase.findIndex(car => car.id === Number(id));

        carsDatabase.splice(index, 1, newCar)

        return newCar;
    }
}