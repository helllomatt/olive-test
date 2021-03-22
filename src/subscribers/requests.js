const olive = require('olive')

olive.event.get('server.request').listen((req, res) => {
    // console.log(`Incoming request from ${req.connection.remoteAddress}!`)
})

olive.event.get('server.request.routed').listen((req, res, route) => {
    // console.log(`request has been routed to`, route)
    if (route.route.details.name && route.route.details.name == 'nameRequest') {
        req.variables.name = `your name doesn't matter`
    }
})

olive.event.get('server.request.notfound').listen((req, res) => {
    // console.log('request route not found')
    // res.write('notfound')
    // res.end()

    // return olive.event.ACTION.STOP
})

olive.event.get('server.request.cancelled').listen((reason) => {
    console.log(`Request cancelled!`, reason)
})
