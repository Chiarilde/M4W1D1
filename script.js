//1//
function checkFifty(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}
//2//
function modifyString(stringa, posizione) {
    let modifiedString = stringa.slice(posizione);
    return modifiedString;
}
//3//
function checkNumbers(num1, num2) {
    if ((num1 >= 40 && num2 <= 60) || (num1 >= 70 && num2 <= 100)) {
        return true;
    } else {
        return false;
    }
}
//4//
function checkCityName(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city;
    } else {
        return false;
    }
}
//5//
function sumArray(array) {
    let somma = 0;
    for (let arr of array) {
        somma += arr;
    }
    return somma;
}
//6//
function checkArray(array) {
    for (let element of array) {
        if (element === 3 || element === 1) {
            return false;
        }
    }
    return true;
}
//7//
function angleType(angle) {
    if (angle < 90) {
        return "acuto";
    } else if (angle > 90 && angle < 180) {
        return "ottuso";
    } else if (angle === 90) {
        return "retto";
    } else if (angle === 180) {
        return "piatto";
    }
}

//8//
let arrayAcronym = [];
function createAcronym(phrase) {
    let modifiedPhrase = phrase.split(" ");

    for (let element of modifiedPhrase) {
        let firstWord = element.charAt(0);
        arrayAcronym.push(firstWord);
    }

    return arrayAcronym.join("");
}
