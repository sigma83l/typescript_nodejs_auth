import {StatusCodes} from 'http-status-codes'
import CustomError from './custom-api'

export default class Unauthorized extends CustomError {
    statusCode:number = StatusCodes.UNAUTHORIZED
    constructor(message:string){
        super(message)
    }
}