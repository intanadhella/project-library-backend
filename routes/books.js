const express = require('express')
const cors = require('cors')
const router = express.Router()
const books = require('../containers/books')

router.use(cors())

router.post('/', books.create)
router.get('/:bookId', books.getbyId)
router.get('/', books.getAll)
router.put('/:bookId', books.editbyId)
router.delete('/:bookId', books.deletebyId)

module.exports = router