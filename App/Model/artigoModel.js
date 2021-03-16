const artigo = require('../Database/artigo')
const categoria = require('../Database/categoria')

// 
const slugify = require('slugify')

exports.findAll = async () => {
    var select = await artigo.findAll({raw : true,
        include:{
            model: categoria
        }})
    return select
}

exports.create  = (nome, texto, idcategotia) => {
    artigo.create({ 
        nome: nome,
        slug: slugify(nome),
        texto: texto,
        categoriumId: idcategotia
    })
}

exports.findOne = async (slug) => {
    var select = await artigo.findOne({
        raw: true,
        where:{
            slug: slug
        },
        include:{
            model: categoria
        }
    })
    return select
}

exports.update = (nome, texto, idcategotia, id) => {
    artigo.update(
        { 
            nome: nome, 
            slug: slugify(nome),
            texto: texto,
            categoriumId: idcategotia
        }, {
        where: {
          id: id
        }
    });
}

exports.destroy = (id) => {
    artigo.destroy({
        where: {
          id: id
        }
    })
}