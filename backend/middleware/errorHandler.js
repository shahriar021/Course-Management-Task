const errorHandler = (err, req, res, next) => {

    res.json({message:err.message,stackTrace:err.stack})
};

module.exports = errorHandler;
