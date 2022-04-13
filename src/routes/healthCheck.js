const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res) => {
    res.send(`${os.hostname()} online`);
});

module.exports = router;