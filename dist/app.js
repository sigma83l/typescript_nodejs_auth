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
exports.start = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const connect_1 = __importDefault(require("./db/connect"));
const not_foud_1 = __importDefault(require("./middlewares/not-foud"));
const error_handler_1 = __importDefault(require("./middlewares/error-handler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)(process.env.JWT_SECRET));
app.use(express_1.default.static('./public'));
app.use((0, express_fileupload_1.default)());
app.use('/api/v1/auth', authRoutes_1.default);
app.use(not_foud_1.default);
app.use(error_handler_1.default);
const port = process.env.PORT || 3000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port : ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.start = start;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsb0RBQTRCO0FBQzVCLDRFQUE0QztBQUM1QyxxRUFBNkM7QUFDN0MsMkRBQW9DO0FBQ3BDLHNFQUFzRDtBQUN0RCxnRkFBZ0U7QUFDaEUsa0VBQXdDO0FBQ3hDLGdEQUF1QjtBQUN2QixvREFBMkI7QUFDM0Isb0ZBQWtEO0FBRWxELGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFZixNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQTtBQUVyQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sR0FBRSxDQUFDLENBQUE7QUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUE7QUFDZixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0NBQWEsR0FBRSxDQUFDLENBQUE7QUFFeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLHVCQUFZLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBRTlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsNEJBQVUsR0FBRSxDQUFDLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsb0JBQVUsQ0FBQyxDQUFBO0FBRW5DLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQWlCLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLHVCQUFzQixDQUFDLENBQUM7QUFFaEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ3RDLE1BQU0sS0FBSyxHQUFHLEdBQVMsRUFBRTtJQUNyQixJQUFJO1FBQ0EsTUFBTSxJQUFBLGlCQUFTLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUN4RCxDQUFDLENBQUMsQ0FBQTtLQUNMO0lBQ0QsT0FBTSxLQUFLLEVBQUM7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3JCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFDTyxzQkFBSyJ9