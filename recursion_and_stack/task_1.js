function sumTo(n) {
    if (n <= 1) return n;
    else return n + sumTo(n - 1);
};

console.log(sumTo(3));

function sumTo_2(n) {
    if (n <= 1) return n
    else {
        let sum = 0;
        for (let i = 1; i <= n; i++ ) {
            sum += i
        };
        return sum;
    };
};

console.log(sumTo_2(3));

function sumTo_3(n) {
    if (n <= 1) return n
    else return n * (n + 1) / 2;
};

console.log(sumTo_3(3));