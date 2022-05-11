const User = require('../../App/Models/User')
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

    test('3) Update Username', () => {
        const user = UserService.create(1, "LuisCorrea", "Luis")
        UserService.updateUserUsername(user,"LuisC")
        expect(user.username).toBe("LuisC")
    })

    test('4) Given a list of users give me the list of usernames', () => {
        const user1 = UserService.create(1, "LuisCorrea", "Luis")
        const user2 = UserService.create(1, "LuisCorrea1", "Luis")
        const user3 = UserService.create(1, "LuisCorrea2", "Luis")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("LuisCorrea")
        expect(usernames).toContain("LuisCorrea1")
        expect(usernames).toContain("LuisCorrea2")
    })
})