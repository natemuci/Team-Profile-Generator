const Engineer = require('../lib/engineer')
describe('Engineer', () => {
    it('Can get GitHub username', () => {
        const testUser = 'gitUser';
        const emp = new Engineer('Coop', 2, 'coop@mail.com', testUser);
        expect(emp.gitHub).toEqual(testUser);
    })
});
describe('getGithub', () => {
    it('Can get GitHub username via getGithub()', () => {
        const testGit = 'gitHub';
        const emp = new Engineer('Coop', 2, 'coop@mail.com', testGit);
        expect(emp.getGithub()).toEqual(testGit);
    });
});
describe('getRole', () => {
    it('getRole()  should return \"Engineer\"',() => {
        const testRoll = 'Engineer';
        const emp = new Engineer('Coop', 2, 'coop@mail.com', 'gitUser');
        expect(emp.getRole()).toEqual(testRoll);
    });
})