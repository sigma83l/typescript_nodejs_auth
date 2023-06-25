"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_api_1 = __importDefault(require("./custom-api"));
const http_status_codes_1 = require("http-status-codes");
class BadRequest extends custom_api_1.default {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
}
exports.default = BadRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JzL2JhZC1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXNDO0FBQ3RDLHlEQUE2QztBQUU3QyxNQUFxQixVQUFXLFNBQVEsb0JBQVc7SUFHL0MsWUFBWSxPQUFjO1FBQ3RCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUhsQixlQUFVLEdBQVcsK0JBQVcsQ0FBQyxXQUFXLENBQUU7SUFJOUMsQ0FBQztDQUNKO0FBTkQsNkJBTUMifQ==