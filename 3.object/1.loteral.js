let user = {
    name: 'frances', //entry
    age: 70
}

user={
    name:{
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face',
    age:13,
    interests:['music', 'mobie'],
    sing: () => console.log('lala')
}

console.log(user.name)
console.log(user.name.first)

user.sing()

//user.'nick name'
// user.nick name

console.log(user['nick name'])
console.log(user['name']['first'])

user.name.first = 'john'
user['age'] = 50
console.lof(user.name.first, user.age)

let key = 'nick name'
console.log(user[key])
key = 'age'
console.log(user[key])

let man = {
    name 
}