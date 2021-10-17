let user = {
    name: `Петренко`,
    age: 21,
    hi() {return this.name},
};

console.log(user.hi())

let ket = user.hi

console.log(ket());