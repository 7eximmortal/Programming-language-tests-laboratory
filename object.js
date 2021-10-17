let user = {
    name: `Петренко`,
    age: 21,
    hi: function() {
        let arrow = () => {return this.name};

        return arrow();
    },
};

console.log(user.hi())