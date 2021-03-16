const artigo = require('../../Model/artigoModel')
const categoria = require('../../Model/categoriaModel')


exports.index = async(req, res) =>{
    var article = await artigo.findAll()
    res.render('admin/artigo',{title: 'Artigo', article : article})
}

exports.insert = async(req, res) => {
    var cartg = await categoria.findAll()
    res.render('admin/cadastroArtigo', { title: ' Cadastro da artigo', cartg: cartg})
    if (req.body.cadastro != undefined) {
        if (req.body.artigo == '' || req.body.idCategoria == '' || req.body.texto == '') {
            console.log('campo vazio')
        }else{
            artigo.create(req.body.artigo, req.body.texto,req.body.idCategoria)
        }
    }
}
exports.update = async (req, res) =>{
    var id = req.params.id
    var article = await artigo.findOne(id)
    var cartg = await categoria.findAll()
    if (article != null) {
        res.render('admin/updateArtigo',{title: 'Atualizar Categoria', article: article, cartg: cartg})
        if (req.body.cadastro != undefined) {
            if (req.body.artigo == '' || req.body.idCategoria == '' || req.body.texto == '') {
                console.log('campo vazio')
            }else{
                artigo.update(req.body.artigo, req.body.texto,req.body.idCategoria, article.id)
            }
        }
    }else{
        res.redirect('/admin/artigo/')
    }
    
}

exports.delete = (req, res) =>{
    var id = req.params.id
    if (!isNaN(id)) {
        artigo.destroy(id)
        if (true) {
            res.redirect('/admin/artigo/')
        }
    }else{
        res.redirect('/admin/artigo/')
    }
    
}