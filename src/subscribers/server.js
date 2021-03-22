const olive = require('olive')

olive.event.get('server.online').listen((server) => {
    console.log(`Server listening on ${server.details.address}:${server.details.port}`)
})

olive.event.get('server.offline').listen(() => {
    console.log(`Server is offline at ${new Date().toLocaleString()}`)
})

olive.event.get('server.error').listen((msg, err) => {
    if (err) {
        console.error(msg, err)
    } else {
        console.error(msg)
    }
})