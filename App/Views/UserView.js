const User = require('../Models/User')
const UserService = require('./../../App/services/UserService')

class UserView {
    static createUser(payload){
        
        if (payload === null){
            return {error: "payload no existe"}
        } else{
            if (payload.username != String || payload.name != String || payload.id != Number){
                return {error: "Ingrese valores válidos"}
            }
        }
        }   
    }

module.exports = UserView