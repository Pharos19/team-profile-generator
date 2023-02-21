const Manager = require('../lib/Manager')

describe('creates a manager object', () => {
    it('gets the office number', () => {
        const manager = new Manager('Alan', 978, 'manager.pharos199@gmail.com', 23)
        expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
    });

    it('gets the position of the employee', () => {
        const manager = new Manager('Alan', 978, 'manager.pharos199@gmail.com', 23)
        expect(manager.getPosition()).toEqual("Manager")
    });
})