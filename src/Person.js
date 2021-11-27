class Person {

    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getBirthYear() {
        return this.dateOfBirth.getFullYear();
    }

    getCity() {
        return this.address.city;
    }

    setAddress(address) {
        this.address = address;
    }
}

module.exports = Person;