let user = {
    name :'leo'
}

function greet(){
    console.log(`I am ${this.name}.`)
}

greet()

let fn = greet.bind(user) // function.bind() ->bind의 파라미터 를 this변수안에 넣음.
fn()

//call 은 주어function 을 call하고 bind 는 주어 function 을 return 한다. 

setTimeout(fn, 100)

//
user = {
    name:'john',
    greet(){
        console.log(`I am ${this.name}`)
    }
}

//과제: user.greet을 할당하라. greet의 this 엔 user 가 담겨잇다.


fn = user.greet.bind(user)
setTimeout(fn, 200)


console.log(fn == user.greet)