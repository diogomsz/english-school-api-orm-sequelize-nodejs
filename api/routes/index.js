const bodyParser = require('body-parser');
const pessoasRoute = require('./pessoasRoute');

module.exports = app => {
    app.use(bodyParser.json(), pessoasRoute);
};
