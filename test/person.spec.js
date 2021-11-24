const assert = require('assert');
const Person = require('../src/Person.js');

describe('Person', function() {
    let myPerson = null;

    const FIRST_NAME = 'JOHN';
    const LAST_NAME = 'DOE';
    const DATE_OF_BIRTH = new Date('1990-06-06');

    // runs once before the first test in this block
    before(function() {
        this.myPerson = new Person(FIRST_NAME, LAST_NAME, DATE_OF_BIRTH);
    });

    it('should return the correct name when getName is called', function() {
        const expectedName = `${FIRST_NAME} ${LAST_NAME}`;

        assert.equal(this.myPerson.getName(), expectedName);
    });

    it('should return the correct year when getBirthYear is called', function() {
        const expectedYear = 1990;

        assert.equal(this.myPerson.getBirthYear(), expectedYear);
    });

    // runs once after the last test in this block
    before(function() {
        myPerson = null;
    });
});