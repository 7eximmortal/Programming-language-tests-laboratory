function unique(arr) {
    let set = new Set(arr);
    let names = [];

    for (let value of set) {
        names.push(value);
    };
    
    return names;
};

let arr = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


console.log(unique(arr));