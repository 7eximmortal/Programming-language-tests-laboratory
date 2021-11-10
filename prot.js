let guests = [`Robin`, `Barney`, `Ted+one`];
let sum = 200;

for (let value of guests) {
    if (/\+one/.test(value)) guests.push(`+1`);
    sum += 100;
};

if (guests.length == 13) sum += 100;

console.log(`Стоимость ужина - ${sum}$`);


