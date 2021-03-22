module.exports.login = function(req, res, control) {
    // if (req.variables.username != 'mtempinski') {
    //     res.json({ error: 'Invalid username' })
    //     control.end()
    // }

    req.variables.user = {
        username: 'mtempinski',
        password: 'matt'
    }

    control.next()
}