const { Router } = require('express');
const router = Router();
const Users = require('../models/Users');
const check = require('../middleware/checkAuth');
const addShow = require('../services/addShow');

router.post('/', check.ifNotLoged, (req, res) => {
    console.log(req.body);
    addShow(req.body);
    return res.status(200).json({ok: true});
})

module.exports = router;