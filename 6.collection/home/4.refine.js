/*
과제:
refine()이 정제됝(중복 제거된) 배열을 return 하라 
*/

let user = {name: 'scott'}
let fn = () => 1
let arr = ['ucal', user, 'today', fn,'ucal', user, 1, 1, fn]

function refine(arr){
    return Array.from(new Set(arr))
}

console.log(refine(arr))