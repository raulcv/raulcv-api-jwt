const { validateCreateRole } = require('./validateCreateRole')
const { validateUpdateRole } = require('./validateUpdateRole')
const { validateGetRole } = require('./validateGetRole')
const { validateDeleteRole } = require('./validateDeleteRole')


module.exports = { 
    validateCreateRole,
    validateUpdateRole,
    validateGetRole,
    validateDeleteRole
}