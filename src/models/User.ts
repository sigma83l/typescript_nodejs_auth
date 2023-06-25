import {model, Schema, Document} from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs' 


interface IUser extends Document{
    username: string;
    email: string;
    password: string;
    role: string;
    verificationToken: string;
    isVerified: boolean;
    verified: Date;
    passwordToken: string;
    passwordTokenExpirationDate: Date;
}

const UserSchema = new Schema({
    name: {
        type: String,
        required:true,
        trim:true,
        maxlength:50
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
          validator: (email: string) => validator.isEmail(email),
          message: 'Please provide a valid email',
        },
      },
    password:{
        type: String,
        required: [true, 'Please provide password'],
        minlength:6,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    verificationToken: String,
    isVerified: {
        type: Boolean,
        default: false,
    },
    verified: Date,
    passwordToken: {
      type: String,
    },
    passwordTokenExpirationDate: {
      type: Date,
    },
})

UserSchema.pre('save', async function (): Promise<void>{
    if(!this.isModified('password')) return;
    const salt = await bcrypt.genSalt
})

UserSchema.methods.comparePassword = async function (conditatePassword:string): Promise<boolean>{
    
    return true
}

const User = model<IUser>('User', UserSchema)

export default User