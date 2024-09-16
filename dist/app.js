"use strict";
// function sum(numA:number,numB:number){
//     return numA+numB;
// }
// console.log(sum(10,20));
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
exports.users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
exports.logPerson = logPerson;
console.log('Users:');
