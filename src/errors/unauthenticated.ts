import {StatusCodes} from 'http-status-codes'
import CustomError from './custom-api'

export default class Unauthenticated extends CustomError{
    statusCode : number = StatusCodes.FORBIDDEN;
    constructor(message:string){
        super(message)
    }
}