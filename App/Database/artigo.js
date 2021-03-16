const Sequelize  = require("Sequelize")
const con  = require("./database")
const categoria  = require("./categoria")

const artigo = con.define('artigo', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    texto:{
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
})

categoria.hasOne(artigo)
artigo.belongsTo(categoria)

module.exports = artigo 