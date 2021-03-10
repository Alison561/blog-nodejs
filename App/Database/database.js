const Sequelize  = require("Sequelize")

const sequelize = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize