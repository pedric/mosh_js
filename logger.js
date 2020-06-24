logger = (req, res, next) => {
    console.log('Testing custom middleware - API called...');
    next();
}

module.exports = logger;