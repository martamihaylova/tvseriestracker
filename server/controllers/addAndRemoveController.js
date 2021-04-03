const { Router } = require('express');
const router = Router();

const check = require('../middleware/checkAuth');
const addShow = require('../services/addShow');
const removeShow = require('../services/removeShow');

router.post('/', check.ifNotLoged, (req, res) => {  
    addShow(req.body);
    return res.status(200).json({ok: true});
})
router.patch('/:id',  (req, res) => {
    
    removeShow(req.params.id, req.body.show)
        .then((result) => res.json(result))
        .catch((err) => console.log(err.message));
})

module.exports = router;