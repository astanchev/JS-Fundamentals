function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);

    let outYear = date.getFullYear();
    let outMonth = date.getMonth() + 1;
    let outDay = date.getDate();

    console.log(`${outYear}-${outMonth}-${outDay}`);
}

nextDay(2016, 9, 30);