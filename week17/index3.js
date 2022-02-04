function formatDate(date) {
    let diff = new Date() - date;
    let sec = Math.floor(diff / 1000);
    let min = Math.floor(diff / 60000);
    let options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric'
    };


    if (diff < 1000) {
        return "Прямо сейчас";
    } else if (sec < 60) {
        return sec + ' сек. назад';
    } else if (min < 60) {
        return min + ' мин. назад';
    } else {
        return date.toLocaleString("ru", options);
    }
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 4 * 1000)));