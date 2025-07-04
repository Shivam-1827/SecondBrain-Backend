const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res
        .staus(error.code || 500)
        .json(
            {
                success: false,
                message: error.message 
            }
        )
    }
}

module.exports = {asyncHandler}