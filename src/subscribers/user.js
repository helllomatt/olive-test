const olive = require('olive')

new olive.event('user.signup')

olive.event.get('user.signup').listen((user) => {
    setTimeout(() => {
        console.log(`Welcome ${user.username}!`)
    }, 3000)
})