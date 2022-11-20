const Employee = require('../lib/employee')

describe('Employee', () =>{
    it('Can create an Object', () => {
        const emp = new Employee();
        expect(typeof(emp)).toEqual('object');
    });

    it('Can set name', () => {
        const testName = "Cooper";
        const  emp = new Employee(testName);
        expect(emp.name).toEqual(testName);
    });
    it('Can set id', () => {
        const testId = 2;
        const emp = new Employee('Coop', testId)
        expect(emp.id).toEqual(testId);
    });
    it('Can set Email',() => {
        const testEmail = 'coop@mail.com';
        const emp = new Employee('coop', 2, testEmail);
        expect(emp.email).toEqual(testEmail);
    });
});
describe('getName', () => {
    it('Can get name via getName()', () => {
        const tName = 'Coop';
        const emp = new Employee(tName)
        expect(emp.getName()).toEqual(tName);
    });
});
describe('getId', () => {
    it('Can get id via getId()', () => {
        const tId = 2;
        const emp = new Employee('Coop', tId);
        expect(emp.getId()).toEqual(tId);
    })
});
describe('getEmail', () => {
    it('Can get email via getEmail()', () => {
        const tEmail = 'Coop@mail.com';
        const emp = new Employee('Coop', 2, tEmail);
        expect(emp.getEmail()).toEqual(tEmail);
    });
});
describe('getRole', () => {
    it('Can get role via getRole()', () => {
        const tRole = 'Employee';
        const emp = new Employee('Coop', 2, 'coop@mail.com');
        expect(emp.getRole()).toEqual(tRole);
    });
});