let user = {
    name: `Петренко`,
    age: 21,
    hi: () => {
        return this.name
    },
};

console.log(user.hi())