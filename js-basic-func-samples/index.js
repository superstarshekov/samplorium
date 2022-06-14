function isEquals(arg1, arg2) {

    return arg1 === arg2;

}

function isBigger(arg1, arg2) {

    return arg1 > arg2;

}

function storeNames(...arr) {

    return arr;

}

function getDifference(num1, num2) {

        return num1 > num2 ? num1 - num2 : num2 - num1;

    }

function negativeCount(arr) {

    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {

            counter++;
        }
    }

    return counter;

}

function letterCount(str1, str2) {

    let counter = 0;
    
    for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) === str2) {
      counter++;
      }
  }
  return counter;

}

function countPoints(scores) {

    let pointCounter = 0;

    const a = 3;
    const b = 1;
    const c = 0;

        for (let i = 0; i < scores.length; i++) {

            let each = scores[i].split(':');

            if (+each[0] > +each[1]) {
            
                pointCounter += a;
            
            } else if (+each[0] === +each[1]) {

                pointCounter += b;

            } else {

                pointCounter += c;

            }

    }

return pointCounter;

}