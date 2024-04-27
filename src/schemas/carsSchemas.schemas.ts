// export interface ICar {
//     id: number;
//     model: string;
//     km: number;
//     year: number;
//     brand: string;
//     price?: number;
//     createdAt: Date;
//     updatedAt: Date;
// };

import { z } from "zod";

export const carsBodySchema = z.object({
    id: z.number().positive(),
    model: z.string().min(2),
    km: z.number().positive(),
    year: z.number().positive(),
    brand: z.string().min(2),
    price: z.number().positive(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const createCarsSchema = carsBodySchema.omit({ id: true, createdAt: true, updatedAt: true });

export const updateCarsSchema = carsBodySchema.partial();