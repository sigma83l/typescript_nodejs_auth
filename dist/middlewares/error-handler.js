"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statuscode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'something went wrong try agaon latter'
    };
    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(',');
        customError.statusCode = 400;
    }
    if (err.statuscode && err.statuscode === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`;
        customError.statusCode = 400;
    }
    if (err.name === 'CastError') {
        customError.msg = `No item found with id : ${err.value}`;
        customError.statusCode = 404;
    }
    return res.status(customError.statusCode).json({ msg: customError.msg });
};
exports.default = errorHandlerMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9lcnJvci1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQTZDO0FBYTdDLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFpQixFQUFzQyxFQUFFO0lBQy9ILElBQUksV0FBVyxHQUFHO1FBQ2QsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLElBQUksK0JBQVcsQ0FBQyxxQkFBcUI7UUFDL0QsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLElBQUksdUNBQXVDO0tBQzlELENBQUE7SUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssaUJBQWlCLEVBQUM7UUFDL0IsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7YUFDMUMsR0FBRyxDQUFDLENBQUMsSUFBVSxFQUFRLEVBQUUsQ0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQVcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFBO0tBQy9CO0lBQ0QsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO1FBQzVDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsK0JBQStCLE1BQU0sQ0FBQyxJQUFJLENBQ3hELEdBQUcsQ0FBQyxRQUFRLENBQ2IscUNBQXFDLENBQUM7UUFDdkMsV0FBVyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7S0FDbEM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFDO1FBQ3pCLFdBQVcsQ0FBQyxHQUFHLEdBQUcsMkJBQTJCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN4RCxXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztLQUNoQztJQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBQzVFLENBQUMsQ0FBQTtBQUVELGtCQUFlLHNCQUFzQixDQUFBIn0=