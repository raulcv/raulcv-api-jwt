const { Router, request } = require("express");
const router = Router();
const User = require("../models/user");
const modelResponse = require("../helpers/modelresponse");

router.get('/', async function (req, res) {
    try {
        const users = await User.find();
        // console.log(users);
        if(!users.length) {
            modelResponse.message = 'No existen usuarios registrados'
        }
        modelResponse.data = users;
        res.status(201).json(modelResponse);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;