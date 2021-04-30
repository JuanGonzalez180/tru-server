"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseType = void 0;
const responseType = (response, message, status = 500, data) => {
    response.status(status).json({
        message,
        data
    });
};
exports.responseType = responseType;
//# sourceMappingURL=response.js.map