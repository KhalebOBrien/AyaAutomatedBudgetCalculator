// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets  (boths uppercase and lowercase) and numeric digits.

// Exampples 
// "abcde" => 0 no caracter repeats more than one.
// "aabbcde" => 2 a and b
// "aabBcde" => 2 a and b
// "invisibility" => 1 i occurs 6 times
// "aa11" => 2 a and 1
// "ABBA" => 2 a and b

function countDuplicates(strOfData) {
    let stringArr = strOfData.split('');
    let total = {};
    
    stringArr.forEach(e => {
        total[e] = (total[e] || 0) + 1;
    });
    return total;
}

console.log(countDuplicates("aabbcde"));

function removeNumbers(str) {
    let sp = str.split();
    let word = '';
    for(let ele of sp){
        if(typeof ele === "string"){
            word += str.replace(/[0-9]/g, '');;
        }
    }

    return word;
}

console.log(removeNumbers("ade213"));