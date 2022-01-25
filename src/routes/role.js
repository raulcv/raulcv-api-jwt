const express = require('express')
const router = express.Router()
require('../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', { session: false })
const trimRequest = require('trim-request')
// const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/user')
const { getRoles, getRole, createRole, updateRole } = require('../controllers/role')
const { validateCreateRole, validateUpdateRole, validateGetRole } = require('../controllers/Role/validators')
// const { validateCreateUser, validateGetUser, validateUpdateUser, validateDeleteUser } = require('../controllers/users/validators')

/*
 * Get items route
 */
router.get('/', trimRequest.all, getRoles)

/*
 * update a role by id
 */
router.get('/:id', trimRequest.all, validateGetRole, getRole)
/*
 * Create new item route
 */
router.post('/', trimRequest.all, validateCreateRole, createRole)

//TESTING CREATE NEW role
// router.post('/', trimRequest.all, validateCreateRole,(req, res) => {
//     let item = req.body;
//     const data = matchedData(req)
//     let da = { item: item, data }
//     res.status(201).json(da)
// })

/*
 * update a role
 */
router.put('/:id', trimRequest.all, validateUpdateRole, updateRole)

/*
 * update a name of role
 */
router.patch('/:id', trimRequest.all, validateUpdateRole, updateRole)

module.exports = router