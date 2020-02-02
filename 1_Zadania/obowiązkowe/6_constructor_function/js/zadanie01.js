const Robot = function(name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
    if (this.isFunctional === true) {
        console.log(`Robot ${ this.name } greets ${ toWho }`);
    } else {
        console.log(`Robot ${ this.name } is broken`);
    }
}

Robot.prototype.changeName = function(newName) {
    console.log(`Robot ${ this.name } changes name to ${ newName }`);

    this.name = newName;
}

Robot.prototype.fixIt = function () {
    this.isFunctional = true;

    console.log(`Robot ${ this.name } was fixed`);
}

let robot1 = new Robot('Buguś');

robot1.sayHi('Maciuś');
robot1.changeName('John');
robot1.sayHi('Macius');
robot1.fixIt();

let robot2 = new Robot('Szymuś');

robot2.sayHi('Maciuś');
robot2.fixIt();
robot2.changeName('John');
robot2.sayHi('Maciuś');