function topSalary(salaries) {
    let best = null;
    for (let [name, count] of Object.entries(salaries)) {
        if (!best) best = [name, count]
        else if(count > best[1]) best = [name, count];
    };
    
    if (best) return best[0];
    return best
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));