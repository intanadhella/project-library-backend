const express = require('express')
const cors = require('cors')
const router = express.Router()
const library = require('../containers/library')

router.use(cors())

router.post('/', library.create)
router.get('/:bookId', library.getbyId)
router.get('/', library.getAll)
router.put('/:bookId', library.editbyId)
router.delete('/:bookId', library.deletebyId)

module.exports = router