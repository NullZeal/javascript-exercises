const removeFromArray = function(array, ...otherArgs) {
    let newArray = array;
    let argsArray = otherArgs;

    for (j=0; j < argsArray.length;j++) 
    {
        for(i=0;i<newArray.length;i++)
        {
                
            if(newArray[i] === argsArray[j])
            {
                    newArray.splice(i,1);
            }
        }
    }
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
