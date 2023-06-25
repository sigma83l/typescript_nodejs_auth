"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose from 'mongoose'
const mongoose_1 = require("mongoose");
const TokenSchema = new mongoose_1.Schema({
    refreshToken: {
        type: String,
        required: true
    },
    ip: { type: String, required: true },
    userAgent: { type: String, required: true },
    isValid: { type: Boolean, default: true },
    user: {
        type: mongoose_1.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Token', TokenSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL1Rva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQWtDO0FBQ2xDLHVDQUF1RDtBQVd2RCxNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDM0IsWUFBWSxFQUFFO1FBQ1YsSUFBSSxFQUFDLE1BQU07UUFDZixRQUFRLEVBQUMsSUFBSTtLQUFDO0lBQ2QsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3BDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDekMsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLGdCQUFLLENBQUMsUUFBUTtRQUNwQixHQUFHLEVBQUUsTUFBTTtRQUNYLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRixFQUNELEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUNyQixDQUFDO0FBRUYsa0JBQWUsSUFBQSxnQkFBSyxFQUFTLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQSJ9