const { Router } = require('express');
const router = Router();

const check = require('../middleware/checkAuth');
const addShow = require('../services/addShow');

router.post('/', check.ifNotLoged, (req, res) => {  
    addShow(req.body);
    return res.status(200).json({ok: true});
})

module.exports = router;