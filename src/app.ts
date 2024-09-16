// function sum(numA:number,numB:number){
//     return numA+numB;
// }
// console.log(sum(10,20));


// const myname:string = "truong";
// const Age:number=20;
// const mystatus :boolean=true;
// const myoject:{id:number,price:number}={id:1,price:1000};
// const arraynumber:number[]=[1,2,3,4];
// const arraystring:string[]=["1","2","3"];
// const arrOject:{id:number,price:number}[]=[{id:1,price:1000}]

export type User ={name:string,age:number,occupation:string};

export const users: User[] = [
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

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
