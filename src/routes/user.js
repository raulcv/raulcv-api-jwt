const { Router, request } = require("express");
const router = Router();
const User = require("../models/user");
const modelResponse = require("../utils/modelresponse");

router.get('/', async function (req, res) {
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
})

exports.signup = (req, res) => {
    const user = new User({ username: req.body.username, email: req.body.email, password: bcrypt.hashSync(req.body.password, 8) });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (req.body.roles) {
            Role.find(
                {
                    name: { $in: req.body.roles }
                },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    user.roles = roles.map(role => role._id);
                    user.save(err => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        res.send({ message: "User was registered successfully!" });
                    });
                }
            );
        } else {
            Role.findOne({ name: "user" }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                user.roles = [role._id];
                user.save(err => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    res.send({ message: "User was registered successfully!" });
                });
            });
        }
    });
};


module.exports = router;