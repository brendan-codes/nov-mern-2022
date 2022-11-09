const controller = require('../controllers/controller');
module.exports = (app) => {
    app.get('/api/sundae', controller.findAll);
    app.get('/api/sundae/:id', controller.findById);
    app.post('/api/sundae', controller.createOne);
    app.delete('/api/sundae/:id', controller.deleteById);
    app.put('/api/sundae/:id', controller.editById);
}