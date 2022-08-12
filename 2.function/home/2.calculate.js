/*과제:
1. calculate.js 를 callback으로 refactorimg히리
-, *, / 연산을 callback으로 처리한다.*/


let multiple = function(a, b){
    return a*b
}

let minus = function(a,b){
    return a-b
}

let division = function(a,b){
    return a/b
}

let calculator = function(a, b, op){
    return op(a, b)
}

console.log(calculator(1, 2, minus))

console.log(calculator(10, 100, division))

console.log(calculator(10, 3, multiple))