export const responseType = ( response: any, message: string, status:number = 500, data?: any ) => {
    response.status(status).json({
        message,
        data
    })
}