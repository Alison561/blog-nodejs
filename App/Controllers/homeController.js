exports.home = (req, res)=>{
    res.render('home')
    console.log(req.session.userid)

}
exports.loggout = (req, res)=>{
    req.session.destroy()
}