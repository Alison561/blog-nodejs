const express = require('express')
const router = express.Router()
const auth   = require('../Middleware/autenticacao')
// controllers
const categoria = require('../App/Controllers/admin/categoriaController')
const artigo = require('../App/Controllers/admin/artigoController')
const userController = require('../App/Controllers/userController')

// categoria
router.get('/categoria', auth, categoria.index)

router.get('/categoria/cadastro', auth, categoria.insert)
router.post('/categoria/cadastro', auth, categoria.insert)

router.get('/categoria/del/:id', auth, categoria.delete)


router.get('/categoria/ed/:id', auth, categoria.update)
router.post('/categoria/ed/:id', auth, categoria.update)

// user
router.get('/usercadastro', auth, userController.cadastro)
router.post('/usercadastro', auth, userController.cadastro)

// artigo
router.get('/artigo', auth, artigo.index)

router.post('/artigo/cadastro', auth, artigo.insert)
router.get('/artigo/cadastro', auth, artigo.insert)

router.get('/artigo/del/:id', auth, artigo.delete)

router.get('/artigo/ed/:id', auth, artigo.update)
router.post('/artigo/ed/:id', auth, artigo.update)
module.exports = router