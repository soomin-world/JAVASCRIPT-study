let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')

let user={
    name:'neo'
}

let userId = Symbol('userId')
user.userId = 1
user[userId]=2

//과제 : user객체를 iterating 해서 , key등을 출력하라
for(let key in user) console.log(key)

console.log(Object.keys(user))

id1 = Symbol.for('id')
id2 = Symbol.for('id')
console.log(id1==id2)

let key = Symbol.keyFor(id1)

id = Symbol.for('name') //global symbol
id2 = Symbol('name')//local symbol
