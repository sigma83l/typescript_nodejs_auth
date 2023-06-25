import {StatusCodes} from 'http-status-codes'
import CustomError from './custom-api'

export default class NotFound extends CustomError {
    statusCode:number = StatusCodes.NOT_FOUND
    constructor(message:string){
        super(message)
    }
}