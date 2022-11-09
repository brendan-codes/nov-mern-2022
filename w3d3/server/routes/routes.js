const controller = require('../controllers/controller');
module.exports = (app) => {
    app.get('/api', controller.index);
}