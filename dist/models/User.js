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
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
            validator: (email) => validator_1.default.isEmail(email),
            message: 'Please provide a valid email',
        },
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
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
});
UserSchema.pre('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password'))
            return;
        const salt = yield bcryptjs_1.default.genSalt;
    });
});
UserSchema.methods.comparePassword = function (conditatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return true;
    });
};
const User = (0, mongoose_1.model)('User', UserSchema);
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFnRDtBQUNoRCwwREFBaUM7QUFDakMsd0RBQTZCO0FBZTdCLE1BQU0sVUFBVSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUMxQixJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBQyxJQUFJO1FBQ2IsSUFBSSxFQUFDLElBQUk7UUFDVCxTQUFTLEVBQUMsRUFBRTtLQUNmO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsSUFBSTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxzQkFBc0IsQ0FBQztRQUN4QyxRQUFRLEVBQUU7WUFDUixTQUFTLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLG1CQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN0RCxPQUFPLEVBQUUsOEJBQThCO1NBQ3hDO0tBQ0Y7SUFDSCxRQUFRLEVBQUM7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSx5QkFBeUIsQ0FBQztRQUMzQyxTQUFTLEVBQUMsQ0FBQztLQUNkO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQ3ZCLE9BQU8sRUFBRSxNQUFNO0tBQ2xCO0lBQ0QsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFLElBQUk7SUFDZCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsMkJBQTJCLEVBQUU7UUFDM0IsSUFBSSxFQUFFLElBQUk7S0FDWDtDQUNKLENBQUMsQ0FBQTtBQUVGLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFOztRQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFBRSxPQUFPO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sa0JBQU0sQ0FBQyxPQUFPLENBQUE7SUFDckMsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVGLFVBQVUsQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLFVBQWdCLGlCQUF3Qjs7UUFFekUsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0NBQUEsQ0FBQTtBQUVELE1BQU0sSUFBSSxHQUFHLElBQUEsZ0JBQUssRUFBUSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUE7QUFFN0Msa0JBQWUsSUFBSSxDQUFBIn0=