const { constants } = require("../constants");

const errorHandler = (error, req, res, next) => {

    const resStatus = res.statusCode ? res.statusCode : 500;
    switch (resStatus){
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation Error", message: error.message, stack: error.stack})
            break;

        case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized ", message: error.message, stack: error.stack})
            break;
        
        case constants.FORBIDDEN:
            res.json({title: "Forbidden", message: error.message, stack: error.stack})
            break;

        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: error.message, stack: error.stack})
            break;
        
        case constants.SERVER_ERROR:
            res.json({title: "Internal Server Error", message: error.message, stack: error.stack})
            break;
    }

}

module.exports = errorHandler