const User = require('./../Models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(User){
        return Object.values(User)
    }

    static updateUserUsername(user, newUsername){
        user.username = newUsername
    }
}

module.exports = UserService