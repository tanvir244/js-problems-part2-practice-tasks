// task-2
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function shortestName(array){
    let shortestLengthName = array[4];
    for(const iterator of array){
        if(iterator.length < shortestLengthName.length){
            shortestLengthName = iterator;
        }
    }
    return shortestLengthName;
}
const finalName = shortestName(heights2);
console.log(finalName);