const { errorObject } = require('../../../middlewares/utils')

/**
 * Checks if blockExpires from user is greater than now
 * @param {Object} user - user object
 */
const userIsBlocked = (user = {}) => {
    return new Promise((resolve, reject) => {
        if (user.blockExpires > new Date()) {
            return reject(errorObject(409, 'User is bloked'))
        }
        resolve(true)
    })
}

module.exports = { userIsBlocked }