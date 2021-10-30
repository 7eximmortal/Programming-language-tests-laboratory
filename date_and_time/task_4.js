function getDateAgo(date, days) {
    let last = new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
    return last.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 365));