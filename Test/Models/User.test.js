const User = require('./../../App/Models/User')

describe("Unit test for User class", () =>{
    test('1)Create an User object', () => {
        const user = new User(1,"LuisCorrea", "Luis", "Developer")

        expect(user.id).toBe(1)
        expect(user.username).toBe("LuisCorrea")
        expect(user.name).toBe("Luis")
        expect(user.bio).toBe("Developer")

    })

    test('2) Dates as user attributes', () => {
        const user = new User(1,"LuisCorrea", "Luis", "Developer")
            expect(user.dateCreated).not.toBeUndefined()
            expect(user.lastUpdated).not.toBeUndefined()
    })
})