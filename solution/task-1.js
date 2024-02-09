
const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(numbers){
    let lowestNum = 1500;
    for(const iterator of numbers){
        if(iterator < lowestNum){
            lowestNum = iterator;
        }
    }
    return lowestNum;
}
const result = lowestNumber(heights2);
console.log(result);