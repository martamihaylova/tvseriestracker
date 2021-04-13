const { Router } = require('express');
const check = require('../middleware/checkAuth');
const router = Router();
const Users = require('../models/Users');

router.get('/:id', (req, res) => {
   
    Users.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => console.log(err.message));
})
module.exports = router;