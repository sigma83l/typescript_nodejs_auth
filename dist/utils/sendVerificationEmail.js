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
const sendEmail_1 = __importDefault(require("./sendEmail"));
const sendVerificationEmail = ({ name, email, verificationToken, origin, }) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
    const message = `<p>Please confirm your email by clicking on the following link : 
  <a href="${verifyEmail}">Verify Email</a> </p>`;
    yield (0, sendEmail_1.default)({
        to: email,
        subject: 'Email Confirmation',
        html: `<h4> Hello, ${name}</h4>
    ${message}
    `,
    });
});
exports.default = sendVerificationEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZFZlcmlmaWNhdGlvbkVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3NlbmRWZXJpZmljYXRpb25FbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFvQztBQVNwQyxNQUFNLHFCQUFxQixHQUFHLENBQU8sRUFDbkMsSUFBSSxFQUNKLEtBQUssRUFDTCxpQkFBaUIsRUFDakIsTUFBTSxHQUNpQixFQUFpQixFQUFFO0lBQzFDLE1BQU0sV0FBVyxHQUFHLEdBQUcsTUFBTSw0QkFBNEIsaUJBQWlCLFVBQVUsS0FBSyxFQUFFLENBQUM7SUFFNUYsTUFBTSxPQUFPLEdBQUc7YUFDTCxXQUFXLHlCQUF5QixDQUFDO0lBRWhELE1BQU0sSUFBQSxtQkFBUyxFQUFDO1FBQ2QsRUFBRSxFQUFFLEtBQUs7UUFDVCxPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLElBQUksRUFBRSxlQUFlLElBQUk7TUFDdkIsT0FBTztLQUNSO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUM7QUFFRixrQkFBZSxxQkFBcUIsQ0FBQyJ9