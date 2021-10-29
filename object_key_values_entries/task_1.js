function sumSalaries(salaries) {
    let allSum = Object.values(salaries).reduce((accum, value) => {
        return accum + value;
    }, 0);
    
    return allSum;
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries));