"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const custom_api_1 = __importDefault(require("./custom-api"));
class Unauthenticated extends custom_api_1.default {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.FORBIDDEN;
    }
}
exports.default = Unauthenticated;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRoZW50aWNhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy91bmF1dGhlbnRpY2F0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5REFBNkM7QUFDN0MsOERBQXNDO0FBRXRDLE1BQXFCLGVBQWdCLFNBQVEsb0JBQVc7SUFFcEQsWUFBWSxPQUFjO1FBQ3RCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUZsQixlQUFVLEdBQVksK0JBQVcsQ0FBQyxTQUFTLENBQUM7SUFHNUMsQ0FBQztDQUNKO0FBTEQsa0NBS0MifQ==