const User = require('./../../App/Models/User')

describe("Unit test for User class", () =>{
    test('Create an User object', () => {
        const user = new User(1,"LuisCorrea", "Luis", "Developer", "dateCreated", "lastUpdated")

        expect(user.id).toBe(1)
        expect(user.username).toBe("LuisCorrea")
        expect(user.name).toBe("Luis")
        expect(user.bio).toBe("Developer")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})