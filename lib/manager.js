const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    };
    getRole(){
        return 'Manager';
    }
    getOfficenum(){
        return this.officeNum
    }
};

module.exports = Manager;