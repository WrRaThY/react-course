class Human {

    constructor (gender = 'gender not defined') {
        this.gender = gender;
    }

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {

    constructor (name = 'name not defined', gender) {
        super(gender);
        this.name = name;
    }


    printName = () => {
        console.log(this.name);
    }
}

const person = new Person('Max');
person.printName();
person.printGender();