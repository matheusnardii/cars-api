import { NextFunction, Request, Response } from "express";
import { AppError } from "./appError";
import { ZodError } from "zod";

// export class HandleError {
//   static execute(
//     error: Error,
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) {
//     if (error instanceof AppError) {
//       return res.status(error.statusCode).json({ error: error.message });
//     }
//     console.log(error);
//     return res.status(500).json({ error: "Internal server error." });
//   }
// }

export class HandleError {
  static execute(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err instanceof AppError){
      return res.status(err.statusCode).json({ error: err.message});
    }else if(err instanceof ZodError) {
      return res.status(409).json(err);
    }else{
      return res.status(500).json({ error: "Internal server error"});
    };
  };
};

