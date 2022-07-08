const palindromes = function (word) {

    function isLetter(str) {return str.match(/[a-z]/i);}
    let wordArray = word.split('');
    let filteredWordArray = wordArray.filter(isLetter);
    let amountOfBorderLettersMatchValidationLeft = Math.floor(wordArray.length / 2);

    while(amountOfBorderLettersMatchValidationLeft > 0){
        if(filteredWordArray.length <= 1){return true;}
        let firstLetter = filteredWordArray[0].toLowerCase();
        let lastLetter = filteredWordArray[filteredWordArray.length - 1].toLowerCase();

        if(firstLetter != lastLetter){return false;}
        filteredWordArray.pop();
        filteredWordArray.shift();
        amountOfBorderLettersMatchValidationLeft--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
