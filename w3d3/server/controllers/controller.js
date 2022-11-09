const Sundae = require("../models/Model");


// findAll
module.exports.findAll = (request, response) => {
    Sundae.find()
        .then(results => response.json(results))
        .catch(err => response.status(400).json(err))
}
// findById
module.exports.findById = (request, response) => {
    Sundae.findOne({_id: request.params.id})
        .then(results => response.json(results))
        .catch(err => response.status(400).json(err))
}
// create
module.exports.createOne = (request, response) => {
    Sundae.create(request.body)
        .then(results => response.json(results))
        .catch(err => response.status(400).json(err))
}
// delete
module.exports.deleteById = (request, response) => {
    Sundae.deleteOne({_id: request.params.id})
        .then(results => response.json(results))
        .catch(err => response.status(400).json(err))
}
// editOneById
module.exports.editById = (request, response) => {
    Sundae.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(results => response.json(results))
        .catch(err => response.status(400).json(err))
}