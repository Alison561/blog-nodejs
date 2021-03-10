const Sequelize  = require("Sequelize")

const sequelize = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate();
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
module.exports = sequelize