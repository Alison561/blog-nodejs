const categoria = require('../../Model/categoriaModel')

exports.index = async(req, res)=>{
    var categ = await categoria.findAll()
    res.render('admin/categoria',{title: 'Categoria', categ : categ})
}

exports.insert = (req, res) => {
    res.render('admin/cadastroCategoria', { title: ' Cadastro da categoria'})
    if (req.body.cadastro != undefined) {
        if (req.body.categoria == '') {
            console.log('campo vazio')
        }else{
            categoria.create(req.body.categoria)
        }
    }
}

exports.delete = (req, res) =>{
    var id = req.params.id
    if (!isNaN(id)) {
        categoria.destroy(id)
        if (true) {
            res.redirect('/admin/categoria/')
        }
    }else{
        res.redirect('/admin/categoria/')
    }
    
}

exports.update = async (req, res) =>{
    var id = req.params.id
    var categ = await categoria.findOne(id)
    if (categ != null) {
        res.render('admin/updateCategoria',{title: 'Atualizar Categoria', categ : categ})
        if (req.body.cadastro != undefined) {
            if (req.body.categoria == '') {
                console.log('campo vazio')
            }else{
                categoria.update(req.body.categoria, id)
            }
        }
    }else{
        res.redirect('/admin/categoria/')
    }
    
}