"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwError(condition, res, message) {
    if (condition) {
        return res.status(406).json({
            error: message
        });
    }
}
exports.throwError = throwError;
function handleError(error, res) {
    return res.status(502).json({
        error: "" + error.name,
        message: "" + error.message
    });
}
exports.handleError = handleError;
