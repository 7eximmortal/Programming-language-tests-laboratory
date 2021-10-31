function formatDate(date) {
    let dateOther = new Date(date);
    let dateNow = new Date();

    let dateRaznost = dateNow - dateOther;

    if (dateRaznost < 1000) return `Прямо сейчас`
    else if (dateRaznost < 60000) return `${dateRaznost / 1000} сек назад`
    else if (dateRaznost < 3600000) return `${dateRaznost / 60000} мин назад`
    else return `${dateOther.getDate()}.${dateOther.getMonth()}.${dateOther.getFullYear()} ${dateOther.getHours()}:${dateOther.getMinutes()}`;
};

console.log(formatDate(new Date() - 100));