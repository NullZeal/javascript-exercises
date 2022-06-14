const repeatString = function(string, xTimesRepeated) {
    if (xTimesRepeated < 0){
        return 'ERROR';
    }
    newString = '';
    for(i=0; i<xTimesRepeated; i++){
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
