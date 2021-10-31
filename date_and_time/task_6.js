function getSecondsToTomorrow() {
    let date = new Date();

    let day = 86400;

    let dateAtSecond = (date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds()

    return day - dateAtSecond;

};

console.log(getSecondsToTomorrow());