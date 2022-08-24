interface Profile{
    id: number
    username: string
    nickname: string
}

function printUsername(profile: Profile){
    console.log(profile.username)
}

const profile: Profile = {
    id: 1,
    username: 'cain',
    nickname: 'hero'
}

printUsername(profile)

//
interface Relationship{
    from: Profile
    to: Profile
}

const relationship: Relationship = {
    from: {
        id:1,
        username:'cain',
        nickname:'hero'
    },
    to:{
        id: 2,
        username:'able',
        nickname:'warrior'
    }
}

//
interface Account extends Profile{
    email: string
    password: string
}

//과제: {} 안을 채워라. 
const account: Account = {
    id: 12,
    username: 'Sumin',
    nickname: 'sum',
    email: 'ojudve123@gmail.com',
    password: '1234'
}

//
interface User{
    id: number
    username: string
    photoUri: string
}

let user : User={
    id : 1,
    username: 'abel'
}

user={
    id:1,
    username:'abel',
    photoUri: 'face.jpg'
}

console.log(user)

//
interface Shape{
    getArea():  number
    getPerimeter(): number
}

class Circle implements Shape{
    constructor(private radius : number){}

    getArea(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    getPerimeter(): number{
        return 2 * Math.PI * this.radius
    }
}