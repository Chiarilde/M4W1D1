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

//EXTRA 2//
function checkAnagrama(str1, str2) {
    let string1 = str1.toLowerCase();
    let string2 = str2.toLowerCase();
    let stringa1 = string1.split("").sort().join();
    let stringa2 = string2.split("").sort().join();
    if (stringa1 === stringa2) {
        return true;
    } else {
        return false;
    }
}
//EXTRA 3//
const anagrammi = ["Roma", "Amor"];
const nuovoArray = [];
function checkPossibiliAnagrammi(anagrammi, str) {
    let paroleAnagrammi = anagrammi.split("").sort();
    let paroleStringa = str.split("").sort();
}
//EXTRA 4//
function checkPalindromo(stringa) {
    let stringaModified = stringa.split("").reverse().join("").toLowerCase();
    if (stringa.toLowerCase() === stringaModified) {
        return true;
    } else {
        return false;
    }
}

//EXTRA 5//
function reverseNumber(num) {
    return String(num).split("").reverse().join("");
}
//EXTRA 6//
function createScala(num) {
    for (i = 1; i <= num; i++) {
        console.log("#".repeat(i));
    }
}
//EXTRA 7//
function reverseString(str) {
    return str.split("").reverse().join("");
}
