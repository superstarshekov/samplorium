
function getAge(birthday) {
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || month === 0 && today.getDate() < birthDate.getDate()) {
        age = age - 1;
    }

    return age;
}

function getWeekDay(date) {
let weekDay = date.getDay();

switch (weekDay) {

    case 0:
        return 'Sunday';

    case 1:
        return 'Monday';

    case 2:
        return 'Tuesday';

    case 3:
        return 'Wednesday';

    case 4:
        return 'Thursday';

    case 5: 
        return 'Friday';

    case 6:
        return 'Saturday';
    
}

return weekDay;
}

function getAmountDaysToNewYear() {

    let today = new Date();

    let newYear = new Date(2022, 0, 1);

    return Math.ceil(Math.abs(today - newYear) / (1000 * 60 * 60 * 24));
}

function getProgrammersDay(year) {

    
    let progDate = new Date();

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        progDate = new Date(year, 8, 12);
    } else {
        progDate = new Date(year, 8, 13);

    }

    let day = progDate.getDate();

    return day + ' Sep, ' + year + ' ' + '(' + getWeekDay(progDate) + ')';


}

function howFarIs(dayWeek) {
 
    let weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    let date1 = new Date();
    let name1 = weekday[date1.getDay()];

    if (name1.toLocaleLowerCase() === dayWeek.toLocaleLowerCase()) {
        return `Hey, today is ${dayWeek} =)`
    } else {
        let numberOfDay;  
        
        switch (dayWeek) {
     case 'Sunday':
        numberOfDay = 0;
        break;
     case 'Monday':
        numberOfDay = 1;
        break;
     case 'Tuesday':
        numberOfDay = 2;
        break;
     case 'Wednesday':
        numberOfDay = 3;
        break;
     case 'Thursday':
        numberOfDay = 4;
        break;
     case 'Friday':
        numberOfDay = 5;
        break;
     case 'Saturday':
        numberOfDay = 6;
        break;
 }

 let numberOfToday = new Date().getDay();

 if (numberOfDay > numberOfToday) {
    return numberOfDay - numberOfToday;
 } else if (numberOfDay < numberOfToday) {
    return 7 - (numberOfToday - numberOfDay);
 } else {
     return 0;
 }

}

}

function isValidIdentifier(someString) {
    let check = (/^[^\d]\w+\W*[^!]$/gm).test(someString);

    return check;
}


function capitalize(testStr) {

    let res = testStr.replace(/\b\w/g, f => f.toUpperCase());

    return res;
}

function isValidAudioFile(inputStr) {

    let checkName = (/[A-Za-z+(\b.mp3\b|\b.flac\b|\b.alac\b|\b.aac\b)]$/).test(inputStr);

    return checkName;
}

function getHexadecimalColors(colorStr) {

    let arr = [];

    return colorStr.match(/#([a-f0-9]{3}){1,2}\b/gi) || arr;
}

function isValidPassword(password) {

    return /^(?=.*[a-z].*[a-z].*[a-z])(?=.*[A-Z].*[A-Z].*[A-Z])(?=.*\d.*\d.*\d)[\S\s]{8,}$/.test(password);

}

function addThousandsSeparators(sum) {
    let temp = sum.toString().split('').reverse().join('');

    let res = temp.replace(/(\d{3}(?!.*\.|$))/g, '$1,').split('').reverse().join('');

    return res;
}

function getAllUrlsFromText(someText) {

    let arr2 = [];
    return someText.match(/\bhttps?:\/\/\S+/gi) || arr2;

}