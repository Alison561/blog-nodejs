const Sequelize  = require("Sequelize")
const con  = require("./database")

const categoria = con.define('categoria', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})


module.exports = categoria 