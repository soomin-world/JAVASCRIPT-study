let add = function(a, b){
    return a + b
}

add = (a, b) => a + b
console.log(add(1, 2))

const double = n => 2*n
console.log(double(2))

const greet = () => console.log('hello')
greet()

//
add = (a, b)=>{
    const result = a + b
    return result
}

console.log(add(1,2))