const { checkPermissions } = require('./helpers')

const { handleError } = require('../../middlewares/utils')

/**
 * Roles authorization function called by route
 * @param {Array} roles - roles specified on the route
 */
const roleAuthorization = (roles) => async (req, res, next) => {
  try {
    console.log('ROLES ', roles)
    console.log('Request ', req.query)
    const data = { id: req.user._id, roles }
    console.log(data)
    await checkPermissions(data, next)
  } catch (error) {
    console.log('ERROR IN ROLE AUTH CATCHS ')
    handleError(res, error)
  }
}

module.exports = { roleAuthorization }