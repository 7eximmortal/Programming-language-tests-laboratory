function getWeekDay(date) {
    switch (date.getDay()) {
        case 0:
            return `Воскресенье`;
            break;
        case 1:
            return `Понедельник`;
            break;
        case 2:
            return `Вторник`;
            break;
        case 3:
            return `Среда`;
            break;
        case 4:
            return `Четверг`;
            break;
        case 5:
            return `Пятница`;
            break;
        case 6:
            return `Суббота`;
            break;
    };
};

let date = new Date(2012, 0, 3);

console.log(getWeekDay(date));