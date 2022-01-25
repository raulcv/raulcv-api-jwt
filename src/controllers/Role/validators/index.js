const { validateCreateRole } = require('./validateCreateRole')
const { validateUpdateRole } = require('./validateUpdateRole')
const { validateGetRole } = require('./validateGetRole')


module.exports = { 
    validateCreateRole,
    validateUpdateRole,
    validateGetRole
}