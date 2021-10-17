function Human(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
};

function NoHuman(name) {
    let noThis = {};

    noThis.name = name;

    return noThis;
};

let maria = new Human(`Мария`, 16, `Женский`);
let notMaria = NoHuman(`Не мария`);
let notVlad = NoHuman(`Не влад`);

console.log(notMaria.name);
console.log(notVlad.name);

console.log(`Все данные обьекта: 
Имя: ${maria.name}
Возраст: ${maria.age} 
Пол: ${maria.sex}`);