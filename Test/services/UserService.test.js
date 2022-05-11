const UserService = require('./../../App/Services/UserService')

describe("Tests for UserService", () => {

    test('1)Create a new user using the UserService', () => {
        const user = UserService.create(1, "LuisCorrea", "Luis")
        expect(user.username).toBe("LuisCorrea")
        expect(user.name).toBe("Luis")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})