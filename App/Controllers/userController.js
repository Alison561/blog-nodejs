const user = require('../Model/userModel')
exports.login = async (req, res) => {
        res.render('login', {title: 'Login'})
        req.session.userid = 11
        console.log(req.session.userid )
}
exports.cadastro = (req, res) => {
    res.render('admin/cadastroUser', {title: 'Cadastro de Usuário'})
    if (req.body.cadastrar != undefined) {
        user.create(req.body.email, req.body.senha)
    }
} 