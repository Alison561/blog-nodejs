const categoria = require('../Database/categoria')
// 
const slugify = require('slugify')

exports.findAll = async () => {
    var select = await categoria.findAll({raw : true})
    return select
}

exports.findOne = async (id) => {
    var select = await categoria.findByPk(id)
    return select
}

exports.create  = (nome) => {
    categoria.create({ 
        nome: nome,
        slug: slugify(nome)
    })
}

exports.update = (nome, id) => {
    categoria.update(
        { 
            nome: nome, 
            slug: slugify(nome)
        }, {
        where: {
          id: id
        }
    });
}

exports.destroy = (id) => {
    categoria.destroy({
        where: {
          id: id
        }
    })
}