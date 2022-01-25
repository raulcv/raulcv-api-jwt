const { errorObject } = require('../../middlewares/utils')
const { sortItems } = require('./sortItems')

/**
 * Builds initial options for query
 * @param {Object} query - query object
 */
const listInitOptions = (req = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const order = req.query.order || -1
            const sort = req.query.sort || 'createdAt'
            const sortBy = sortItems(sort, order)
            const page = parseInt(req.query.page, 10) || 1
            const limit = parseInt(req.query.limit, 10) || 5
            const options = { sort: sortBy, lean: true, page, limit }
            resolve(options)
        } catch (error) {
            console.log('Error catch in List Initial Options')
            console.log(error.message)
            reject(errorObject(422, 'ERROR_WITH_INIT_OPTIONS'))
        }
    })
}

module.exports = { listInitOptions }