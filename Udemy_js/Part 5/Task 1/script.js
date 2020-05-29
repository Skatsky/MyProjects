 /* var john = {
    name: 'John',
    year: 1990,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


Person.prototype.caluculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}
var john = new Person('John', 1990, 'teacher');

john.caluculateAge(); */

// ***************************************************

var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfbirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfbirth = 1990;
john.job = 'teacher';