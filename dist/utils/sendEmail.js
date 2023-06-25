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
const nodemailer_1 = require("nodemailer");
const nodemailerConfig_1 = __importDefault(require("./nodemailerConfig"));
const sendEmail = ({ to, subject, html }) => __awaiter(void 0, void 0, void 0, function* () {
    let testAccount = yield (0, nodemailer_1.createTestAccount)();
    const transporter = (0, nodemailer_1.createTransport)(nodemailerConfig_1.default);
    return transporter.sendMail({
        from: 'hmsdevelopment83@gmail.com',
        to,
        subject,
        html,
    });
});
exports.default = sendEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZEVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3NlbmRFbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE4RTtBQUM5RSwwRUFBaUQ7QUFRakQsTUFBTSxTQUFTLEdBQUcsQ0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFhLEVBQTRCLEVBQUU7SUFDbkYsSUFBSSxXQUFXLEdBQUcsTUFBTSxJQUFBLDhCQUFpQixHQUFFLENBQUE7SUFFM0MsTUFBTSxXQUFXLEdBQUcsSUFBQSw0QkFBZSxFQUFDLDBCQUFnQixDQUFDLENBQUE7SUFFckQsT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3hCLElBQUksRUFBRSw0QkFBNEI7UUFDbEMsRUFBRTtRQUNGLE9BQU87UUFDUCxJQUFJO0tBQ1AsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUE7QUFFRCxrQkFBZSxTQUFTLENBQUEifQ==