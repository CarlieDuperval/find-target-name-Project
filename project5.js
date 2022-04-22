
function addUpNumber(arr){
    let sum = 0
    for(let i = 0; i < arr.length ; i++ ){
        sum += arr[i]
    }
    return sum
}

console.log(addUpNumber([12,4,5,7,9]))