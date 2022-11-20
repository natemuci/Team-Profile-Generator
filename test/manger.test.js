const Manager = require('../lib/manager')
describe('Manager', () => {
    it('Can get office number', () => {
        const testOff = 2;
        const emp = new Manager(testOff);
        expect(emp.offNum).toEqual(testOff);
    });
});
describe('getRole', () => {
    it('getRole() returns "Manager"', () => {
        const testRoll = 'Manager';
        const emp = new Manager('Coop', 2, 'coop@mail.com', 'officeNum');
        expect(emp.getRole()).toEqual(testRoll);
    });

})