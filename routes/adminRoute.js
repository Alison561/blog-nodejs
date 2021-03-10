const express = require('express')
const router = express.Router()

// controllers
const categoria = require('../App/Controllers/admin/categoriaCrontroller')


router.get('/categoria', categoria.index)

router.get('/categoria/cadastro', categoria.insert)
router.post('/categoria/cadastro', categoria.insert)

router.get('/categoria/del/:id', categoria.delete)


router.get('/categoria/ed/:id', categoria.update)
router.post('/categoria/ed/:id', categoria.update)

module.exports = router