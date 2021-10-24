function test() {
    this.name = `Влад`;
};

test.name = `Андрей`;

console.log(new test());