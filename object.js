function hi() {
    console.log(`Привет!`);
};

let user = {
    name: `Петренко!`,
    age: 21,
};

user.hi = hi

console.log(user.hi());