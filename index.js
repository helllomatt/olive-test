'use strict'

const path = require('path')
const olive = require('olive')

olive.env()
olive.server.loadControllers(path.join(__dirname, 'src/routes'))
olive.event.loadSubscribers(path.join(__dirname, 'src/subscribers'))

// olive.server.use(require('helmet')())
// olive.server.use(require('express-session')({
//     secret: 'ahsdjkfhoeuirtnoiaduhljahslkerhlkjahsdf',
//     cookie: {
//         maxAge: 60000
//     },
//     resave: false,
//     saveUninitialized: true
// }))

olive.http().listen()