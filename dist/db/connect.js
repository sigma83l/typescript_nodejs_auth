"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = (url) => {
    if (url)
        return mongoose_1.default.connect(url);
};
exports.default = connectDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYi9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBR2hDLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBb0IsRUFBTSxFQUFFO0lBQzNDLElBQUksR0FBRztRQUFDLE9BQU8sa0JBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsU0FBUyxDQUFBIn0=