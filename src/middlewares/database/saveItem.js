const { itemNotFound } = require('../utils/itemNotFound')

/**
 * Update item for some fields
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
 const saveItem = (model = {}) => {
    return new Promise((resolve, reject) => {
        model.save(async (err, item) => {
            try {
                await itemNotFound(err, item, 'Item Not Found')
                resolve(item)
            } catch (error) {
                reject(error)
            }
        }
        )
    })
}

module.exports = {saveItem}