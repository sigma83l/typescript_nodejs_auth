// import mongoose from 'mongoose'
import {model, Schema, Document, Types} from 'mongoose'
import User from './User'

interface IToken extends Document {
    refreshToken: string;
    ip: string;
    userAgent: string;
    isValid: boolean;
    user: Types.ObjectId;
}

const TokenSchema = new Schema({
    refreshToken: {
        type:String,
    required:true},
    ip: { type: String, required: true },
    userAgent: { type: String, required: true },
    isValid: { type: Boolean, default: true },
    user: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IToken>('Token', TokenSchema)