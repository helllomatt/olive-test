const olive = require('olive')
// const validators = require('../validators')
// const UserService = require('../services/user')

// olive.server.get('/', validators.user.login, async (req, res) => {
//     const user = await UserService.Signup(req.variables.user.username, req.variables.user.password)
//     res.json({ user })
// })

olive.server.get('/', (req, res) => {
    res.json({ hello: 'world', session: req.session })
})

// olive.server.get('/hello', (req, res) => {
//     res.json({ hello: 'world' })
// })

// olive.server.post('/name/:name', async (req, res) => {
//     await req.body()
//     console.log(req.variables)
// })