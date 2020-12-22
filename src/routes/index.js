const {Router} = require('express');
const router = Router()

//Routes
router.get('/test', (req, res) => {
    const data ={ 
        "name": "fazt",
        "websdite" : "Faztweb.com"
    };
    res.json(data);
});

module.exports = router;