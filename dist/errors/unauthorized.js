"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const custom_api_1 = __importDefault(require("./custom-api"));
class Unauthorized extends custom_api_1.default {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
    }
}
exports.default = Unauthorized;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRob3JpemVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy91bmF1dGhvcml6ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5REFBNkM7QUFDN0MsOERBQXNDO0FBRXRDLE1BQXFCLFlBQWEsU0FBUSxvQkFBVztJQUVqRCxZQUFZLE9BQWM7UUFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRmxCLGVBQVUsR0FBVSwrQkFBVyxDQUFDLFlBQVksQ0FBQTtJQUc1QyxDQUFDO0NBQ0o7QUFMRCwrQkFLQyJ9