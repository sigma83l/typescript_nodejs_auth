"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = exports.Unauthorized = exports.Unauthenticated = exports.CustomError = exports.NotFound = void 0;
const not_found_1 = __importDefault(require("./not-found"));
exports.NotFound = not_found_1.default;
const custom_api_1 = __importDefault(require("./custom-api"));
exports.CustomError = custom_api_1.default;
const unauthenticated_1 = __importDefault(require("./unauthenticated"));
exports.Unauthenticated = unauthenticated_1.default;
const unauthorized_1 = __importDefault(require("./unauthorized"));
exports.Unauthorized = unauthorized_1.default;
const bad_request_1 = __importDefault(require("./bad-request"));
exports.BadRequest = bad_request_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDREQUFrQztBQU0xQixtQkFORCxtQkFBUSxDQU1DO0FBTGhCLDhEQUFzQztBQU05QixzQkFORCxvQkFBVyxDQU1DO0FBTG5CLHdFQUErQztBQU12QywwQkFORCx5QkFBZSxDQU1DO0FBTHZCLGtFQUF5QztBQU1qQyx1QkFORCxzQkFBWSxDQU1DO0FBTHBCLGdFQUFzQztBQU05QixxQkFORCxxQkFBVSxDQU1DIn0=