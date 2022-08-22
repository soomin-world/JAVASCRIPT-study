let makeUser = function(name, age){
    return{
        name: name,
        age: age
    }
}

makeUser = function(name, age){
    return{
    name:name,
    age: age
    }
}

console.log(makeUser('doris', 57))

function User(name){
    this.name = namethis.greet= () => console.log(`I am ${this.name}.`)
    return this
}

let user1 = User('bob')
user1 = new User('bob')
console.assert.log(user1)