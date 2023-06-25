import CustomError from './custom-api'
import {StatusCodes} from 'http-status-codes'

export default class BadRequest extends CustomError {
    statusCode: number = StatusCodes.BAD_REQUEST ;

    constructor(message:string){
        super(message) 
    }
}