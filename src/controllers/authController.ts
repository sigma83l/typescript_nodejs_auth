import User from '../models/User'
import Token from '../models/Token'
import CustomError from '../errors/custom-api'
import BadRequest from '../errors/bad-request'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import {StatusCodes} from 'http-status-codes'
import {Request, Response} from 'express'
import sendVerificationEmail from '../utils/sendVerificationEmail'
import { escape } from 'querystring'

interface RegisterRequestBody {
    email: string;
    name: string;
    password: string;
  }
  
const register = async (req: Request<{}, {}, RegisterRequestBody>, res: Response) => {
    const { email, name, password } = req.body;
    try {
      const emailAlreadyExists = await User.findOne({ email }).catch((error)=> console.log(error));
      if (emailAlreadyExists) {
        throw new BadRequest('Email already exists');
      }
      else{
        console.log('hehhehehehe')
      }
  
      // first registered user is an admin
      const isFirstAccount = (await User.countDocuments({})) === 0;
      const role = isFirstAccount ? 'admin' : 'user';
  
      const verificationToken = crypto.randomBytes(40).toString('hex');
  
      const user = await User.create({
        name,
        email,
        password,
        role,
        verificationToken,
      });
      // console.log(email, name, password)
      const origin = 'http://localhost:3000';
      const newOrigin = 'https://react-node-user-workflow-front-end.netlify.app';
  
      // const tempOrigin = req.get('origin');
      // const protocol = req.protocol;
      // const host = req.get('host');
      // const forwardedHost = req.get('x-forwarded-host');
      // const forwardedProtocol = req.get('x-forwarded-proto');
  
      // await sendVerificationEmail({
      //   name: user.username,
      //   email: user.email,
      //   verificationToken: user.verificationToken,
      //   origin,
      // });
      // send verification token back only while testing in postman!!!
      res.status(StatusCodes.CREATED).json({
        msg: 'Success! Please check your email to verify account',
      });   
    } catch (error) {
      // Handle any error that occurred during registration
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: error,
      });
    }

  };
export {
  register,
}