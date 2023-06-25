import express from 'express';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import authRouter from './routes/authRoutes';
import connectDB from './db/connect'
import notFoudMiddleware from './middlewares/not-foud'
import errorHandlerMiddleware from './middlewares/error-handler'
import cookieParser from 'cookie-parser' 
import cors from 'cors'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'

dotenv.config()

const app = express()
 
app.use(helmet())
app.use(cors())
app.use(mongoSanitize())

app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static('./public'));
app.use(fileUpload());

app.use('/api/v1/auth', authRouter)

app.use(notFoudMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port : ${port}`)
        })
    }
    catch(error){
        console.log(error)
    }
}
export {start}