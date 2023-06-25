"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/register', authController_1.register);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aFJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXV0aFJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtFQUF1RDtBQUN2RCxxQ0FBOEI7QUFFOUIsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUE7QUFHdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUseUJBQVEsQ0FBQyxDQUFBO0FBRWxDLGtCQUFlLE1BQU0sQ0FBQSJ9