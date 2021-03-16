const Sequelize  = require("Sequelize")
const con  = require("./database")

const user = con.define('user', {
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = user 