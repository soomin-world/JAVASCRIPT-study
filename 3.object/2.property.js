let user={}

user.height = 200
user['weight']=80

console.log(user.height, user.weight)

delete user.weight

console.log('height' in user)
console.log('weight' in user)

for( let key in user) console.log(user[key])

user.name= 'paker'
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

user = {
    greet: () => console.log('hello')
}

user.greet()

//optional chaining
user=[]
let address=[]
user.address = addressaddress.street = 'sejong'
console.log(user.address.street)

console.log(user.city?.name)//undefined

let street
//street = user.city.street
street = user?.city?.street
console.log(street)
street = user?.city?.street ?? 'where'
user = null
//user.greet()
console.log(user?.greet)
user=undefined

user={}
//user.greet]
console.log(user.greet?.())