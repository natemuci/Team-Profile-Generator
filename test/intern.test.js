const Intern = require('../lib/Intern')
describe('Intern', () => {
    it('Can get school', () => {
        const tSchool = 'Kansas';
        const emp = new Intern('Cooper', 2, 'coop@mail.com', tSchool);
        expect(emp.school).toEqual(tSchool);
    })
});
describe('getSchool', () => {
    it('Can get GitHub school via getSchool()', () => {
        const testSchool = 'Kansas';
        const emp = new Intern('Cooper', 2, 'coop@mail.com', testSchool);
        expect(emp.getSchool()).toEqual(testSchool);
    });
});
describe('getRole', () => {
    it('getRole() returns "Intern"', () => {
        const testRoll = 'Intern';
        const emp = new Intern('Coop', 2, 'coop@mail.com', 'Kansas');
        expect(emp.getRole()).toEqual(testRoll);
        });
});