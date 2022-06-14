function reverseNumber(num) {

    let negativeNum; 
        if (negativeNum < 0) {
        num = num * -1;
        } 
    let reverse = 0; 
        while (num >= 1) {
        reverse = Math.floor(reverse * 10 + num % 10); 
        num = num / 10;
  }; 
    return negativeNum === true ? reverse *- 1 : reverse;

}

function forEach(arr, func) {

    for (let i of arr) {
        func(i);
    }
}

function map(arr, func) {
    
    let newArray = [];
    forEach(arr, (item) => {
 newArray.push(func(item)) 
});
    return newArray;
}

function filter(arr, func) {
    
    let newArray = [];
    forEach(arr, (item) => {
        if (func(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

function getAdultAppleLovers(data) {

    let persons = filter(data, function(el) {
 return el.age > 18 && el.favoriteFruit === 'apple' 
});
    return map(persons, function(el) {
 return el.name 
});
}

function getKeys(obj) {
    
    let keyNames = [];
    for (let property in obj) {
        keyNames.push(property);
    }
    return keyNames;
}

function getValues(obj) {
    
    let keys = getKeys(obj);
    let values = [];
    for (let i = 0; i < keys.length; i++) {
        values.push(obj[keys[i]]);
      }

      return values;
    }

function showFormattedDate(dateObj) {
    
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();
    return 'It is ' + day + ' of ' + dateObj.toLocaleString('en', { month: 'short' }) + ', ' + year;
}