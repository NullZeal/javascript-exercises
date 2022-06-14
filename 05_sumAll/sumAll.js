const sumAll = function(n1, n2) {

    if(isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 0
    || Number(n1) !== n1 || Number(n2) !== n2)
    {
        return 'ERROR';
    }

    if(n1==n2){
        return n1;
    }

    sum = 0;
    
    if (n1<n2){
        for(i=n1; i<=n2;i++){
            sum += i;
        }
    }
    else if (n2<n1)
        for(i=n2; i<=n1;i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;