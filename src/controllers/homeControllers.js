
let homeControllers = (req, res) => {
    return res.render('demo.ejs');
}

module.exports = {
    homeControllers: homeControllers,
}