const assert = require('assert');
const Person = require('../src/Person.js');

describe('Person', function() {
    let myPerson = null;

    const FIRST_NAME = 'JOHN';
    const LAST_NAME = 'DOE';
    const DATE_OF_BIRTH = new Date('1990-06-06');
    const ADDRESS = {
        city: 'Toronto',
        postalCode: 'A3B5E8'
    }

    // runs once before the first test in this block
    before(function() {
        this.myPerson = new Person(FIRST_NAME, LAST_NAME, DATE_OF_BIRTH);

        this.myPerson.setAddress(ADDRESS);
    });

    it('should return the correct name when getName is called', function() {
        const expectedName = `${FIRST_NAME} ${LAST_NAME}`;

        assert.equal(this.myPerson.getName(), expectedName);
    });

    it('should return the correct year when getBirthYear is called', function() {
        const expectedYear = 1999;

        assert.equal(this.myPerson.getBirthYear(), expectedYear);
    });

    it('should return the correct city when getCity is called', function() {
        const expectedCity = 'Toronto';

        assert.equal(this.myPerson.getCity(), expectedCity);
    });

    // runs once after the last test in this block
    before(function() {
        myPerson = null;
    });
});
