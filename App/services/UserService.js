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

    static getAllUsernames(User){
        const names = User.map((U_name) => U_name.username)
        return names
    }
}

module.exports = UserService