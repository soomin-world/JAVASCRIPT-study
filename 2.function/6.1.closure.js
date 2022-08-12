const age = 16
//sayAge() //TypeError: sayAge is not a function
//tellAge() //ReferenceError: tellAge is not defined
console.log(sayAge)
//console.log(hello)//ReferenceError: hello is not defined

{
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

sayAge()
//tellAge() ReferenceError: tellAge is not defined