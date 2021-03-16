module.exports = (req, res) => {
    if (req.session.id == undefined) {
        res.redirect('/')
    }
}