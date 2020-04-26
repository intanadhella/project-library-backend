const Books = require('../models/Books')

module.exports = ({
    create: (req, res) => {
        Books.create({
            title: req.body.title,
            year: req.body.year,
            number: req.body.number,
            status: req.body.status
        })
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    getbyId: (req, res) => {
        Books.findById(req.params.bookId)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    getAll: (req, res) => {
        Books.find({})
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    editbyId: (req, res) => {
        Books.findByIdAndUpdate(req.params.bookId, {
            title: req.body.title,
            year: req.body.year,
            number: req.body.number,
            status: req.body.status
        })
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    deletebyId: (req, res) => {
        Books.findByIdAndRemove(req.params.bookId)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }
})