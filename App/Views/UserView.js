const UserService = require('./../../App/services/UserService')

class UserView {
    static createUser(payload){
        
        if (payload === null){
            return {error: "payload no existe"}
        } else{
            if (typeof payload.username != 'string' || typeof payload.name != 'string' || typeof payload.id != 'number'){
                return {error: "Ingrese valores válidos"}
            }else{
                return UserService.create(payload.id, payload.username, payload.name)
            }
        }
    }   
}

module.exports = UserView