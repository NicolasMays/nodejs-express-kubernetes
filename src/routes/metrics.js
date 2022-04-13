const express = require('express');
const router = express.Router();
const si = require('systeminformation');

const errorMessage = "There was an issue processing your request";


router.get('/', (req, res) => {
    console.log('GET: /metrics');
    
    res.send(`{\t[ '/load', '/memory' ]\t}`);
});

router.get('/load', (req, res) => {
    console.log('GET: /metrics/load')
    
    valueObject = {currentLoad: 'avgLoad, currentLoad'}
    si.get(valueObject)
        .then(data => {
            res.send(data.currentLoad);
        }).catch(error => {
            console.error(error);
            res.status(500).send(errorMessage);
        });
});

router.get('/memory', (req, res) => {
    console.log('GET: /metrics/memory')
    
    valueObject = {mem: 'total, free, used, available'}
    si.get(valueObject)
        .then(data => {
            res.send(data.mem);
        }).catch(error => {
            console.error(error);
            res.status(500).send(errorMessage);
        });
});

module.exports = router;