const Intern = require('../lib/Intern')

describe('creates an intern object', () => {
    it('gets the school of the intern', () => {
        const intern = new Intern ('Alan', 987, 'pharos199.internship@gmail.com', 'UCLA')
        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
    });

    it('gets the position of this team member', () => {
        const intern = new Intern ('Alan', 987, 'pharos199.internship@gmail.com', 'UCLA')
        expect(intern.getPosition()).toEqual("Intern")
    })
})