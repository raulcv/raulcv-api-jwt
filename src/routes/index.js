const { Router } = require('express');
const router = Router();

//Principal Router
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Welcome to RAULCV! Security API APP With Nodejs!"
        }
    );
})

module.exports = router;