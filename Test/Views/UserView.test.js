const UserService = require('../../App/services/UserService')
const UserView = require('./../../App/Views/UserView')

describe('Tests for UserView', () => {
    test('1) Return an error object when try to create a new user with a null payload',
    () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    test('2) Return an error object when try to create a new user with a payload with invalid properties'
    , () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Ingrese valores válidos/)
    })

    test('3) Return an error object when try to create a new user with a payload with missing properties',
    () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Ingrese valores válidos/)
    })

    test('4) Create a user by a given valid payload', () => {
        const payload = {username: "LuisCorrea", id: 1, name: "Luis"}
        const result = UserView.createUser(payload)
        expect(result.username).toBe("LuisCorrea")
        expect(result.name).toBe("Luis")
        expect(result.id).toBe(1)
    })
})