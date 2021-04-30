export const responseType = (response, message, status = 500, data) => {
    response.status(status).json({
        message,
        data
    });
};
//# sourceMappingURL=response.js.map