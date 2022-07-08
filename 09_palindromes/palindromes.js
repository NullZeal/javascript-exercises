const palindromes = function (word) {

    function isLetter(str) {return str.match(/[a-z]/i);}
    let wordArray = word.split('');
    let filteredWordArray = wordArray.filter(isLetter);
    
    let i = Math.floor(wordArray.length / 2);
    console.log(filteredWordArray);

    while(i > 0){
        if(filteredWordArray.length == 1){return true;}
        let firstLetter = filteredWordArray[0].toLowerCase();
        let lastLetter = filteredWordArray[filteredWordArray.length - 1].toLowerCase();

        if(firstLetter != lastLetter){return false;}
        filteredWordArray.pop();
        filteredWordArray.shift();

        console.log(filteredWordArray);
        i--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
