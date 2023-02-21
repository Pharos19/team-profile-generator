const Engineer = require('../lib/Engineer')

describe('creates an engineer object', () => {
    it('gets github username from engineer', () => {
        const engineer = new Engineer('Alan', 201, 'pharos199.dev@gmail.com', 'pharos199')
        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))

    });
    it('gets the position of this team member', () => {
        const engineer = new Engineer('Alan', 201, 'pharos199.dev@gmail.com', 'pharos199')
        expect(engineer.getPosition()).toEqual("Engineer")
    })
})