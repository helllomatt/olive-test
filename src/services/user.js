const olive = require('olive')
const UserModel = require('../models/user')

async function Signup(username, password) {
    const user = new UserModel(username, password)
    olive.event.get('user.signup').fire(user)
    return user
}

module.exports.Signup = Signup