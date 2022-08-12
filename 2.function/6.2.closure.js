const age = 16
//sayAge() ReferenceError: sayAge is not defined - function block안에 선언된건 global에 안생김
//tellAge() ReferenceError: tellAge is not defined -얘는 똑같음 (일반 변수이기때문)

function init(){ 
    let age = 10

    function sayAge(){
        console.log(age)
    }

    let tellAge = function(){
        console.log(age)
    }

    sayAge()
    tellAge()
}
init()
//sayAge() //ReferenceError: sayAge is not defined - function call을 하던 안하던 function안에 있으면 에러
//tellAge() //ReferenceError: tellAge is not defined