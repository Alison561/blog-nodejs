const user = require('../Database/user')
const bcrypt = require('bcryptjs')

exports.create  = ( email, senha) => {
    var salt =  bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(senha, salt)
    user.create({ 
        email: email,
        senha: hash
    })
}

exports.findOne = async (email, senha) => {
    var salt =  bcrypt.genSaltSync(10)
    var hash = bcrypt.compareSync(senha, salt)
    var select = await user.findOne({
        raw: true,
            where:{
            email: email,
            senha: hash
        }
    }
    )
    return select
}