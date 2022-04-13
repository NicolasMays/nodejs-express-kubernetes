const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

require('dotenv').config();

const app = express()
const port = process.env.PORT || 80

const apiVersion = process.env.VER || 'v1'

let healthCheckRouter = require('./routes/healthCheck');
let cpuRouter = require('./routes/cpuInfo');
let metricsRouter = require('./routes/metrics');

app.use(`/`, healthCheckRouter);
app.use(`/${apiVersion}/cpuInfo`, cpuRouter);
app.use(`/${apiVersion}/metrics`, metricsRouter);

let swaggerConfig = {
    swaggerOptions: {
        url: "/api-docs/swagger.json",
    }
}

app.get('/api-docs/swagger.json', function (req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(swaggerDocument, null, 2));
});

app.use('/api-docs', swaggerUi.serveFiles(null, swaggerConfig), swaggerUi.setup(null, swaggerConfig));

module.exports = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});