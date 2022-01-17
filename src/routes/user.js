const express = require('express')
const router = express.Router()
const  User  = require('../controllers')

console.log('****************************************************************')
console.log(User)

router.get('/api/user/all', User.GetAllUser);
router.get('/api/user/one', User.GetOneUser);

module.exports = router





// exports.signup = (req, res) => {
//     const user = new User({ username: req.body.username, email: req.body.email, password: bcrypt.hashSync(req.body.password, 8) });

//     user.save((err, user) => {
//         if (err) {
//             res.status(500).send({ message: err });
//             return;
//         }

//         if (req.body.roles) {
//             Role.find(
//                 {
//                     name: { $in: req.body.roles }
//                 },
//                 (err, roles) => {
//                     if (err) {
//                         res.status(500).send({ message: err });
//                         return;
//                     }

//                     user.roles = roles.map(role => role._id);
//                     user.save(err => {
//                         if (err) {
//                             res.status(500).send({ message: err });
//                             return;
//                         }

//                         res.send({ message: "User was registered successfully!" });
//                     });
//                 }
//             );
//         } else {
//             Role.findOne({ name: "user" }, (err, role) => {
//                 if (err) {
//                     res.status(500).send({ message: err });
//                     return;
//                 }

//                 user.roles = [role._id];
//                 user.save(err => {
//                     if (err) {
//                         res.status(500).send({ message: err });
//                         return;
//                     }

//                     res.send({ message: "User was registered successfully!" });
//                 });
//             });
//         }
//     });
// };
// const UserRoute = {
//     GetAllUser: getAllUser,
//     GetOneUser: getOneUser
// }

// module.exports = UserRoute;