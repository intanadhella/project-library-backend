const Library = require('../models/Library')

module.exports = ({
    create: (req, res) => {
        Library.create({
            title: req.body.title,
            year: req.body.year,
            number: req.body.number,
            status: req.body.status
        })
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    getbyId: (req, res) => {
        Library.findById(req.params.bookId)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    getAll: (req, res) => {
        Library.find({})
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    editbyId: (req, res) => {
        Library.findByIdAndUpdate(req.params.bookId, {
            title: req.body.title,
            year: req.body.year,
            number: req.body.number,
            status: req.body.status
        })
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    deletebyId: (req, res) => {
        Library.findByIdAndRemove(req.params.bookId)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }
})