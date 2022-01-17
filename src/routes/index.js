const { Router } = require('express');
const router = Router();
const UserRoute = require('./user');
// const User = require('./user');
//Principal Router
router.use(UserRoute)
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Welcome to RAULCV! Security API APP With Nodejs!"
        }
    );
})
// router.get('/api/user/', User.GetAllUser);
// router.get('/api/user/', User.GetOneUser)
module.exports = router;