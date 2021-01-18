// Your code here
function mapToNegativize(array) {
    return array.map(i => i * -1)
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    return array.map(i => i*2)
}
 function mapToSquare(array){
     return array.map(i => i ** 2)
 }

 function reduceToTotal(array, start){
     return array.reduce(array, start)
 }