const UserService = require('./../../App/Services/UserService')

describe("Tests for UserService", () => {

    test('1)Create a new user using the UserService', () => {
        const user = UserService.create(1, "LuisCorrea", "Luis")
        expect(user.username).toBe("LuisCorrea")
        expect(user.name).toBe("Luis")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test('2) Get all user data in a list', () => {
        const user = UserService.create(1, "LuisCorrea", "Luis")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("LuisCorrea")
        expect(userInfoList[2]).toBe("Luis")
        expect(userInfoList[3]).toBe("Sin bio")
    })
})