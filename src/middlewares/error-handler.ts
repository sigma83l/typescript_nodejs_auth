import {StatusCodes} from 'http-status-codes'
import CustomError from '../errors/custom-api'
import {Request, Response, NextFunction} from 'express'

interface IError extends Error{
    name:string;
    statuscode: number;
    errors:Error[];
    keyValue: {};
    value:number;
}


const errorHandlerMiddleware = (err: IError, req: Request, res: Response, next:NextFunction): Response<any, Record<string, any>> =>{
    let customError = {
        statusCode: err.statuscode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'something went wrong try agaon latter'
    }
    if (err.name === 'ValidationError'){
        customError.msg = Object.values(err.errors)
        .map((item:Error):string=>item.message)
        .join(',');
        customError.statusCode = 400
    }
    if (err.statuscode && err.statuscode === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(
            err.keyValue
          )} field, please choose another value`;
          customError.statusCode = 400;
    }
    if (err.name === 'CastError'){
        customError.msg = `No item found with id : ${err.value}`
        customError.statusCode = 404;
    }

    return res.status(customError.statusCode).json({ msg: customError.msg })
}

export default errorHandlerMiddleware