"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const bad_request_1 = __importDefault(require("../errors/bad-request"));
const crypto_1 = __importDefault(require("crypto"));
const http_status_codes_1 = require("http-status-codes");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    try {
        const emailAlreadyExists = yield User_1.default.findOne({ email }).catch((error) => console.log(error));
        if (emailAlreadyExists) {
            throw new bad_request_1.default('Email already exists');
        }
        else {
            console.log('hehhehehehe');
        }
        // first registered user is an admin
        const isFirstAccount = (yield User_1.default.countDocuments({})) === 0;
        const role = isFirstAccount ? 'admin' : 'user';
        const verificationToken = crypto_1.default.randomBytes(40).toString('hex');
        const user = yield User_1.default.create({
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
        res.status(http_status_codes_1.StatusCodes.CREATED).json({
            msg: 'Success! Please check your email to verify account',
        });
    }
    catch (error) {
        // Handle any error that occurred during registration
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error,
        });
    }
});
exports.register = register;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvYXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQWlDO0FBR2pDLHdFQUE4QztBQUU5QyxvREFBMkI7QUFDM0IseURBQTZDO0FBVzdDLE1BQU0sUUFBUSxHQUFHLENBQU8sR0FBeUMsRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNoRixNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQzNDLElBQUk7UUFDRixNQUFNLGtCQUFrQixHQUFHLE1BQU0sY0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0YsSUFBSSxrQkFBa0IsRUFBRTtZQUN0QixNQUFNLElBQUkscUJBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQzlDO2FBQ0c7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQzNCO1FBRUQsb0NBQW9DO1FBQ3BDLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBTSxjQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFL0MsTUFBTSxpQkFBaUIsR0FBRyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakUsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUk7WUFDSixLQUFLO1lBQ0wsUUFBUTtZQUNSLElBQUk7WUFDSixpQkFBaUI7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gscUNBQXFDO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLHVCQUF1QixDQUFDO1FBQ3ZDLE1BQU0sU0FBUyxHQUFHLHdEQUF3RCxDQUFDO1FBRTNFLHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLHFEQUFxRDtRQUNyRCwwREFBMEQ7UUFFMUQsZ0NBQWdDO1FBQ2hDLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsK0NBQStDO1FBQy9DLFlBQVk7UUFDWixNQUFNO1FBQ04sZ0VBQWdFO1FBQ2hFLEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkMsR0FBRyxFQUFFLG9EQUFvRDtTQUMxRCxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QscURBQXFEO1FBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqRCxLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztLQUNKO0FBRUgsQ0FBQyxDQUFBLENBQUM7QUFFRiw0QkFBUSJ9