const { Router } = require('express');
const router = Router();
const User = require('./user');
//Principal Router
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Welcome to RAULCV! Security API APP With Nodejs!"
        }
    );
})
router.get('/api/users/', User.GetAllUser);
router.get('/api/user', User.GetOneUser)
module.exports = router;