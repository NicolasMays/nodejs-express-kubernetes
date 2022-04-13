const express = require('express');
const router = express.Router();
const si = require('systeminformation');
const errorMessage = "There was an issue processing your request";

router.get('/', (req, res) => {
    console.log('GET: /cpuInfo')
    
    si.cpu()
        .then(data => res.send(data))
        .catch(error => {
            console.error(error);
            res.status(500).send(errorMessage);
        });
});

router.get('/:info', (req, res) => {
    var info = req.params.info;

    console.log(`GET: /cpuInfo/${info}`);
    
    si.cpu()
        .then(data => {
            if(data[info]) {
                res.send(data[info]);
            }
            else {
                res.status(404).send(errorMessage);
            }
        }).catch(error => {
            console.error(error);   
            res.status(500).send(errorMessage);
        });
});

module.exports = router;