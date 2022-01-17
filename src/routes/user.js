const { Router, request } = require("express");
const router = Router();
const User = require("../models/user");
const modelResponse = require("../utils/modelresponse");

const getAllUser = async function GetAllUser(req, res) {
    try {
        const users = await User.find();
        // console.log(users);
        if (!users.length) {
            modelResponse.message = 'No existen usuarios registrados'
        }
        modelResponse.data = users;
        res.status(201).json(modelResponse);
    } catch (err) {
        console.log(err);
    }
};
const getOneUser = async function GetOneUser(req, res) {
    try {
        let id = req.query._id;
        const user = await User.findById(id);
        console.log(user);
        if (!user) {
            modelResponse.message = 'No existe el usuario'
        }
        modelResponse.data = user || {};
        res.status(201).json(modelResponse);
    } catch (err) {
        console.log(err);
    }
};

const UserRoute = {
    GetAllUser: getAllUser,
    GetOneUser: getOneUser
}

module.exports = UserRoute;