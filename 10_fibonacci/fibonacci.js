const fibonacci = function(position) {
    if(position < 0){return "OOPS"}
    if(position == 0){return 0;}
    if(position == 1){return 1;}

    let fibonacciArray = [0,1];
    let counter = 2;

    while (counter <= position){
        fibonacciArray.push(fibonacciArray[counter-1] + fibonacciArray[counter-2]);
        counter++;
    }
    
    return fibonacciArray[position];
};

// Do not edit below this line
module.exports = fibonacci;
